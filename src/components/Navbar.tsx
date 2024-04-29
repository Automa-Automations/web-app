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
      p={{base: "0px 15px", md: "0px 30px"}}
      height="10vh"
    >
      <Image
        src={Logo}
        w="25px"
      />
      <Text
        textStyle="headlinesm"
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
