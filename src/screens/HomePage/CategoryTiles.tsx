"use client"

import { Box, Container, SimpleGrid, VStack, Text, Flex } from "@chakra-ui/react"

// Service icons (using simple shapes since we can't see exact icons)
const ServiceIcon = ({ type }: { type: string }) => {
  const iconMap: { [key: string]: string } = {
    ready: "📦",
    custom: "🧁",
    print: "🎨",
    wedding: "🎂",
    corporate: "🎁",
    wholesale: "🏢",
  }

  return <Text fontSize="2xl">{iconMap[type] || "📦"}</Text>
}

const services = [
  {
    id: "ready",
    title: "Готовые наборы",
    subtitle: "Готовые наборы со скидкой",
    description: "Вы можете подобрать набор на подходящий случай",
    bgColor: "#F5E6D3",
    icon: "ready",
  },
  {
    id: "custom",
    title: "Собрать свой набор",
    subtitle: "Выбрать количество макарун, и выбрать вкусы",
    description: "",
    bgColor: "rgba(255, 194, 204, 1)",
    icon: "custom",
  },
  {
    id: "print",
    title: "Набор с индивидуальной печатью",
    subtitle: "Собрать набор макарон с уникальным дизайном",
    description: "",
    bgColor: "#D1E7DD",
    icon: "print",
  },
  {
    id: "wedding",
    title: "Свадебные предложения",
    subtitle: "Нежные пирожные макаронс с разными вкусами для",
    description: "украшения вашего свадебного торжества",
    bgColor: "#F8D7DA",
    icon: "wedding",
  },
  {
    id: "corporate",
    title: "Корпоративные подарки",
    subtitle: "От 85 руб за шт. С уникальным дизайном.",
    description: "Приятный комплимент для коллег и партнеров",
    bgColor: "#B3E5FC",
    icon: "corporate",
  },
  {
    id: "wholesale",
    title: "Оптовые поставки",
    subtitle: "Предложение для кофеен, кафе, отелей и т.д.",
    description: "Посмотрите условия сотрудничества и отзывы.",
    bgColor: "#E1BEE7",
    icon: "wholesale",
  },
]

const ServicesGrid = () => {
  const handleServiceClick = (serviceId: string) => {
    console.log(`Clicked service: ${serviceId}`)
    // Navigate to service page or show modal
  }

  return (
    <Container maxW="1200px" py={8}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {services.map((service) => (
          <Box
            key={service.id}
            bg={service.bgColor}
            borderRadius="2xl"
            p={8}
            h="280px"
            cursor="pointer"
            position="relative"
            overflow="hidden"
            onClick={() => handleServiceClick(service.id)}
            _hover={{
              transform: "translateY(-4px)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            }}
            transition="all 0.3s ease"
          >
            {/* Background decorative elements */}
            <Box
              position="absolute"
              top="-20px"
              right="-20px"
              w="100px"
              h="100px"
              borderRadius="full"
              bg="whiteAlpha.100"
              opacity={0.3}
            />
            <Box
              position="absolute"
              bottom="-30px"
              left="-30px"
              w="80px"
              h="80px"
              borderRadius="full"
              bg="whiteAlpha.100"
              opacity={0.2}
            />

            <VStack spacing={6} align="center" justify="center" h="full">
              {/* Icon Circle */}
              <Flex
                w="80px"
                h="80px"
                borderRadius="full"
                bg="white"
                align="center"
                justify="center"
                boxShadow="0 8px 32px rgba(0,0,0,0.1)"
              >
                <ServiceIcon type={service.icon} />
              </Flex>

              {/* Content */}
              <VStack spacing={3} textAlign="center">
                <Text fontSize="xl" fontWeight="bold" color="gray.800" lineHeight="1.2">
                  {service.title}
                </Text>
                <VStack spacing={1}>
                  <Text fontSize="sm" color="gray.700" lineHeight="1.4" maxW="280px">
                    {service.subtitle}
                  </Text>
                  {service.description && (
                    <Text fontSize="sm" color="gray.700" lineHeight="1.4" maxW="280px">
                      {service.description}
                    </Text>
                  )}
                </VStack>
              </VStack>

              {/* Arrow */}
              <Text fontSize="lg" color="gray.800" mt={2}>
                →
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default ServicesGrid