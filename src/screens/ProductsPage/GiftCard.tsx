"use client";
import useEmblaCarousel from "embla-carousel-react";
import {
  Box,
  Card,
  CardBody,
  Image,
  Text,
  Heading,
  VStack,
  HStack,
  Button,
  Container,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useCallback, useEffect, useState } from "react";

type GiftItem = {
  id: string;
  title: string;
  desc: string;
  priceFrom: number;
  image: string;
};

const items: GiftItem[] = [
  {
    id: "g1",
    title: "3 ta logotipli makaron",
    desc: "Plenkali qadoqda — eng byudjet varianti",
    priceFrom: 150,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JwuOKmYjZp-FoXoko4YXlvifAyDUNtVF9g&s",
  },
  {
    id: "g2",
    title: "9 ta logotipli makaron",
    desc: "Kompaniyangiz logotipi, tilaklar va boshqalar bilan",
    priceFrom: 500,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSky0i78mlEc6n4h1OUY799OGfzAtO_ipebuw&s",
  },
  {
    id: "g3",
    title: "Dumaloq to‘plam, 40 dona",
    desc: "Eng yaqin va qadrli mijozlar uchun",
    priceFrom: 3600,
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "g4",
    title: "To‘plam 70 dona",
    desc: "Katta kompaniya uchun hashamatli sovg‘a",
    priceFrom: 5600,
    image:
      "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "g5",
    title: "To‘plam 70 dona",
    desc: "Katta kompaniya uchun hashamatli sovg‘a",
    priceFrom: 5600,
    image:
      "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "g6",
    title: "To‘plam 70 dona",
    desc: "Katta kompaniya uchun hashamatli sovg‘a",
    priceFrom: 5600,
    image:
      "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "g7",
    title: "To‘plam 70 dona",
    desc: "Katta kompaniya uchun hashamatli sovg‘a",
    priceFrom: 5600,
    image:
      "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "g8",
    title: "To‘plam 70 dona",
    desc: "Katta kompaniya uchun hashamatli sovg‘a",
    priceFrom: 5600,
    image:
      "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?q=80&w=900&auto=format&fit=crop",
  },
];

function GiftCard({ item }: { item: GiftItem }) {
  const cardBg = useColorModeValue("white", "gray.800");
  const sub = useColorModeValue("gray.600", "gray.300");
  const border = useColorModeValue("gray.200", "gray.700");

  return (
    <Card
      bg={cardBg}
      variant="outline"
      borderColor={border}
      rounded="xl"
      overflow="hidden"
      h="100%"
      shadow="sm"
      _hover={{ shadow: "xl", transform: "translateY(-4px)" }}
      transition="all .25s ease"
    >
      <Image src={item.image} alt={item.title} h="180px" w="100%" objectFit="cover" />
      <CardBody>
        <VStack align="start" spacing={2}>
          <Heading as="h3" size="sm">
            {item.title}
          </Heading>
          <Text fontSize="sm" color={sub} noOfLines={2}>
            {item.desc}
          </Text>
          <Box pt={3} w="100%" borderTop="1px solid" borderColor={border}>
            <Text fontWeight="semibold" color="pink.500">
               {item.priceFrom.toLocaleString()} so‘m
            </Text>
          </Box>
        </VStack>
      </CardBody>
    </Card>
  );
}

export default function CorporateGiftsCarouselEmbla() {
  const dot = useColorModeValue("#ec4899", "#f472b6");
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSelect = useCallback((api: any) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", () => onSelect(emblaApi));
    onSelect(emblaApi);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi && emblaApi.scrollTo(i), [emblaApi]);

  return (
    <Box bg={useColorModeValue("gray.50", "gray.900")} py={{ base: 10, md: 14 }}>
      <Container maxW="7xl">
        <Heading as="h2" size="lg" textAlign="center" mb={{ base: 6, md: 8 }} fontFamily={'monospace'}>
          Ba’zi sovg‘a variantlari
        </Heading>

        {/* Viewport */}
        <Box position="relative">
          {/* Prev/Next (desktoptа ko‘rinadi) */}
          <HStack
            justify="space-between"
            position="absolute"
            inset={0}
            pointerEvents="none"
            px={2}
            align="center"
            display={{ base: "none", md: "flex" }}
          >
            <IconButton
              aria-label="Prev"
              icon={<ChevronLeftIcon />}
              onClick={scrollPrev}
              variant="outline"
              rounded="full"
              pointerEvents="auto"
              bg="white"
            />
            <IconButton
              aria-label="Next"
              icon={<ChevronRightIcon />}
              onClick={scrollNext}
              variant="outline"
              rounded="full"
              pointerEvents="auto"
              bg="white"
            />
          </HStack>

          <Box ref={emblaRef} overflow="hidden">
            {/* Container */}
            <HStack
              spacing={4}
              align="stretch"
              // Embla "container": display flex bo‘lishi kerak
              sx={{ "& > *": { flex: "0 0 auto" } }}
              fontFamily={'monospace'}
            >
              {items.map((it) => (
                // Slide
                <Box
                  key={it.id}
                  // Responsiv kengliklar: 1/1, 1/2, 1/3, 1/4
                  w={{ base: "100%", sm: "50%", lg: "33.3333%", xl: "25%" }}
                  px={1}
                >
                  <GiftCard item={it} />
                </Box>
              ))}
            </HStack>
          </Box>
        </Box>

        {/* Pagination dots */}
        <HStack justify="center" mt={6} spacing={2}>
          {scrollSnaps.map((_, i) => (
            <Box
              key={i}
              as="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => scrollTo(i)}
              w={i === selectedIndex ? "18px" : "8px"}
              h="8px"
              rounded="full"
              transition="all .2s"
              bg={dot}
              opacity={i === selectedIndex ? 1 : 0.25}
            />
          ))}
        </HStack>

        {/* CTA */}
        <VStack mt={8}>
          <Button
            size="lg"
            bgGradient="linear(to-r, pink.400, pink.500)"
            color="white"
            rounded="full"
            px={8}
            _hover={{
              bgGradient: "linear(to-r, pink.500, pink.600)",
              transform: "translateY(-2px)",
            }}
          >
            Tijorat taklifini olish
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}
