/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

/** Ixtiyoriy: tayyor rasm bersangiz shu props bilan kiritasiz */
type HeroProps = {
  /** Yurak shaklidagi makaronlar rasmi (PNG/JPG/SVG). Bo'lmasa, ichki SVG render bo'ladi. */
  imageSrc?: string;
  imageAlt?: string;
};

export default function NavbarHome({ imageSrc, imageAlt = "Набор макарон" }: HeroProps) {
  const eyebrow = useColorModeValue("gray.600", "gray.300");
  const bg = {
    background:
      // pastel dog'lar (o'ng tomonda rangli "aurora")
      `radial-gradient(60% 50% at 88% 45%, rgba(255, 210, 220, .45) 0%, transparent 60%),
       radial-gradient(55% 45% at 92% 75%, rgba(255, 242, 186, .45) 0%, transparent 60%),
       radial-gradient(60% 50% at 70% 80%, rgba(184, 228, 255, .55) 0%, transparent 60%),
       linear-gradient(180deg, #fff, #fff)`,
  };

  return (
    <Box style={bg} py={{ base: 8, md: 12 }}>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 6, md: 10 }} alignItems="center">
          {/* Left: heart tray / illustration */}
          <Box position="relative" display="grid" placeItems="center">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt}
                maxW={{ base: "92%", sm: "480px", lg: "560px" }}
                sx={{
                    mixBlendMode: "multiply",   // oq fonni ko‘rinmas qiladi
                    background: "transparent", // orqa fonni o‘chirish
                }}
              />
            ) : (
              <HeartArt />
            )}

            {/* Mayda “makaronlar” — dekor nuqtalar */}
            <Dot left="6%" top="8%" bg="#ffd1dc" />
            <Dot right="10%" top="6%" bg="#d7f5ea" />
            <Dot left="2%" bottom="14%" bg="#d9f1ff" />
            <Dot right="2%" bottom="10%" bg="#ffe6b3" />
          </Box>

          {/* Right: texts */}
          <Box textAlign={{ base: "center", lg: "left" }} fontFamily={"montserrat"}>
            <Text
              color={eyebrow}
              textTransform="uppercase"
              fontWeight="bold"
              letterSpacing=".08em"
              fontSize="sm"
              fontFamily={"montserrat"}
            >
              MACARONSHOP — 2013 yildan beri
            </Text>
            <Heading
              as="h1"
              size="2xl"
              mt={2}
              mb={3}
              lineHeight="1.1"
              letterSpacing="0.2px"
                fontFamily={"montserrat"}
            >
              Haqiqiy sevgi makaronlar bilan boshlanadi
            </Heading>
            <Text color={eyebrow} fontSize={{ base: "md", md: "lg" }} maxW="52ch" mx={{ base: "auto", lg: 0 }}>
              Pirojnoe makaronlar va boshqa shirinliklar tabiiy ingredientlardan,
              sevgi bilan tayyorlangan
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

/** Kichik dumaloq dekorlar */
function Dot(props: any) {
  return (
    <Box
      position="absolute"
      w={{ base: 6, md: 8 }}
      h={{ base: 6, md: 8 }}
      borderRadius="full"
      boxShadow="lg"
      animation="float 6s ease-in-out infinite"
      {...props}
    >
      <style>
        {`@keyframes float {0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)}}`}
      </style>
    </Box>
  );
}

/** Rasm bermasangiz — yurakcha ichida rangli makaronlar SVG’i */
function HeartArt() {
  const colors = [
    "#FDE68A", "#FCA5A5", "#A7F3D0", "#93C5FD",
    "#FBCFE8", "#FCD34D", "#C4B5FD", "#86EFAC"
  ];
  const circles = [];
  for (let y = 20; y < 240; y += 40) {
    for (let x = 20; x < 280; x += 40) {
      circles.push(
        <circle key={`${x}-${y}`} cx={x} cy={y} r={14} fill={colors[(x + y) % colors.length]} />
      );
    }
  }
  return (
    <Box as="svg"
      viewBox="0 0 300 260"
      role="img"
      aria-label="Макаруны в форме сердца"
      maxW={{ base: "92%", sm: "440px", lg: "520px" }}
      style={{ filter: "drop-shadow(0 20px 50px rgba(59,110,180,.18))", borderRadius: 24 }}
    >
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#992c54ff" />
          <stop offset="100%" stopColor="#eef7ff" />
        </linearGradient>
        <clipPath id="heartShape">
          <path d="M150 240s-120-72-120-150c0-33 27-60 60-60 24 0 45 14 60 34 15-20 36-34 60-34 33 0 60 27 60 60 0 78-120 150-120 150z"/>
        </clipPath>
      </defs>
      <rect x="0" y="0" width="300" height="260" rx="24" fill="url(#g1)" />
      <g clipPath="url(#heartShape)">{circles}</g>
      <rect x="0" y="0" width="300" height="260" rx="24" fill="none" stroke="#e8eef6" />
    </Box>
  );
}
