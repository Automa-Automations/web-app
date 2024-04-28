import { Flex } from "@chakra-ui/react"
import Navbar from "./Navbar"

export default function Layout() {
  return (
    <Flex
      backgroundColor={"bg.dark"}
    >
      <Navbar />
    </Flex>
  )
}



