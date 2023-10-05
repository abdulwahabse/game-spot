import { Box, HStack } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

export default function NavBar() {
  return (
    <HStack paddingY="10px">
      <Box fontSize="2xl">🎮</Box>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}
