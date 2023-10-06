import { Box, HStack } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <HStack paddingY="10px">
      <Link to="/game-spot/">
        <Box fontSize="2xl">🎮</Box>
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}
