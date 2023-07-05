import { Flex, VStack, Avatar, Button, Link } from "@chakra-ui/react";
import Details from "./Details";
import Repos from "./Repos";
import React from "react";

const UserProfile = ({ userData }) => {
  return (
    <Flex direction="column" my={16} borderWidth="2px" borderRadius={4} p={8}>
      <VStack gap={5} alignItems="center">
        <Avatar
          size={["xl", "2xl"]}
          name={userData && userData.data.name}
          src={userData && userData.data.avatar_url}
        />
        <Button colorScheme="whatsapp" size="lg">
          <Link
            href={userData && userData.data.html_url}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            View Profile
          </Link>
        </Button>
        <br />
      </VStack>
      <Details userData={userData} />
      <Repos reposUrl={userData && userData.data.repos_url} />
    </Flex>
  );
};

export default UserProfile;
