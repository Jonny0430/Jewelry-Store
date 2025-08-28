"use client"

import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Container,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Swiper CSS imports

// Types
export type HolidayItem = {
  id: string;
  icon: string;
  title: string;
  date: string;
  color: string;
};

const holidays: HolidayItem[] = [
  {
    id: "1",
    icon: "🎂",
    title: "Скоро\nДень рождения\nблизкого человека",
    date: "",
    color: "#FFB74D"
  },
  {
    id: "2",
    icon: "🎄",
    title: "1 января\nНовый Год",
    date: "",
    color: "#81C784"
  },
  {
    id: "3",
    icon: "💕",
    title: "14 февраля\nДень Святого\nВалентина",
    date: "14 февраля",
    color: "#F48FB1"
  },
  {
    id: "4",
    icon: "🎖️",
    title: "23 февраля\nДень Защитника\nОтечества",
    date: "23 февраля",
    color: "#FFB74D"
  },
  {
    id: "5",
    icon: "🌸",
    title: "8 марта\nМеждународный\nЖенский День",
    date: "8 марта",
    color: "#81C784"
  },
  {
    id: "6",
    icon: "🍲",
    title: "9 марта\nДень Сурка",
    date: "9 марта",
    color: "#F48FB1"
  },
];

function HolidayCard({ item }: { item: HolidayItem }) {
  return (
    <VStack 
      spacing={3} 
      textAlign="center" 
      minW={{ base: "100px", md: "120px" }}
      cursor="pointer"
      _hover={{
        transform: "translateY(-2px)",
      }}
      transition="all 0.3s ease"
    >
      {/* Icon Circle */}
      <Flex
        w={{ base: "50px", md: "60px" }}
        h={{ base: "50px", md: "60px" }}
        borderRadius="full"
        bg={item.color}
        align="center"
        justify="center"
        fontSize={{ base: "xl", md: "2xl" }}
        boxShadow="md"
      >
        {item.icon}
      </Flex>

      {/* Date */}
      {item.date && (
        <Text fontSize="xs" fontWeight="bold" color="gray.800">
          {item.date}
        </Text>
      )}

      {/* Title */}
      <Text 
        fontSize="xs" 
        color="gray.600" 
        lineHeight="1.2"
        whiteSpace="pre-line"
      >
        {item.title}
      </Text>
    </VStack>
  );
}

export default function HolidaysTimeline({
  items = holidays,
  title = "Ближайшие праздники",
}: {
  items?: HolidayItem[];
  title?: string;
}) {
  const titleColor = useColorModeValue("gray.800", "white");

  return (
    <Box py={{ base: 6, md: 10 }}>
      <Container maxW="6xl">
        <Heading 
          size={{ base: "md", md: "lg" }} 
          textAlign="center" 
          mb={{ base: 6, md: 8 }}
          color={titleColor}
        >
          {title}
        </Heading>

        {/* Desktop: Horizontal layout with connecting line */}
        <Box display={{ base: "none", md: "block" }} position="relative">
          {/* Connecting dotted line */}
          <Box
            position="absolute"
            top="30px"
            left="60px"
            right="60px"
            height="2px"
            bgGradient="repeating-linear-gradient(90deg, #E2E8F0, #E2E8F0 4px, transparent 4px, transparent 10px)"
            opacity={0.6}
            zIndex={0}
          />

          <HStack
            spacing={{ base: 4, md: 8 }}
            justify="space-between"
            align="flex-start"
            position="relative"
            zIndex={1}
          >
            {items.map((item) => (
              <HolidayCard key={item.id} item={item} />
            ))}
          </HStack>
        </Box>

        {/* Mobile: Swiper */}
        <Box display={{ base: "block", md: "none" }}>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ 
              clickable: true,
              bulletClass: 'swiper-pagination-bullet custom-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active'
            }}
            autoplay={{ 
              delay: 3000, 
              disableOnInteraction: false 
            }}
            spaceBetween={16}
            slidesPerView={2.2}
            breakpoints={{
              480: { slidesPerView: 2.5 },
              640: { slidesPerView: 3 },
            }}
            style={{ paddingBottom: '40px' }}
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <HolidayCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Swiper styles */}
          <style>{`
            .custom-bullet {
              width: 8px !important;
              height: 8px !important;
              border-radius: 50% !important;
              background: #CBD5E0 !important;
              opacity: 1 !important;
              margin: 0 4px !important;
            }
            .custom-bullet-active {
              background: #F56565 !important;
              transform: scale(1.2);
            }
            .swiper-pagination {
              bottom: 10px !important;
            }
          `}</style>
        </Box>
      </Container>
    </Box>
  );
}