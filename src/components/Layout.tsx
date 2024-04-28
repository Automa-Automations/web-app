import { Flex, Button } from "@chakra-ui/react"
import Navbar from "./Navbar"
import { useColorModeValue, useColorMode } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
// Here's the signature
//

export default function Layout() {

  const bg = useColorModeValue("bg.light", "bg.dark")
  return (
    <Flex
      backgroundColor={bg}
      direction="column"
      align="center"
      justify="center"
    >
      <Navbar />
      <Outlet />
    </Flex>
  )
}



