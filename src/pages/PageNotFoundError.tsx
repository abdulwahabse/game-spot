import { Flex, Heading, Text } from "@chakra-ui/react";

export default function GenericErrorPage() {
  return (
    <Flex
      textAlign="center"
      justifyContent="center"
      flexDirection="column"
      minHeight="100vh"
    >
      <Heading>404</Heading>
      <Text>This page does not exist.</Text>
    </Flex>
  );
}
