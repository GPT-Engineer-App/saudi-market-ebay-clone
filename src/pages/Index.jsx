import React, { useState } from "react";
import { Box, Button, Flex, Heading, Input, Stack, Text, useColorMode, VStack, Image, IconButton, useColorModeValue, extendTheme, ChakraProvider, CSSReset } from "@chakra-ui/react";
import { FaSearch, FaMoon, FaSun, FaPlus } from "react-icons/fa";

const theme = extendTheme({
  direction: "rtl", // Right to left for Arabic by default
});

const Index = () => {
  const [language, setLanguage] = useState("ar"); // 'ar' for Arabic, 'en' for English
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const color = useColorModeValue("black", "white");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"));
    document.documentElement.dir = document.documentElement.dir === "rtl" ? "ltr" : "rtl";
  };

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box bg={bgColor} color={color} minH="100vh" p={5}>
        <Flex justifyContent="space-between" alignItems="center" mb={5}>
          <Heading size="lg">{language === "ar" ? "سوق الإنترنت" : "Online Market"}</Heading>
          <Stack direction="row" spacing={4}>
            <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} isRound onClick={toggleColorMode} />
            <Button onClick={toggleLanguage}>{language === "ar" ? "English" : "العربية"}</Button>
          </Stack>
        </Flex>
        <VStack spacing={4}>
          <Flex>
            <Input placeholder={language === "ar" ? "بحث..." : "Search..."} />
            <IconButton ml={2} icon={<FaSearch />} aria-label={language === "ar" ? "بحث" : "Search"} />
          </Flex>
          <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={() => navigate("/products")}>
            {language === "ar" ? "إضافة منتج" : "Add Product"}
          </Button>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Product Name</Heading>
            <Text mt={4}>Product Description</Text>
          </Box>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
