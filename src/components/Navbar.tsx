import {
  Flex,
  Box,
  Text,
  Button,
  Icon,
  Image,
} from "@chakra-ui/react"

import IconMenu from "./IconMenu"
import navbarLinksArray from "../data/navbar.json";

import {
  HamburgerIcon,
} from "@chakra-ui/icons"

import Logo from "../assets/logo.svg"
export default function Navbar() {

  return (
    <Flex
      align="center"
      justify="space-between"
      p="0px 30px"
      height="10vh"
    >
      <Image
        src={Logo}
        w="25px"
      />
      <Text
        fontWeight="bold"
      >
        Automa Automations
      </Text>
      <IconMenu 
        icon={<HamburgerIcon />}
        items={navbarLinksArray}
      />
    </Flex>
  )
}
