"use client"

import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  VStack,
  HStack,
  Image,
  Text,
  IconButton,
  Button,
  Box,
} from "@chakra-ui/react"
import { AddIcon, MinusIcon, DeleteIcon } from "@chakra-ui/icons"
import { useCart } from "../../contexts/CartContext"

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
}

function formatPrice(price: number): string {
  return `${price.toLocaleString()} руб`
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { state, updateQuantity, removeItem, clearCart } = useCart()

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">
          <Text fontSize="xl">Savat ({state.totalItems} dona)</Text>
        </DrawerHeader>

        <DrawerBody>
          {state.items.length === 0 ? (
            <VStack spacing={4} py={8} textAlign="center">
              <Text fontSize="lg" color="gray.500">
                Savat bo'sh
              </Text>
              <Text fontSize="sm" color="gray.400">
                Mahsulotlarni qo'shish uchun katalogga o'ting
              </Text>
            </VStack>
          ) : (
            <VStack spacing={4} align="stretch">
              {state.items.map((item) => (
                <Box key={item.product.id} p={4} borderWidth="1px" borderRadius="md">
                  <HStack spacing={4}>
                    <Image
                      src={item.product.image || "/placeholder.svg"}
                      alt={item.product.title}
                      boxSize="60px"
                      objectFit="cover"
                      borderRadius="md"
                    />

                    <VStack flex={1} align="start" spacing={1}>
                      <Text fontWeight="semibold" fontSize="sm" noOfLines={2}>
                        {item.product.title}
                      </Text>
                      <Text fontSize="sm" color="pink.500" fontWeight="bold">
                        {formatPrice(item.product.price)}
                      </Text>
                    </VStack>

                    <VStack spacing={2}>
                      <HStack>
                        <IconButton
                          aria-label="Kamaytirish"
                          icon={<MinusIcon />}
                          size="xs"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          isDisabled={item.quantity <= 1}
                        />
                        <Text minW="30px" textAlign="center" fontSize="sm">
                          {item.quantity}
                        </Text>
                        <IconButton
                          aria-label="Ko'paytirish"
                          icon={<AddIcon />}
                          size="xs"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        />
                      </HStack>

                      <IconButton
                        aria-label="O'chirish"
                        icon={<DeleteIcon />}
                        size="xs"
                        colorScheme="red"
                        variant="ghost"
                        onClick={() => removeItem(item.product.id)}
                      />
                    </VStack>
                  </HStack>

                  <HStack justify="space-between" mt={2}>
                    <Text fontSize="sm" color="gray.600">
                      Jami: {formatPrice(item.product.price * item.quantity)}
                    </Text>
                  </HStack>
                </Box>
              ))}
            </VStack>
          )}
        </DrawerBody>

        {state.items.length > 0 && (
          <DrawerFooter borderTopWidth="1px" flexDirection="column" gap={4}>
            <HStack justify="space-between" w="full">
              <Text fontSize="lg" fontWeight="bold">
                Umumiy:
              </Text>
              <Text fontSize="lg" fontWeight="bold" color="pink.500">
                {formatPrice(state.totalPrice)}
              </Text>
            </HStack>

            <VStack w="full" spacing={2}>
              <Button colorScheme="pink" size="lg" w="full">
                Buyurtma berish
              </Button>
              <Button variant="outline" size="sm" onClick={clearCart}>
                Savatni tozalash
              </Button>
            </VStack>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  )
}
