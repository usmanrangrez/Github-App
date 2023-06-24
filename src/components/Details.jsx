import React from "react";
import { VStack, Badge, Text, Box, Wrap } from "@chakra-ui/react";
const Details = ({ userData }) => {
  return (
    <>
      <VStack ml={10} alignItems={"self-start"}>
        <Wrap gap={4}>
          <Badge colorScheme="orange" h={7} w={"auto"} fontSize={15}>
            PUBLIC REPOS: {userData && userData.data.public_repos}
          </Badge>
          <Badge colorScheme="pink" h={7} w={"auto"} fontSize={15}>
            PUBLIC GISTS: {userData && userData.data.public_gists}
          </Badge>
          <Badge colorScheme="cyan" h={7} w={"auto"} fontSize={15}>
            FOLLOWERS: {userData && userData.data.followers}
          </Badge>
          <Badge colorScheme="purple" h={7} w={"auto"} fontSize={15}>
            FOLLOWING: {userData && userData.data.following}
          </Badge>
        </Wrap>
        <Text fontSize={"2xl"} fontWeight={"bold"} mt={4} color={"green.00"}>
          {userData && userData.data.name}
        </Text>
        <Text fontSize={"md"} fontWeight={"bold"} mt={4} color={"green.500"}>
          {userData && userData.data.bio ? userData.data.bio : "Not Specified"}
        </Text>
        <Box>
          <Text fontSize={"md"}>
            <Text mr={1} as={"span"} fontWeight={"bold"} color={"green.200"}>
              Company:
            </Text>
            {userData && userData.data.company
              ? userData.data.company
              : " Not Specified"}
          </Text>
          <Text fontSize={"md"}>
            <Text mr={1} as={"span"} fontWeight={"bold"} color={"green.200"}>
              Location:
            </Text>
            {userData && userData.data.location
              ? userData.data.loaction
              : " Not Specified"}
          </Text>
          <Text fontSize={"md"}>
            <Text mr={1} as={"span"} fontWeight={"bold"} color={"green.200"}>
              Blog/Website:
            </Text>
            {userData && userData.data.blog ? (
              <a href={userData.data.blog} target="_blank">
                {userData.data.blog}
              </a>
            ) : (
              " Not Specified"
            )}
          </Text>
          <Text fontSize={"md"}>
            <Text mr={1} as={"span"} fontWeight={"bold"} color={"green.200"}>
              Member Since:
            </Text>
            {userData && userData.data.created_at
              ? new Date(userData.data.created_at).toLocaleDateString()
              : "Not Specified"}
          </Text>
        </Box>
      </VStack>
    </>
  );
};

export default Details;
