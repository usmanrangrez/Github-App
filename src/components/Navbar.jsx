import React from "react";
import { Box, Flex, Image, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <Flex justify={"space-between"} align={"center"} py={2}>
        <Box position={"relative"} ratio={5 / 3} minHeight={20}>
          <Image
            borderRadius="full"
            boxSize="150px"
            objectFit="contain"
            src="../public/logo.png"
            fill
            alt="Github Logo"
            sx={{
              filter: "invert(1)",
            }}
          />
        </Box>
        <Box></Box>
      </Flex>
    </>
  );
};

export default Navbar;
