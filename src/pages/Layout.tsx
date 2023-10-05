import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box } from "@chakra-ui/react";

export default function Layout() {
  return (
    <Box paddingX={5}>
      <NavBar />
      <Outlet />
    </Box>
  );
}
