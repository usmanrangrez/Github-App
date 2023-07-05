import { Button, Input } from "@chakra-ui/react";
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
      addUserToLocalStorage(res, query);
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

  const addUserToLocalStorage = (res, username) => {
    //simple logic
    //get all users if there are if not return empty array
    const users = JSON.parse(localStorage.getItem("github-users")) || [];
    const userExists = users.find((user) => user.id === username);

    //to place on top of modal
    if (userExists) {
      users.splice(users.indexOf(userExists), 1);
    }
    users.unshift({
      id: res.data.login,
      avatar_url: res.data.avatar_url,
      name: res.data.name,
      url: res.data.html_url,
    });

    localStorage.setItem("github-users", JSON.stringify(users));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        variant="outline"
        size="lg"
        mt={5}
        placeholder="Type a username (i.e. usmanrangrez)"
        focusBorderColor="green.500"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button
        mt={3}
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
