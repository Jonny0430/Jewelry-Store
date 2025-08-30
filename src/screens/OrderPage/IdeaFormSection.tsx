"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Image,
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Checkbox,
  Link,
  useToast,
  useColorModeValue,
  Card,
  CardBody,
  Progress,
  HStack,
} from "@chakra-ui/react";

export default function IdeasLeadSection() {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  const totalSteps = 4;

  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
    agreed: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as any;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const nextStep = () => setStep((s) => Math.min(totalSteps, s + 1));
  const prevStep = () => setStep((s) => Math.max(1, s - 1));

  const onSubmit = async () => {
    if (!form.name.trim() || !form.phone.trim() || !form.agreed) {
      toast({
        title: "Iltimos, maydonlarni to‘ldiring.",
        description: "Ism, telefon va rozilik shart.",
        status: "warning",
      });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Ariza yuborildi!",
        description: "Tez orada siz bilan bog‘lanamiz.",
        status: "success",
      });
      setForm({ name: "", phone: "", message: "", agreed: false });
      setStep(1);
    }, 900);
  };

  const sectionBg = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const noteColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Box bg={sectionBg} py={{ base: 12, md: 20 }}>
      <Container maxW="7xl">
        <Card shadow="2xl" rounded="2xl" overflow="hidden">
          <CardBody>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0} alignItems="center">
              {/* Chap tomonda rasm */}
              <Box>
                <Image
                  src="order/l2.png"
                  alt="Invitation & macarons"
                  objectFit="cover"
                  w="100%"
                  h="100%"
                  minH={{ base: "220px", md: "100%" }}
                />
              </Box>

              {/* O‘ng tomonda stepper forma */}
              <Box p={{ base: 6, md: 10 }} bg={cardBg} fontFamily={'monospace'}>
                <VStack align="stretch" spacing={6}>
                  <Heading as="h2" size="lg" fontWeight="extrabold">
                    Biz yangi g‘oyalarga ochiqmiz
                  </Heading>
                  <Text color={noteColor}>
                    Har bir tadbir o‘ziga xos, va biz Sizning tadbiringiz uchun individual
                    yechimlarni muhokama qilishga tayyormiz.
                  </Text>
                  ``` ✅
                  {/* Progress bar */}
                  <Progress
                    value={(step / totalSteps) * 100}
                    colorScheme="pink"
                    rounded="full"
                  />

                  {/* Qadamlar */}
                  {step === 1 && (
                    <FormControl isRequired >
                      <FormLabel fontWeight="semibold" fontFamily={'monospace'}>Ismingiz</FormLabel>
                      <Input
                        name="name"
                        placeholder="Ismingizni kiriting"
                        value={form.name}
                        onChange={handleChange}
                        focusBorderColor="pink.400"
                        rounded="lg"
                      />
                    </FormControl>
                  )}

                  {step === 2 && (
                    <FormControl isRequired>
                      <FormLabel fontWeight="semibold">Telefon nomer</FormLabel>
                      <Input
                        name="phone"
                        placeholder="+82 ___ ___-__-__"
                        value={form.phone}
                        onChange={handleChange}
                        focusBorderColor="pink.400"
                        rounded="lg"
                      />
                    </FormControl>
                  )}

                  {step === 3 && (
                    <FormControl>
                      <FormLabel fontWeight="semibold">G‘oyangizni ta’riflang</FormLabel>
                      <Textarea
                        name="message"
                        placeholder="Xabar"
                        minH="120px"
                        value={form.message}
                        onChange={handleChange}
                        focusBorderColor="pink.400"
                        rounded="lg"
                      />
                    </FormControl>
                  )}

                  {step === 4 && (
                    <VStack align="stretch" spacing={4} fontFamily={'monospace'}>
                        <Checkbox
                          name="agreed"
                          isChecked={form.agreed}
                          onChange={handleChange as any}
                          colorScheme="pink"
                        >
                          Shartlarga roziman
                        </Checkbox>
                        <Text fontSize="sm" color={noteColor}>
                          Tugmani bosish orqali siz{" "}
                          <Link color="pink.500" href="#" textDecoration="underline">
                            Maxfiylik siyosati
                          </Link>{" "}
                          va{" "}
                          <Link color="pink.500" href="#" textDecoration="underline">
                            Foydalanuvchi kelishuvi
                          </Link>
                          ga rozilik bildirasiz.
                        </Text>
                      </VStack>
                  )}

                  {/* Tugmalar */}
                  <HStack justify="space-between">
                    {step > 1 && (
                      <Button
                        variant="outline"
                        onClick={prevStep}
                        rounded="full"
                      >
                        Orqaga
                      </Button>
                    )}
                    {step < totalSteps && (
                      <Button
                        colorScheme="pink"
                        onClick={nextStep}
                        rounded="full"
                      >
                        Keyingisi
                      </Button>
                    )}
                    {step === totalSteps && (
                      <Button
                        bgGradient="linear(to-r, pink.400, pink.500)"
                        color="white"
                        _hover={{
                          bgGradient: "linear(to-r, pink.500, pink.600)",
                        }}
                        onClick={onSubmit}
                        isLoading={loading}
                        rounded="full"
                      >
                        Ariza yuborish
                      </Button>
                    )}
                  </HStack>
                </VStack>
              </Box>
            </SimpleGrid>
          </CardBody>
        </Card>
      </Container>
    </Box>
  );
}
