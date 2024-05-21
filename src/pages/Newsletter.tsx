import { Button, Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Newsletter() {
  const newsletterUrl = "http://eepurl.com/iQrOkI"
  const navigate = useNavigate()

  useEffect(() => {
    // open up new tab on this link: http://eepurl.com/iQrOkI
    window.open(newsletterUrl, "_blank")
  }, [])
  return (
    <Flex 
      width="100%"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="10px"
    >
      <Text 
        fontSize={{base: "xl", md: "3xl"}}
        fontWeight="bold"
        textAlign="center"
      >
        Redirecting to newsletter... 
      </Text>
      <Flex
        gap="10px"
        alignItems="center"
      >
        <Button onClick={() => navigate(-1)}>Back</Button>
        <Button colorScheme="blue" onClick={() => window.open(newsletterUrl, "_blank")}>Join our newsletter</Button>
      </Flex>
    </Flex>
  )
}
