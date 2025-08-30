"use client";

import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  Button,
  ButtonGroup,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

export default function WeddingOfferHero() {
  const subColor = useColorModeValue("gray.700", "gray.200");

  // Tugmalar uchun border
  const borderCol = useColorModeValue(
    "rgba(240, 225, 170, 0.8)",
    "rgba(210, 200, 150, 0.6)"
  );

  return (
    <Box
      position="relative"
      overflow="hidden"
      py={{ base: 10, md: 16 }}
      bgGradient="linear(to-br, #fffaf5, #fff 40%, #fef6f6 80%)"
    >
      {/* Dekorativ yumshoq doiralar */}
      <Box
        position="absolute"
        top="-100px"
        left="-100px"
        w="300px"
        h="300px"
        bg="pink.100"
        rounded="full"
        filter="blur(120px)"
        opacity={0.5}
      />
      <Box
        position="absolute"
        bottom="-120px"
        right="-100px"
        w="350px"
        h="350px"
        bg="yellow.100"
        rounded="full"
        filter="blur(140px)"
        opacity={0.4}
      />

      <Container maxW="7xl" position="relative" zIndex={1}>
        {/* Breadcrumb */}
       <Breadcrumb fontSize="sm" color={subColor} mb={{ base: 6, md: 8 }}>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Bosh sahifa</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink color="blue.500" href="#">
            To‘y uchun taklif
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 8, md: 12 }}
          alignItems="center"
        >
          {/* Left: image with glow */}
          <Box position="relative">
            <Box
              position="absolute"
              inset={0}
              rounded="full"
              filter="blur(100px)"
              opacity={0.9}
              bgGradient="
                radial( at 40% 50%, rgba(255, 249, 200, 0.6) 0%, transparent 60% ),
                radial( at 70% 70%, rgba(255, 200, 210, 0.5) 0%, transparent 60% )
              "
            />
            <Box position="relative" zIndex={1}>
              <Image
                alt="Macaron wedding tower"
                src="order/l1.png"
                objectFit="contain"
                w="100%"
                h={{ base: "280px", md: "420px" }}
                rounded="xl"
                shadow="xl"
              />
            </Box>
          </Box>

          {/* Right: content */}
          <Box fontFamily={'monospace'}>
           <Heading
              as="h1"
              size={{ base: "lg", md: "2xl" }}
              lineHeight="1.15"
              mb={4}
              bgGradient="linear(to-r, pink.400, orange.300)"
              bgClip="text"
            >
              To‘y taklifi
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color={subColor} mb={6}>
              To‘yingizni bezash uchun turli xil ta’mga ega nozik makaron pirojnalari
            </Text>
            <ButtonGroup gap={4} mb={{ base: 6, md: 8 }}>
              <Button
                size="md"
                variant="outline"
                borderColor={borderCol}
                as="a"
                href="#"
                _hover={{ bg: "yellow.50" }}
                border={'1px'}
              >
                Taqdimot
              </Button>
              <Button
              size="md"
              variant="outline"
              borderColor={borderCol}
              as="a"
              href="#"
              _hover={{ bg: "pink.50" }}
              border={'1px'}
            >
              Narxlar ro‘yxati
            </Button>
            </ButtonGroup>

            <Heading as="h3" size="sm" mb={2}>
              Taklif matni (namuna)
            </Heading>
            <Text color={subColor}>
              Hurmatli fuqarolar, muxolifat vakillarining harakatlari, mavjud murakkab
              iqtisodiy vaziyatni yengib o‘tib, bizni noyob ma’lumotlar bilan shu darajaga
              bog‘laydiki, ular butunlay tanib bo‘lmas holga keladi va natijada ularning
              foydasizligi maqomi ortadi.
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
