"use client"

import React, { useState } from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  VStack,
  HStack,
  Container,
  SimpleGrid,
  Button,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  IconButton,
  useToast,
  Badge,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

// Product type
export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  tag?: string;
  isNew?: boolean;
  discount?: number;
};

// Demo data with placeholder images
const demoProducts: Product[] = [
  {
    id: "p1",
    title: "Yurak",
    description: "Yurak shaklidagi qutida 24 dona. 6 xil ta'mdan assorti",
    price: 2800,
    image: "/homeN/p1.png",
    tag: "Mashhur",
    isNew: true,
  },
  {
    id: "p2",
    title: "Go‘zallik dunyoni qutqaradi",
    description: "Ruh uchun to‘plam. Seviklilar, buvilar, onalar, dugonalar yoki, masalan",
    price: 750,
    image: "/homeN/p2.png",
  },
  {
    id: "p3",
    title: "Dumaloq to‘plam",
    description: "Shaxsiy yozuvli dumaloq qutida 50 ta makaron",
    price: 3900,
    image: "/homeN/p3.png",
    discount: 15,
  },
  {
    id: "p4",
    title: "9 talik to‘plam",
    description: "9 ta shaxsiy qutidan iborat to‘plam. Ta’mlarni 16 xil turdan tanlash mumkin",
    price: 950,
    image: "/homeN/p4.png",
  },
  {
    id: "p5",
    title: "16 talik to‘plam",
    description: "16 donadan iborat to‘plam turli xil bo‘lib, ko‘k yoki masalan...",
    price: 1500,
    image: "/homeN/p5.png",
    tag: "Eng ko‘p sotilgan",
  },
  {
    id: "p6",
    title: "Yurak",
    description: "Yurak shaklidagi qutida 24 dona. 6 xil ta'mdan assorti",
    price: 2500,
    image: "/homeN/p1.png",
  },
];

// Format price in rubles
function formatPrice(price: number): string {
  return `${price.toLocaleString()} руб`;
}

// Product Card Component
function ProductCard({ 
  product, 
  onOpen,
  onAddToCart
}: { 
  product: Product; 
  onOpen: () => void;
  onAddToCart: (product: Product) => void;
}) {
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Kartani ochishni to'xtatish
    onAddToCart(product);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    // Agar tugma bosilgan bo'lsa, kartani ochmaslik
    const target = e.target as HTMLElement;
    if (target.closest('button')) {
      return;
    }
    onOpen();
  };

  return (
    <Box
      bg={cardBg}
      borderRadius="xl"
      overflow="hidden"
      border="1px"
      borderColor={borderColor}
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      }}
      transition="all 0.3s ease"
      cursor="pointer"
      onClick={handleCardClick}
      position="relative"
    >
      {/* Badges */}
      <Box position="absolute" top={3} left={3} zIndex={1}>
        <VStack spacing={1} align="start">
          {product.isNew && (
            <Badge colorScheme="green" fontSize="xs">
              Yangi
            </Badge>
          )}
          {product.tag && (
            <Badge colorScheme="orange" fontSize="xs">
              {product.tag}
            </Badge>
          )}
          {product.discount && (
            <Badge colorScheme="red" fontSize="xs">
              -{product.discount}%
            </Badge>
          )}
        </VStack>
      </Box>

      {/* Image */}
      <Box h="200px" overflow="hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          w="full"
          h="full"
          objectFit="cover"
          _hover={{ transform: "scale(1.05)" }}
          transition="transform 0.3s ease"
        />
      </Box>

      {/* Content */}
      <VStack p={4} spacing={3} align="stretch">
        {/* Title */}
        <Text fontWeight="semibold" fontSize="lg" lineHeight="1.3">
          {product.title}
        </Text>

        {/* Description */}
        <Text fontSize="sm" color="gray.600" lineHeight="1.4" noOfLines={2}>
          {product.description}
        </Text>

        {/* Price and Button */}
        <HStack justify="space-between" align="center">
          <Text fontWeight="bold" color="pink.500" fontSize="lg">
            {formatPrice(product.price)}
          </Text>
          <Button
            size="sm"
            colorScheme="pink"
            variant="solid"
            fontSize="xs"
            onClick={handleAddToCart}
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "md"
            }}
            transition="all 0.2s ease"
          >
            Savatga
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}

