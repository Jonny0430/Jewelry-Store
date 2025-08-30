"use client";

import {
  Box,
  Container,
  SimpleGrid,
  Image,
  Heading,
  Text,
  VStack,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useColorModeValue,
} from "@chakra-ui/react";

export default function CorporateGiftsSection() {
  const subColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box
      py={{ base: 10, md: 16 }}
      bgGradient="linear(to-r, pink.50, white, blue.50)"
      fontFamily={'monospace'}
    >
      <Container maxW="7xl">
  {/* Breadcrumb */}
  <Breadcrumb fontSize="sm" mb={{ base: 6, md: 8 }}>
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Bosh sahifa</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem isCurrentPage>
      <BreadcrumbLink color="blue.500">
        Korporativ sovg‘alar
      </BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} alignItems="center">
          {/* Image */}
          <Box textAlign="center">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQse8js9iSV7QpZTbmV8Jz-7bbEfbCqYJ0EwA&s"
              alt="Корпоративные макаронс"
              maxW="380px"
              mx="auto"
              rounded="full"
              shadow="2xl"
              h="300px"
            />
          </Box>

          {/* Content */}
          <VStack align="start" spacing={6} fontFamily={'monospace'}>
          <Heading as="h2" size={{ base: "lg", md: "2xl" }}>
            Korporativ sovg‘alar
          </Heading>
          <Text fontSize="lg" color={subColor}>
            Brendlangan makaron pirojnalari – mijozlaringiz ishtahasini ochadigan yoki
            jamoangizni quvontiradigan sovg‘a
          </Text>
          <Text fontSize="md" color={subColor}>
            Hodimlar motivatsiyasini ko‘tarmoqchimisiz? Mijozlaringizning sodiqligini
            oshirish yoki katta kelishuv oldidan ularni o‘zingizga jalb qilishni
            xohlaysizmi? Biz siz uchun 200 rubl/donadan boshlab pirojnalar to‘plamini
            tayyorlaymiz, individual dizayn yaratamiz va logotipingizni qo‘yamiz.
            Odatda 2–3 kunda tayyorlab beramiz.
          </Text>

          <Button
            bgGradient="linear(to-r, pink.400, pink.500)"
            color="white"
            size="lg"
            rounded="full"
            px={8}
            shadow="md"
            _hover={{
              bgGradient: "linear(to-r, pink.500, pink.600)",
              transform: "translateY(-2px)",
            }}
          >
            Barcha sovg‘alar katalogini yuklab olish
          </Button>
        </VStack>
      </SimpleGrid>
      </Container>
    </Box>
  );
}
