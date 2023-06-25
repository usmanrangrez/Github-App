import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex justify="space-between" align="center" py={2}>
      <Box flex="1">
        <Image
          borderRadius="full"
          boxSize={["100px", "150px"]}
          objectFit="contain"
          src="/logo.png"
          alt="Github Logo"
          sx={{
            filter: "invert(1)",
          }}
        />
      </Box>
      <Box flex="1"></Box>
    </Flex>
  );
};

export default Navbar;