// Product Modal Component
function ProductModal({ 
  product, 
  isOpen, 
  onClose 
}: { 
  product: Product | null; 
  isOpen: boolean; 
  onClose: () => void;
}) {
  const [quantity, setQuantity] = useState(1);
  const toast = useToast();

  if (!product) return null;

  const handleAddToCart = () => {
    toast({
      title: "Добавлено в корзину",
      description: `${product.title} (${quantity} шт.)`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    onClose();
    setQuantity(1);
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
      <ModalContent borderRadius="2xl" overflow="hidden">
        <ModalHeader bg="gray.50" textAlign="center" py={6}>
          <Text fontSize="2xl" fontWeight="bold">
            {product.title}
          </Text>
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody py={6}>
          <VStack spacing={6}>
            {/* Product Image */}
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              borderRadius="xl"
              maxH="300px"
              objectFit="cover"
            />

            {/* Product Info */}
            <VStack spacing={4} textAlign="center">
              <Text fontSize="lg" color="gray.700">
                {product.description}
              </Text>

              <Text fontSize="2xl" fontWeight="bold" color="pink.500">
                {formatPrice(product.price)}
              </Text>

              {/* Quantity Selector */}
              <HStack spacing={4}>
                <Text fontWeight="medium">Miqdori:</Text>
                <HStack>
                  <IconButton
                    aria-label="Decrease quantity"
                    icon={<MinusIcon />}
                    size="sm"
                    onClick={decrementQuantity}
                    isDisabled={quantity <= 1}
                  />
                  <Box
                    px={4}
                    py={2}
                    borderWidth="1px"
                    borderRadius="md"
                    minW="60px"
                    textAlign="center"
                    fontWeight="bold"
                  >
                    {quantity}
                  </Box>
                  <IconButton
                    aria-label="Increase quantity"
                    icon={<AddIcon />}
                    size="sm"
                    onClick={incrementQuantity}
                  />
                </HStack>
              </HStack>

              {/* Total Price */}
              <Text fontSize="lg" color="gray.600">
                Jami: <Text as="span" fontWeight="bold" color="pink.500">
                  {formatPrice(product.price * quantity)}
                </Text>
              </Text>
            </VStack>
          </VStack>
        </ModalBody>

        <ModalFooter gap={3}>
          <Button variant="ghost" onClick={onClose}>
            Bekor qilish
          </Button>
          <Button colorScheme="pink" onClick={handleAddToCart} px={8}>
            Savatga qo'shish
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

// Main Component
export default function PopularSets({
  products = demoProducts,
  title = "Ommabop to'plamlar",
}: {
  products?: Product[];
  title?: string;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const toast = useToast();

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    onOpen();
  };

  const handleAddToCart = (product: Product) => {
    toast({
      title: "Savatga qo'shildi",
      description: `${product.title} - ${formatPrice(product.price)}`,
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top-right",
    });
  };

  return (
    <Box py={{ base: 8, md: 12 }} bg="gray.50" fontFamily={'monospace'}>
      <Container maxW="1200px">
        {/* Section Title */}
        <VStack spacing={8}>
          <Heading 
            size={{ base: "lg", md: "xl" }} 
            textAlign="center"
            color="gray.800"
            fontFamily={'monospace'}
          >
            {title}
          </Heading>

          {/* Products Grid */}
          <SimpleGrid 
            columns={{ base: 1, sm: 2, lg: 3 }} 
            spacing={6} 
            w="full"
          >
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpen={() => handleProductClick(product)}
                onAddToCart={handleAddToCart}
              />
            ))}
          </SimpleGrid>

          {/* Show More Button */}
          <Button
            variant="outline"
            colorScheme="pink"
            size="lg"
            px={8}
          >
            Barcha bayram to'plamlari
          </Button>
        </VStack>
      </Container>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  );
}