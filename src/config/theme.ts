import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  fonts: {
    heading: `'Figtree', sans-serif`,
    body: `'Figtree', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: "#f4faff", // Yengil ko‘k (yoki sizga kerakli fon rangi)
        color: "gray.800", // matn rangi (ixtiyoriy)
      },
    },
  },
})