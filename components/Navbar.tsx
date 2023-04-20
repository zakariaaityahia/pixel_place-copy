import { Avatar, Box, Heading, Link, Text, Flex } from "@chakra-ui/react"
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import NextLink from 'next/link';
import address from "../pages/profile/[address]"

const Navbar = () => {
  const address = useAddress();
  return (
    <Box maxW={"1200px"} m={"auto"} py={"10px"} px={"40px"}>
    <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Link as={NextLink} href="">
          <Heading>PixelPlace</Heading>
        </Link>
       <Flex direction={"row"}>
          <Link as={NextLink} href="/buy" mx={2.5}>
            <Text>Buy</Text>
          </Link>
          <Link as={NextLink} href="/sell" mx={2.5}>
            <Text>Sell</Text>
          </Link>
        </Flex>
        <Link as={NextLink} href="/buy" mx={2.5}>
          <ConnectWallet />
          {address && (
            <Link as={NextLink} href={`/profile/${address}`}>
              <Avatar src="https://bit.ly/broken-link" ml={"15px"}></Avatar>
            </Link>
          ) 
          }
        </Link>
      </Flex>      
   </Box> 
  )
}

export default Navbar