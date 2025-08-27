import { Box, ChakraProvider, Flex } from '@chakra-ui/react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { theme } from './config/theme'
import { Home } from './screens/HomePage'
import { Order } from './screens/OrderPage'
import Products from './screens/ProductsPage'
import Footer from './components/footer'
import Navbar from './components/headers/HomeNavbar'
import Dizayn from './screens/DizaynYaratish'
import Komponiya from './screens/Kompaniyalar'
import Katalog from './screens/ButunKatalog'



function AppLayout() {
  return (
    <Flex minH="100vh">
      <Flex direction="column" flex="1">
        <Navbar />
          <Box flex="1" p={6}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sets" element={<Order />} />
              <Route path="/custom" element={<Products />} />
              <Route path="/design" element={<Dizayn />} />
               <Route path="/company" element={<Komponiya />} />
               <Route path="/catalog" element={<Katalog />} />
            </Routes>
          </Box>
          <Footer />
        </Flex>
      </Flex>
  )
}

const App = () => {

  return (
   <ChakraProvider theme={theme}>
    <AppLayout />
   </ChakraProvider>
  )
}

export default App
