import { Button, Input, Toast } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";

const Search = ({ setUserData, setLoading }) => {
  const [query, setQuery] = useState("");
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query) return;
    setLoading(true);
    setUserData("");
    try {
      const res = await axios.get(`https://api.github.com/users/${query}`);
      setUserData(res);
    } catch (error) {
      return toast({
        title: "Error",
        description:
          error.response?.data.message === "Not Found"
            ? "User not found"
            : error.response?.data.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        variant="outline"
        size="lg"
        marginTop={5}
        placeholder="Type a username (i.e. usmanrangrez)"
        focusBorderColor="green.500"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button
        marginTop={3}
        size="md"
        p={5}
        colorScheme="whatsapp"
        fontSize="md"
        type="submit"
        isDisabled={!query}
        opacity={!query ? 0.5 : 1}
      >
        Search
      </Button>
    </form>
  );
};

export default Search;
