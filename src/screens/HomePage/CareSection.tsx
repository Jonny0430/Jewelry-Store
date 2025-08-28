"use client"

import {
  Box,
  Container,
  Heading,
  Image,
  Text,
  VStack,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react"

type CareItem = {
  id: string
  title: string
  description: string
  image: string
  icon?: string
}

const CARE_ITEMS: CareItem[] = [
  {
    id: "1",
    title: "Eng yaxshi ingredientlar",
    description: "Biz faqat tanlab olingan shokolad, qaymoq va yuqori sifatli tabiiy mevalardan foydalanamiz",
    image: "/homeN/m1.png",
    icon: "🍫",
  },
  {
    id: "2",
    title: "Chiroyli qadoqlash",
    description: "Mahsulot ideal ko‘rinishda va taassurot qoldiradigan qilib qadoqlanadi",
    image: "/homeN/m2.png",
    icon: "🎁",
  },
  {
    id: "3",
    title: "Buyurtma kunida yetkazib berish",
    description: "Yetkazib berish imkon qadar qisqa muddatlarda, to‘g‘ridan-to‘g‘ri sizning tadbir yoki bayramingizga amalga oshiriladi",
    image: "/homeN/m3.png",
    icon: "🚚",
  },
  {
    id: "4",
    title: "Anonim yetkazib berish",
    description: "Maxsus syurprizlar uchun sovg‘ani yuboruvchini ko‘rsatmasdan jo‘natishimiz mumkin",
    image: "/homeN/m4.png",
    icon: "🤫",
  },
  {
    id: "5",
    title: "Individual dizayn",
    description: "Sizning tadbiringiz uchun maxsus noyob qadoqlash dizaynlarini yaratamiz",
    image: "/homeN/j1.png",
    icon: "🎨",
  },
  {
    id: "6",
    title: "Sifat kafolati",
    description: "Barcha mahsulotlarimizning yangiligi va sifatiga 100% kafolat beramiz",
    image: "/homeN/p1.png",
    icon: "✅",
  },
]


function CareCard({ item }: { item: CareItem }) {
  const bg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")
  const textColor = useColorModeValue("gray.600", "gray.300")

  return (
    <VStack
      align="start"
      spacing={4}
      p={6}
      bg={bg}
      rounded="xl"
      borderWidth="1px"
      borderColor={borderColor}
      boxShadow="sm"
      w={{ base: "280px", sm: "300px", md: "280px" }}
      h="320px"
      flex="0 0 auto"
      scrollSnapAlign="start"
      _hover={{ 
        boxShadow: "lg", 
        transform: "translateY(-6px)",
        borderColor: "pink.300"
      }}
      transition="all 0.3s ease"
      cursor="pointer"
      position="relative"
      overflow="hidden"
    >
      {/* Background decoration */}
      <Box
        position="absolute"
        top="-20px"
        right="-20px"
        w="60px"
        h="60px"
        borderRadius="full"
        bg="pink.50"
        opacity={0.3}
      />

      {/* Image with overlay icon */}
      <Box position="relative" w="full">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          rounded="lg"
          w="full"
          h="140px"
          objectFit="cover"
          _hover={{ transform: "scale(1.02)" }}
          transition="transform 0.3s ease"
          fontFamily={'monospace'}
        />
        {item.icon && (
          <Box
            position="absolute"
            top="3"
            right="3"
            bg="white"
            rounded="full"
            p={2}
            boxShadow="md"
          >
            <Text fontSize="lg">{item.icon}</Text>
          </Box>
        )}
      </Box>

      {/* Content */}
      <VStack align="start" spacing={2} flex={1}>
        <Text 
          fontWeight="bold" 
          fontSize="lg" 
          color="gray.800"
          lineHeight="1.2"
          fontFamily={'monospace'}
        >
          {item.title}
        </Text>
        <Text 
          fontSize="sm" 
          color={textColor}
          lineHeight="1.5"
          noOfLines={3}
        >
          {item.description}
        </Text>
      </VStack>

      {/* Bottom accent */}
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        h="3px"
        bg="pink.400"
        opacity={0}
        _groupHover={{ opacity: 1 }}
        transition="opacity 0.3s ease"
      />
    </VStack>
  )
}

export default function CareSection() {
  return (
    <Box py={{ base: 10, md: 16 }} bg="gray.50">
      <Container maxW="6xl">
        <VStack spacing={10}>
          {/* Section Header */}
          <VStack spacing={4} textAlign="center" fontFamily={'monospace'}>
            <Heading
              size={{ base: "lg", md: "xl" }}
              color="gray.800"
              fontWeight="bold"
            >
              Biz hamma narsani o‘ylab qo‘yganmiz
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.600"
              maxW="600px"
            >
              Har bir detal muhim - ingredientlarni tanlashdan tortib yetkazib berish vaqtigacha
            </Text>
          </VStack>

          {/* Horizontal Scroll Container */}
          <HStack
            w="full"
            overflowX="auto"
            spacing={6}
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
            {CARE_ITEMS.map((item) => (
              <CareCard key={item.id} item={item} />
            ))}
          </HStack>

          {/* Bottom decoration */}
          <Box
            w="100px"
            h="4px"
            bg="pink.400"
            rounded="full"
            mx="auto"
            mt={4}
          />
        </VStack>
      </Container>
    </Box>
  )
}