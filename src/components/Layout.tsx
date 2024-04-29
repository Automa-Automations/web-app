import { Flex, Button } from "@chakra-ui/react"
import Navbar from "./Navbar"
import { useColorModeValue } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
// Get the current route the user is on, change everytime the user navigates to a differnt route 
import { useLocation } from "react-router-dom"

export default function Layout() {
  const location = useLocation()
  // variable to check if the user is on the "/" route
  
  const bg = useColorModeValue("bg.light", "bg.dark")

  return (
    <Flex
      background={{
        base: location.pathname == "/" ? "radialGradient.sm" : bg, 
        md: location.pathname == "/" ? "radialGradient.lg" : bg
      }}
      direction="column"
      w="full"
      minHeight="100vh"
    >
      <Navbar />
      <Outlet />
    </Flex>
  )
}



