import React from "react";
import { VStack, Badge, Text, Box, Wrap } from "@chakra-ui/react";

const Details = ({ userData }) => {
  return (
    <VStack ml={[0, 10]} alignItems={["center", "self-start"]}>
      <Wrap gap={4} flexWrap={["wrap", "nowrap"]} justifyContent="center">
        <Badge colorScheme="orange" h={7} w="auto" fontSize={[12, 15]}>
          PUBLIC REPOS: {userData && userData.data.public_repos}
        </Badge>
        <Badge colorScheme="pink" h={7} w="auto" fontSize={[12, 15]}>
          PUBLIC GISTS: {userData && userData.data.public_gists}
        </Badge>
        <Badge colorScheme="cyan" h={7} w="auto" fontSize={[12, 15]}>
          FOLLOWERS: {userData && userData.data.followers}
        </Badge>
        <Badge colorScheme="purple" h={7} w="auto" fontSize={[12, 15]}>
          FOLLOWING: {userData && userData.data.following}
        </Badge>
      </Wrap>
      <Text fontSize={["xl", "2xl"]} fontWeight="bold" mt={4} color="green.500">
        {userData && userData.data.name}
      </Text>
      <Text fontSize={["md", "lg"]} fontWeight="bold" mt={4} color="green.500">
        {userData && userData.data.bio ? userData.data.bio : "Not Specified"}
      </Text>
      <Box>
        <Text fontSize={["md", "lg"]}>
          <Text as="span" fontWeight="bold" color="green.200">
            Company:
          </Text>
          {userData && userData.data.company
            ? userData.data.company
            : " Not Specified"}
        </Text>
        <Text fontSize={["md", "lg"]}>
          <Text as="span" fontWeight="bold" color="green.200">
            Location:
          </Text>
          {userData && userData.data.location
            ? userData.data.location
            : " Not Specified"}
        </Text>
        <Text fontSize={["md", "lg"]}>
          <Text as="span" fontWeight="bold" color="green.200">
            Blog/Website:
          </Text>
          {userData && userData.data.blog ? (
            <a
              href={userData.data.blog}
              target="_blank"
              rel="noopener noreferrer"
            >
              {userData.data.blog}
            </a>
          ) : (
            " Not Specified"
          )}
        </Text>
        <Text fontSize={["md", "lg"]}>
          <Text as="span" fontWeight="bold" color="green.200">
            Member Since:
          </Text>
          {userData && userData.data.created_at
            ? new Date(userData.data.created_at).toLocaleDateString()
            : "Not Specified"}
        </Text>
      </Box>
    </VStack>
  );
};

export default Details;
