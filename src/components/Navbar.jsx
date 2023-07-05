import React from "react";

import { Box, Button, Flex, Image, useDisclosure } from "@chakra-ui/react";
import HistoryModal from "./HistoryModal";

import { Box, Flex, Image } from "@chakra-ui/react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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

      <Box>
        <Button size="md" colorScheme="whatsapp" onClick={onOpen}>
          Search History
        </Button>
      </Box>
      {isOpen && <HistoryModal isOpen={isOpen} onClose={onClose} />}

      <Box flex="1"></Box>
    </Flex>
  );
};

export default Navbar;
