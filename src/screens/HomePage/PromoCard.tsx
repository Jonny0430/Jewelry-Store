"use client"

import {
  Box,
  Heading,
  Badge,
  Image,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";

// Types
export type PromoItem = {
  id: string;
  tag: string; // e.g. "НОВИНКА", "БЕСПЛАТНАЯ ДОСТАВКА"
  tagColor?: string; // Chakra color token (e.g. "pink.500")
  image: string; // Image URL
  description: string; // 1-2 line caption
  captionBg?: string; // Background color for caption strip
};

// Demo data — replace with your own images
const demoItems: PromoItem[] = [
  {
    id: "1",
    tag: "БЕСПЛАТНАЯ ДОСТАВКА",
    tagColor: "cyan.500",
    image: "/logo/l1.png",
    description: "По СПБ в районе КАД — от 3000₽\nПо МСК — от 5000₽",
    captionBg: "blue.300",
  },
  {
    id: "2",
    tag: "НОВИНКА",
    tagColor: "pink.500",
    image: "/logo/l2.png",
    description: "Шоколадное пирожное картошка на основе бисквита!",
    captionBg: "pink.500",
  },
  {
    id: "3",
    tag: "НОВИНКА",
    tagColor: "pink.500",
    image: "/logo/l3.png",
    description: "Аппетитные конфеты на основе миндального печенья и крема",
    captionBg: "pink.500",
  },
  {
    id: "4",
    tag: "СЛАДКАЯ НОВИНКА",
    tagColor: "orange.400",
    image: "/logo/l4.png",
    description: "Карамель на палочке из натуральных ингредиентов",
    captionBg: "pink.500",
  },
    {
    id: "5",
    tag: "БЕСПЛАТНАЯ ДОСТАВКА",
    tagColor: "cyan.500",
    image: "/logo/l2.png",
    description: "По СПБ в районе КАД — от 3000₽\nПо МСК — от 5000₽",
    captionBg: "blue.300",
  },
    {
    id: "6",
    tag: "БЕСПЛАТНАЯ ДОСТАВКА",
    tagColor: "cyan.500",
    image: "/logo/l1.png",
    description: "По СПБ в районе КАД — от 3000₽\nПо МСК — от 5000₽",
    captionBg: "blue.300",
  },
];

// Card component
function PromoCard({ item }: { item: PromoItem }) {
  const cardBg = useColorModeValue("white", "gray.800");
  
  return (
    <Box
      rounded="2xl"
      overflow="hidden"
      bg={cardBg}
      boxShadow="md"
      _hover={{ boxShadow: "xl", transform: "translateY(-2px)" }}
      transition="all 0.2s ease"
      cursor="pointer"
    >
      <Box position="relative">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.description}
          w="full"
          h={{ base: 48, md: 56 }}
          objectFit="cover"
          loading="lazy"
        />
        <Badge
          position="absolute"
          top={3}
          left={3}
          colorScheme="pink"
          bg={item.tagColor || "pink.500"}
          color="white"
          rounded="md"
          px={2.5}
          py={1}
          textTransform="uppercase"
          fontWeight="bold"
          letterSpacing="wide"
          fontSize="xs"
        >
          {item.tag}
        </Badge>
      </Box>

      <VStack align="stretch" spacing={0}>
        <Box bg={item.captionBg || "pink.500"} color="white" p={4}>
          <Text fontSize="sm" lineHeight="1.25" whiteSpace="pre-line" textAlign="center">
            {item.description}
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}

// Simple carousel without Swiper (using horizontal scroll)
export default function PromotionsCarousel({
  items = demoItems,
  title = "Акции",
}: {
  items?: PromoItem[];
  title?: string;
}) {
  return (
    <Box py={{ base: 6, md: 10 }}>
      <Container maxW="6xl">
        <HStack justify="center" mb={{ base: 4, md: 6 }}>
          <Heading size={{ base: "md", md: "lg" }} color="gray.800">
            {title}
          </Heading>
        </HStack>

        {/* Horizontal scrollable container */}
        <Box
          overflowX="auto"
          pb={4}
          css={{
            '&::-webkit-scrollbar': {
              height: '6px',
            },
            '&::-webkit-scrollbar-track': {
              background: '#f1f1f1',
              borderRadius: '10px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#c1c1c1',
              borderRadius: '10px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: '#a8a8a8',
            },
          }}
        >
          <HStack spacing={4} align="stretch" minW="max-content">
            {items.map((item) => (
              <Box key={item.id} minW={{ base: "280px", md: "300px" }} maxW="300px">
                <PromoCard item={item} />
              </Box>
            ))}
          </HStack>
        </Box>

        <Text mt={4} textAlign="center" fontSize="xs" color="gray.500">
          Прокрутите горизонтально для просмотра всех акций
        </Text>
      </Container>
    </Box>
  );
}