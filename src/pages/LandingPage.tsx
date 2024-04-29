import { Flex, Text, Box, Button, Link } from "@chakra-ui/react";
import { gradients } from "../theme/styles/colors";

export default function LandingPage() {
  return (
    <Flex h="90vh" direction="column" align="center" justify="center">
      <Flex direction="column" align="center" w={{base: "90%", md: "80%"}} gap="23px" pb="96px" >
        <Flex direction="column" align="center" w="full">
          <Box bgGradient={gradients.linearGradientText} backgroundClip="text" textAlign="center">
            <Text textStyle={{base: "headlinelg", lg: "headline3xl"}} color="transparent">
              Use AI to Automate Social Media
            </Text>
          </Box>
          <Text w={{base: "95%", md: "80%"}} textAlign="center" textStyle={{base: "bodysm", lg: "bodyxl"}}>Automa Automations will save you time, by automating the content creation and content scheduling process.</Text>
        </Flex>
        <Button size="lg">Get Started</Button>
      </Flex>
    </Flex>
  )
}


