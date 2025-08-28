"use client"

import {
  Box,
  Container,
  Heading,
  Image,
  Text,
  VStack,
  Button,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react"
import { Link } from "@chakra-ui/react"

type NewsItem = {
  id: string
  date: string
  title: string
  excerpt: string
  image: string
}

const NEWS: NewsItem[] = [
  {
    id: "1",
    date: "25.02.2023",
    title: "Bahorning bosh bayrami yaqin!",
    excerpt:
      "Qizlar mazali, chiroyli va samimiy narsalarni yaxshi ko‘radi. Turli xil ta’mlardan iborat katta to‘plamlarni ko‘ring.",
    image: "/homeN/j1.png",
  },
  {
    id: "2",
    date: "17.02.2023",
    title: "23-fevral tanlovi!",
    excerpt:
      "Vatan himoyachilari kuni juda yaqin! Shirinlik ixlosmandlarini ishtahani ochuvchi to‘plamlar bilan xursand qiling.",
    image: "/homeN/j2.png",
  },
  {
    id: "3",
    date: "11.02.2023",
    title: "Avliyo Valentin kuniga ekspress-tanlov",
    excerpt:
      "Sovg‘a atigi 2 kundan keyin! Barcha sevishganlar kuni yaqinlashmoqda. O‘z his-tuyg‘ularingizni shirinlikli valentin orqali bildiring.",
    image: "/homeN/j3.png",
  },
  {
    id: "4",
    date: "05.02.2023",
    title: "Yangi ta’mlar assortimentda!",
    excerpt:
      "Yangi mahsulotlar: tiramisu, limonli chizkeyk va sho‘r karamelli makaronlarni qarshi oling.",
    image: "/homeN/p3.png",
  },
  {
    id: "5",
    date: "28.01.2023",
    title: "Makaron tayyorlash bo‘yicha master-klass",
    excerpt:
      "Barchani qiziqarli master-klassga taklif qilamiz! Fransuz makaronlarini tayyorlashni o‘rganing.",
    image: "/homeN/p2.png",
  },
  {
    id: "6",
    date: "20.01.2023",
    title: "Qishki aksiyalar - 30% gacha chegirmalar!",
    excerpt:
      "Shirinliklar bilan isinib oling! Issiq ichimliklar bilan qishki makaron to‘plamlariga maxsus narxlar.",
    image: "/homeN/p5.png",
  },
]


function NewsCard({ item }: { item: NewsItem }) {
  const cardBg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.600")

  return (
    <Box
      flex="0 0 auto"
      w={{ base: "280px", sm: "320px", md: "300px" }}
      bg={cardBg}
      borderWidth="1px"
      borderColor={borderColor}
      rounded="xl"
      overflow="hidden"
      boxShadow="sm"
      scrollSnapAlign="start"
      _hover={{ 
        boxShadow: "lg", 
        transform: "translateY(-4px)",
        borderColor: "pink.300"
      }}
      transition="all 0.3s ease"
      cursor="pointer"
    >
      <Box overflow="hidden">
        <Image 
          src={item.image || "/placeholder.svg"} 
          alt={item.title} 
          w="full" 
          h="200px" 
          objectFit="cover"
          _hover={{ transform: "scale(1.05)" }}
          transition="transform 0.3s ease"
        />
      </Box>
      <Box p={4} fontFamily={'monospace'}>
        <Text fontSize="xs" color="pink.500" mb={1} fontWeight="medium">
          {item.date}
        </Text>
        <Text fontWeight="semibold" mb={2} fontSize="md" lineHeight="1.3">
          {item.title}
        </Text>
        <Text fontSize="sm" color="gray.600" noOfLines={3} lineHeight="1.4">
          {item.excerpt}
        </Text>
      </Box>
    </Box>
  )
}

export default function NewsSection() {
  return (
    <Box py={{ base: 8, md: 12 }} bg="gray.50">
      <Container maxW="6xl">
        <VStack spacing={8}>
          <Heading 
            textAlign="center" 
            size={{ base: "md", md: "lg" }}
            color="gray.800"
            fontFamily={'monospace'}
          >
            Yangliklar
          </Heading>

          {/* Horizontal Scroll Container */}
          <HStack
            w="full"
            overflowX="auto"
            spacing={4}
            pb={4}
            css={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              "&::-webkit-scrollbar": {
                height: "6px",
              },
              "&::-webkit-scrollbar-track": {
                background: "#f1f1f1",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#d53f8c",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                background: "#b83280",
              },
            }}
          >
            {NEWS.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </HStack>

          {/* Show More Button */}
          <Button
            as={Link}
            href="https://www.laduree.fr" // mashhur shirinlik brendi sayti
            isExternal
            variant="outline"
            colorScheme="pink"
            size="lg"
            px={8}
            _hover={{
              bg: "pink.50",
              borderColor: "pink.400",
              transform: "translateY(-2px)",
            }}
            transition="all 0.2s ease"
            fontFamily={'monospace'}
          >
            Barcha Yangliklar
          </Button>
        </VStack>
      </Container>
    </Box>
  )
}