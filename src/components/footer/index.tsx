import {
  Box,
  Container,
  Divider,
  HStack,
  Heading,
  Icon,
  IconButton,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiHeart, FiTruck, FiFeather } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaVk } from "react-icons/fa";

export default function Footer() {
  const border = useColorModeValue("gray.200", "gray.700");
  const bg = useColorModeValue("gray.100", "gray.900");
  const muted = useColorModeValue("gray.600", "gray.400");

  return (
    <Box bg={bg} borderTop="1px solid" borderColor={border} mt={10}>
      <Container maxW="container.xl" py={8}>
        {/* Benefits */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={8}>
          <Benefit icon={FiHeart} text="Qo‘lda va mehr bilan tayyorlaymiz" />
          <Benefit icon={FiTruck} text="Buyurtma qilingan kunida yetkazib berish" />
          <Benefit icon={FiFeather} text="100% tabiiy un va ingredientlar" />
        </SimpleGrid>
        <Divider mb={8} />

        {/* Links + contacts */}
        <SimpleGrid columns={{ base: 1, md: 4, lg: 5 }} spacing={6}>
          <VStack align="flex-start" spacing={3}>
         <Text fontSize="sm" color={muted}>
                © 2025 Makaronshop
                <br /> MCHJ “Pekari”, Sankt-Peterburg,
                <br /> Mirabova Tupikovskiy ko‘chasi, 22-uy
              </Text>
              </VStack>

              <LinkColumn
                title="MA’LUMOT"
                links={[
                  "Kompaniya haqida",
                  "Ta’m va yangiligi kafolati",
                  "Yetkazib berish va to‘lov",
                  "Aloqa"
                ]}
              />
              <LinkColumn
                title="KATALOG"
                links={[
                  "Desertlar katalogi",
                  "Tayyor to‘plamlar",
                  "O‘zingizning to‘plamingizni tuzing",
                  "Aksiyalar"
                ]}
              />
              <LinkColumn
                title="BIZNES UCHUN"
                links={[
                  "Korporativ sovg‘alar",
                  "Yuridik shaxslar uchun",
                  "Ulgurchilar"
                ]}
              />
          <Stack spacing={3}>
            <Heading as="h5" size="sm" color="gray.700">
              +8210 2491 5777
            </Heading>
            <Text color={muted}>soat 9:00 dan 21:00 gacha</Text>
            <HStack spacing={2}>
              <IconButton aria-label="Instagram" icon={<FaInstagram />} variant="ghost" />
              <IconButton aria-label="Facebook" icon={<FaFacebookF />} variant="ghost" />
              <IconButton aria-label="VK" icon={<FaVk />} variant="ghost" />
            </HStack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function Benefit({ icon, text }: { icon: React.ElementType; text: string }) {
  const color = useColorModeValue("blue.500", "blue.300");
  const border = useColorModeValue("blue.200", "blue.700");
  return (
    <HStack spacing={3} align="flex-start" fontFamily={'monospace'}>
      <Box
        borderWidth="2px"
        borderColor={border}
        rounded="lg"
        w="48px"
        h="48px"
        display="grid"
        placeItems="center"
        color={color}
        bg="white"
      >
        <Icon as={icon} boxSize={6} />
      </Box>
      <Text fontWeight="semibold">{text}</Text>
    </HStack>
  );
}

function LinkColumn({ title, links }: { title: string; links: string[] }) {
  const muted = useColorModeValue("gray.600", "gray.400");
  return (
    <Stack spacing={2} fontFamily={'monospace'}>
      <Text fontWeight="bold" fontSize="sm" mb={1}>
        {title}
      </Text>
      {links.map((l) => (
        <Link key={l} href="#" color={muted} _hover={{ color: "gray.700" }}>
          {l}
        </Link>
      ))}
    </Stack>
  );
}
