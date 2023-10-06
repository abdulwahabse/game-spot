import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

export default function GenericErrorPage() {
  return (
    <Box paddingX={5}>
      <NavBar />
      <Flex
        textAlign="center"
        justifyContent="center"
        flexDirection="column"
        minHeight="100vh"
      >
        <Heading>Oops</Heading>
        <Text>An unexpected error occurred.</Text>
      </Flex>
    </Box>
  );
}
