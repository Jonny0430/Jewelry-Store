"use client"

import { createContext, useContext, useReducer, type ReactNode } from "react"

export type Product = {
  id: string
  title: string
  description: string
  price: number
  image: string
  tag?: string
  isNew?: boolean
  discount?: number
}

export type CartItem = {
  product: Product
  quantity: number
}

type CartState = {
  items: CartItem[]
  totalItems: number
  totalPrice: number
}

type CartAction =
  | { type: "ADD_ITEM"; product: Product; quantity?: number }
  | { type: "REMOVE_ITEM"; productId: string }
  | { type: "UPDATE_QUANTITY"; productId: string; quantity: number }
  | { type: "CLEAR_CART" }

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItemIndex = state.items.findIndex((item) => item.product.id === action.product.id)

      let newItems: CartItem[]

      if (existingItemIndex >= 0) {
        newItems = state.items.map((item, index) =>
          index === existingItemIndex ? { ...item, quantity: item.quantity + (action.quantity || 1) } : item,
        )
      } else {
        newItems = [...state.items, { product: action.product, quantity: action.quantity || 1 }]
      }

      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0)
      const totalPrice = newItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

      return {
        items: newItems,
        totalItems,
        totalPrice,
      }
    }

    case "REMOVE_ITEM": {
      const newItems = state.items.filter((item) => item.product.id !== action.productId)
      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0)
      const totalPrice = newItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

      return {
        items: newItems,
        totalItems,
        totalPrice,
      }
    }

    case "UPDATE_QUANTITY": {
      const newItems = state.items
        .map((item) =>
          item.product.id === action.productId ? { ...item, quantity: Math.max(0, action.quantity) } : item,
        )
        .filter((item) => item.quantity > 0)

      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0)
      const totalPrice = newItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

      return {
        items: newItems,
        totalItems,
        totalPrice,
      }
    }

    case "CLEAR_CART":
      return initialState

    default:
      return state
  }
}

type CartContextType = {
  state: CartState
  addItem: (product: Product, quantity?: number) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addItem = (product: Product, quantity = 1) => {
    dispatch({ type: "ADD_ITEM", product, quantity })
  }

  const removeItem = (productId: string) => {
    dispatch({ type: "REMOVE_ITEM", productId })
  }

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", productId, quantity })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  return (
    <CartContext.Provider value={{ state, addItem, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
