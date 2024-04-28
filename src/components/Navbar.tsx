import {
  Flex,
  Box,
  Text,
  Button,
  Icon,
  Image,
} from "@chakra-ui/react"
import {
  SunIcon,
  MoonIcon,
} from "@chakra-ui/icons"

import {
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react"

import Logo from "../assets/logo.svg"

export default function Navbar() {

  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex
      align="center"
      justify="space-evenly"
      p="30px 21px"
    >
      <Button 
        onClick={toggleColorMode}
        display={"flex"}
        align="center"
        justify="center"
        borderRadius={"10px"}
        w="40px"
        h="40px"
      >
        {
          colorMode == "dark" ? (
            <MoonIcon />
          ) 
            : 
          (
            <SunIcon />
          )
        }
      </Button>
      <Image
        src={Logo}
        w="25px"
      />
      <Text
        fontWeight="bold"
      >
        Automa Automations
      </Text>
    </Flex>
  )
}
