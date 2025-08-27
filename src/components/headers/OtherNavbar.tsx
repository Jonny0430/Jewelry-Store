import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Link,
  Text,
  VStack,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Button,
} from "@chakra-ui/react";
import { FaBars, FaUser, FaHeart, FaShoppingCart, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { Outlet, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const menuItems = [
  { label: "СЛАДКИЕ ДНИ", to: "/" },
  { label: "ПОДАРОЧНЫЕ НАБОРЫ", to: "/gifts" },
  { label: "СОБРАТЬ НАБОР", to: "/custom" },
  { label: "СОЗДАТЬ ДИЗАЙН", to: "/design" },
  { label: "КОМПАНИЯМ", to: "/company" },
  { label: "ВЕСЬ КАТАЛОГ", to: "/catalog" },
];

export default function OtherNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const HeaderContent = () => (
    <Box as="header" w="100%" bg="white" borderBottom="1px solid" borderColor="gray.200">
      <Container maxW="container.xl" py={3}>
        <Flex align="center" justify="space-between">
          {/* Left Menu (Desktop) */}
          <HStack spacing={4} display={{ base: "none", md: "flex" }}>
            {menuItems.slice(0, 3).map((item) => (
              <Link
                as={NavLink}
                key={item.to}
                to={item.to}
                fontWeight="bold"
                color="blue.600"
                _activeLink={{ color: "blue.800", textDecoration: "underline" }}
              >
                {item.label}
              </Link>
            ))}
          </HStack>

          {/* Logo */}
          <VStack spacing={0}>
            <Box
              bg="#e9f5ff"
              color="#5aa7d8"
              rounded="full"
              px={3}
              py={1}
              fontWeight="extrabold"
              boxShadow="0 4px 0 #cfe8fb"
            >
              macaron
            </Box>
            <Text fontWeight="extrabold" color="#7e9cc5" fontSize="sm" letterSpacing="0.5px">
              shop
            </Text>
          </VStack>

          {/* Right Menu (Desktop) */}
          <HStack spacing={4} display={{ base: "none", md: "flex" }}>
            {menuItems.slice(3).map((item) => (
              <Link
                as={NavLink}
                key={item.to}
                to={item.to}
                fontWeight="bold"
                color="blue.600"
                _activeLink={{ color: "blue.800", textDecoration: "underline" }}
              >
                {item.label}
              </Link>
            ))}
          </HStack>

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              aria-label="Open Menu"
              icon={<FaBars />}
              onClick={onOpen}
              variant="ghost"
              size="lg"
            />
          )}
        </Flex>
      </Container>
    </Box>
  );

  return (
    <>
      {/* Top Bar */}
      <Box bg="#f9f5f3" borderBottom="1px solid" borderColor="gray.200" fontSize="sm">
        <Container maxW="container.xl" py={2}>
          <Flex justify="space-between" align="center" wrap="wrap" gap={2}>
            <HStack spacing={4}>
              <Link href="#">Гарантия свежести</Link>
              <Link href="#">Доставка и оплата</Link>
              <Link href="#">Оптовые поставки</Link>
              <Link href="#">Контакты</Link>
            </HStack>
            <HStack spacing={4}>
              <HStack spacing={1}>
                <FaMapMarkerAlt size={14} />
                <Text fontSize="sm">Санкт-Петербург</Text>
              </HStack>
              <HStack spacing={1}>
                <FaPhone size={14} />
                <Link href="tel:+78123098288">8 812 309-82-88</Link>
              </HStack>
              <HStack spacing={2}>
                <IconButton aria-label="Вход" icon={<FaUser />} size="sm" />
                <IconButton aria-label="Избранное" icon={<FaHeart />} size="sm" />
                <Button size="sm" leftIcon={<FaShoppingCart />} variant="outline">
                  в корзине (4 товара)
                </Button>
              </HStack>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Header Content */}
      {HeaderContent()}

      {/* Drawer for Mobile */}
      {isMobile && (
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <VStack align="start" spacing={4} mt={8}>
                {menuItems.map((item) => (
                  <Link
                    as={NavLink}
                    key={item.to}
                    to={item.to}
                    fontWeight="semibold"
                    fontSize="lg"
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      )}

      {/* Main Content */}
      <Box>
        <Outlet />
      </Box>
    </>
  );
}
