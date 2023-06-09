import type { NextPage } from "next";
import NextLink from 'next/link'
import { Container, Heading, Flex, Stack, Button } from "@chakra-ui/react"

const Home: NextPage = () => {
  return (
    <Container borderRadius={"30px"} color={"black"} border={"1px solid #000"}>
      <Flex h={"80vh"} alignItems={"center"} justifyContent={"center"}>
        <Stack spacing={4} align={"center"}>
          <Heading>Pixel Place</Heading>
          <Button as={NextLink} href='/buy'>Shop NFTs</Button>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Home;
