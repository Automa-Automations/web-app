import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import { Box, Flex } from "@chakra-ui/react";

export default function Layout() {
  return (
    <Flex
      flexDirection="column"
      width="100%"
      alignItems="center"
      justifyContent="center"
    >
      <Box width="100%">
        <Navbar />
      </Box>
      <Outlet />
    </Flex>
  )
}
