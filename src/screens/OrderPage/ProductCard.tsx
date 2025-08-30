// components/ProductCard.tsx (o'zgartirilgan)
"use client";

import Link from "next/link";
import { Box, Image, Text, VStack, HStack, Button, useColorModeValue } from "@chakra-ui/react";
import type { Product } from "../../enum/type/product";

function formatPrice(price: number): string {
  return `${price.toLocaleString()} руб`;
}

export default function ProductCard({ product }: { product: Product }) {
  const cardBg = useColorModeValue("white", "gray.800");

  return (
    <Box
      as={Link}
      href={`/products/${encodeURIComponent(product.id)}`} // MUHIM: id yuborilyapti
      bg={cardBg}
      borderRadius="2xl"
      overflow="hidden"
      shadow="sm"
      _hover={{ transform: "translateY(-6px) scale(1.02)", shadow: "2xl", textDecoration: "none" }}
      transition="all 0.3s ease"
      cursor="pointer"
    >
      <Box h="220px" overflow="hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          w="full"
          h="full"
          objectFit="cover"
          _hover={{ transform: "scale(1.08)" }}
          transition="transform 0.4s ease"
        />
      </Box>

      <VStack p={5} spacing={3} align="stretch">
        <Text fontWeight="semibold" fontSize="lg">{product.title}</Text>
        <Text fontSize="sm" color="gray.600" noOfLines={2}>{product.description}</Text>
        <HStack justify="space-between" pt={2} borderTop="1px solid" borderColor="gray.100">
          <Text fontWeight="bold" color="pink.500" fontSize="lg">
            {formatPrice(product.price)}
          </Text>
          <Button size="sm" colorScheme="pink" rounded="full"
            onClick={(e) => { e.preventDefault(); /* kelajakda savatga qo'shish */ }}>
            Savatga
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}
