import {
  Box,
  Container,
  Flex,
  HStack,
  VStack,
  Link as CLink,
  Text,
  IconButton,
  Button,
  Badge,
  useColorModeValue,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Divider,
} from "@chakra-ui/react";
import {
  MapPin,
  Phone,
  User,
  Heart,
  ShoppingCart,
  ChevronDown,
  Menu as MenuIcon,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

type NavItem = { label: string; to: string; chevron?: boolean; dot?: boolean };

const topbarLinks = [
"Yangilik kafolati",
"Etkazib berish va to'lash",
"Ulgurji buyumlar",
"Kontaktlar",
];

const leftNav: NavItem[] = [
{ label: "SHIRIN KUNLAR", to: "/", dot: true},
{ label: "SOVG'A TO'PLAMLARI", to: "/sets", chevron: true },
{ label: "TO'PLASH", to: "/custom"},
];

const rightNav: NavItem[] = [
{ label: "DIZAYN YARATISH", to: "/design"},
{ label: "KOMPANIYALAR UCHUN", to: "/company", chevron: true },
{ label: "BUTUN KATALOG", to: "/catalog", chevron: true },
];

export default function Navbar() {
  const border = useColorModeValue("gray.200", "gray.700");
  const topBg = useColorModeValue("#f6eee8", "gray.800");
  const muted = useColorModeValue("gray.600", "gray.300");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const NavLinkItem = ({ item }: { item: NavItem }) => (
    <CLink
      as={NavLink}
      to={item.to}
      fontWeight="bold"
      textTransform="uppercase"
      whiteSpace="nowrap"
      _activeLink={{ color: "blue.700", textDecoration: "underline" }}
      display="inline-flex"
      alignItems="center"
      gap={1}
    >
      {item.label}
      {item.chevron && <ChevronDown size={16} />}
      {item.dot && (
        <Badge
          ml={1}
          colorScheme="pink"
          rounded="full"
          px={2}
          fontSize="0.65rem"
          textTransform="none"
        >
          new
        </Badge>
      )}
    </CLink>
  );

  return (
    <Box>
      {/* Topbar */}
      <Box bg={topBg} borderBottomWidth="1px" borderColor={border} fontSize="sm">
        <Container maxW="container.xl" py={2}>
          <Flex justify="space-between" align="center" wrap="wrap" gap={2}>
            <HStack spacing={4} display={{ base: "none", md: "flex" , family: "montserrat"}}>
              {topbarLinks.map((t) => (
                <CLink key={t} color={muted} href="#" fontFamily={"montserrat"} fontSize={"sm"}>
                  {t}
                </CLink>
              ))}
            </HStack>

            <HStack spacing={4} fontFamily={"montserrat"}>
              <HStack spacing={1}>
                <MapPin size={16} />
                <Text fontSize="sm">Sankt-Peterburg ▾</Text>
              </HStack>
              <HStack spacing={1}>
                <Phone size={16} />
                <CLink href="tel:+78123098288" fontWeight="semibold">
                  8 812 309-82-88
                </CLink>
              </HStack>
              <HStack spacing={2} display={{ base: "none", md: "flex" }}>
                <IconButton aria-label="Kirish" variant="ghost" icon={<User size={18} />} />
                <IconButton aria-label="Tavsiya etilgan" variant="ghost" icon={<Heart size={18} />} />
              </HStack>
              <Button
                size="sm"
                leftIcon={<ShoppingCart size={18} />}
                variant="outline"
                rounded="full"
              >
                savatda (4 dona)
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main nav */}
      <Box bg="white" borderBottomWidth="1px" borderColor={border} py={3}>
        <Container maxW="container.xl">
          <Flex align="center" justify="space-between" gap={4}>
            {/* Left nav */}
            <HStack spacing={6} display={{ base: "none", lg: "flex" }}>
              {leftNav.map((item) => (
                <NavLinkItem key={item.to} item={item}  />
              ))}
            </HStack>

            {/* Logo center */}
            <Link to="/">
            <VStack spacing={0}>
              <img src="././public/logo/logo.png" alt="Macaron Shop" style={{ height: 'auto', width: 'auto' }} />
            </VStack>
            </Link>

            {/* Right nav */}
            <HStack spacing={6} display={{ base: "none", lg: "flex" }}>
              {rightNav.map((item) => (
                <NavLinkItem key={item.to} item={item} />
              ))}
            </HStack>

            {/* Mobile hamburger */}
            <IconButton
              aria-label="Открыть меню"
              display={{ base: "inline-flex", lg: "none" }}
              icon={<MenuIcon />}
              onClick={onOpen}
              variant="outline"
            />
          </Flex>
        </Container>
      </Box>

      {/* Mobile drawer */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody pt={10}>
            <VStack align="start" spacing={5}>
              {[...leftNav, ...rightNav].map((item) => (
                <NavLinkItem key={`m-${item.to}`} item={item} />
              ))}
            </VStack>
            <Divider my={6} />
            <VStack align="start" spacing={3} color={muted}>
              {topbarLinks.map((t) => (
                <CLink key={`tb-${t}`} href="#">{t}</CLink>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
