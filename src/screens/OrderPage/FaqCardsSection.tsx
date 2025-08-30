"use client";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Card,
  CardBody,
  Text,
  useColorModeValue,
  Collapse,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiHelpCircle } from "react-icons/fi";

export type FaqItem = {
  id: string;
  title: string;
  body: string;
};

type Props = {
  items: FaqItem[];
  title?: string;
};

export default function FaqCardsSection({
  items,
  title = "Savollarga javoblar",
}: Props) {
  const sectionBg = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const subColor = useColorModeValue("gray.600", "gray.300");

  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <Box bg={sectionBg} py={{ base: 10, md: 14 }}>
      <Container maxW="7xl">
        <Heading
          as="h2"
          size="xl"
          textAlign="center"
          mb={{ base: 6, md: 12 }}
          fontWeight="extrabold"
          fontFamily={'monospace'}
        >
          {title}
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} fontFamily={'monospace'}>
          {items.map((it) => {
            const isOpen = openId === it.id;
            return (
              <motion.div
                key={it.id}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.25 }}
              >
                <Card
                  bg={cardBg}
                  rounded="2xl"
                  shadow={isOpen ? "xl" : "md"}
                  border="1px solid"
                  borderColor="transparent"
                  _hover={{
                    borderColor: "pink.400",
                    shadow: "xl",
                  }}
                  onClick={() => setOpenId(isOpen ? null : it.id)}
                  cursor="pointer"
                  transition="all 0.3s ease"
                  h="full"
                >
                  <CardBody>
                    <HStack spacing={3} align="start">
                      <Icon as={FiHelpCircle} boxSize={5} color="pink.400" />
                      <Box flex="1">
                        <Text fontWeight="bold" fontSize="md" mb={2}>
                          {it.title}
                        </Text>

                        <AnimatePresence initial={false}>
                          <Collapse in={isOpen} animateOpacity>
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Text color={subColor}>{it.body}</Text>
                            </motion.div>
                          </Collapse>
                        </AnimatePresence>

                        {!isOpen && (
                          <Text color={subColor} noOfLines={2}>
                            {it.body}
                          </Text>
                        )}
                      </Box>
                    </HStack>
                  </CardBody>
                </Card>
              </motion.div>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
