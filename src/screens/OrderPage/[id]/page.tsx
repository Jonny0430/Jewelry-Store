import { notFound } from "next/navigation";
import { Container, Box, Image, Heading, Text, HStack, Button } from "@chakra-ui/react";
import Link from "next/link";
import { demoProducts } from "../../../enum/type/product";

type Props = { params: { id: string } };

// eslint-disable-next-line react-refresh/only-export-components
export function generateStaticParams() {
  return demoProducts.map((p) => ({ id: p.id }));
}

export default function ProductDetailPage({ params }: Props) {
  const item = demoProducts.find((p) => p.id === decodeURIComponent(params.id));
  if (!item) return notFound();

  return (
    <Container maxW="6xl" py={10}>
      <HStack mb={6} spacing={3}>
        <Button as={Link} href="/products" variant="outline">← Orqaga</Button>
        <Text color="gray.500">/</Text>
        <Text color="gray.600">{item.title}</Text>
      </HStack>

      <Box display={{ md: "grid" }} gridTemplateColumns={{ md: "1fr 1fr" }} gap={10}>
        <Image src={item.image} alt={item.title} w="100%" h="360px" objectFit="cover" rounded="lg" borderWidth="1px" />
        <Box>
          <Heading size="lg" mb={3}>{item.title}</Heading>
          <Text color="gray.600" mb={5}>{item.description}</Text>
          <Heading size="md" mb={6}>{item.price.toLocaleString()} руб</Heading>

          <HStack spacing={4}>
            <Button colorScheme="pink">Savatga qo‘shish</Button>
            <Button variant="outline">Sotib olish</Button>
          </HStack>
        </Box>
      </Box>
    </Container>
  );
}
