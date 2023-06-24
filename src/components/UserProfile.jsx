import { Flex, VStack, Avatar, Button, Link } from "@chakra-ui/react";
import Details from "./Details";
import Repos from "./Repos";
import React from "react";

const UserProfile = ({ userData }) => {
  return (
    <>
      <Flex my={16} border={"2px solid green"} borderRadius={4} padding={8}>
        <VStack gap={5}>
          <Avatar
            size={"2xl"}
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
        </VStack>
        <Details userData={userData} />
      </Flex>
      <Repos reposUrl={userData && userData.data.repos_url} />
    </>
  );
};

export default UserProfile;
