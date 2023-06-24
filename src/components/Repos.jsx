import React, { useEffect, useState } from "react";
import {
  useToast,
  Text,
  Spinner,
  Flex,
  Link,
  Badge,
  Box,
  Stack,
  Button,
} from "@chakra-ui/react";
import axios from "axios";

const Repos = ({ reposUrl }) => {
  const toast = useToast();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  console.log("respppsss", repos);
  useEffect(() => {
    const fetchRepos = async () => {
      if (!reposUrl) return;
      try {
        setLoading(true);
        const res = await axios.get(reposUrl);
        setRepos(res.data);
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
    fetchRepos();
  }, [reposUrl, toast]);

  return (
    <>
      <Text
        textAlign={"center"}
        letterSpacing={1.5}
        fontSize={"3xl"}
        fontWeight={"bold"}
        color={"green.400"}
        mt={4}
      >
        REPOSITORIES
      </Text>
      {loading && (
        <Flex justifyContent={"center"}>
          <Spinner size={"xl"} my={4} />
        </Flex>
      )}
      {repos
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .map((rep, idx) => {
          if (idx > 4 && !showMore) return null; //pehle 0-4 mai ye nai chalega
          return (
            <Flex
              key={rep.id}
              padding={4}
              bg={"green.800"}
              _hover={{ bg: "whiteAlpha.400" }}
              my={4}
              px={10}
              gap={4}
              borderRadius={4}
              transition={"all 0.3 ease"}
              justifyContent={"space-between"}
              alignItems={"center"}
              mt={2}
              mr={10}
              ml={10}
            >
              <Flex flex={1} direction={"column"}>
                <Link
                  href={rep.html_url}
                  target="_blank"
                  fontSize={"md"}
                  fontWeight={"bold"}
                >
                  {rep.name}
                </Link>
                <Badge
                  fontSize={"0.7em"}
                  colorScheme={"whatsapp"}
                  textAlign={"center"}
                  px={1}
                  mt={1}
                  width={"min-content"}
                >
                  LANGUAGE: {rep.language ? rep.language : " None"}
                </Badge>
              </Flex>
              <Stack direction={"row"}>
                <Badge
                  bgColor={"yellow.500"}
                  color={"black"}
                  p={2}
                  borderRadius={10}
                  marginRight={4}
                >
                  STARS: {rep.stargazers_count ? rep.stargazers_count : 0}
                </Badge>
                <Badge
                  bgColor={"pink"}
                  color={"black"}
                  p={2}
                  borderRadius={10}
                  marginRight={4}
                >
                  FORKS: {rep.forks ? rep.forks : 0}
                </Badge>
                <Badge
                  bgColor={"blue.300"}
                  color={"black"}
                  p={2}
                  borderRadius={10}
                  marginRight={4}
                >
                  WATCHERS: {rep.watchers ? rep.watchers : 0}
                </Badge>
              </Stack>
            </Flex>
          );
        })}

      {/* //map huwa 0-4 fir ye run hoga... AGAR  repos ki len originally 5 se zyada hai tohi showmoire button dikahu  */}
      {/* AGAR SHOWMORE TRUE HAI ye isilye kyuki fir 2 buttons ayege */}
      {!showMore && repos.length > 5 && (
        <Flex justifyContent={"center"} my={4}>
          <Button
            size={"md"}
            colorScheme="whatsapp"
            onClick={() => setShowMore(true)}
          >
            Show More
          </Button>
        </Flex>
      )}
      {showMore && (
        <Flex justifyContent={"center"} my={4}>
          <Button
            size={"md"}
            colorScheme="whatsapp"
            onClick={() => setShowMore(false)}
          >
            Show Less
          </Button>
        </Flex>
      )}
    </>
  );
};

export default Repos;
