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
  useBreakpointValue,
} from "@chakra-ui/react";
import axios from "axios";

const Repos = ({ reposUrl }) => {
  const toast = useToast();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

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

  const isMobileScreen = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Text
        textAlign="center"
        letterSpacing={1.5}
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        color="green.400"
        mt={4}
      >
        REPOSITORIES
      </Text>
      {loading && (
        <Flex justifyContent="center">
          <Spinner size="xl" my={4} />
        </Flex>
      )}
      {repos
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .map((repo, idx) => {
          if (idx > 4 && !showMore) return null;
          return (
            <Flex
              key={repo.id}
              padding={4}
              bg="green.800"
              _hover={{ bg: "whiteAlpha.400" }}
              my={4}
              px={10}
              gap={4}
              borderRadius={4}
              transition="all 0.3s ease"
              justifyContent="space-between"
              alignItems="center"
              mt={2}
              mr={10}
              ml={10}
            >
              <Flex flex={1} direction="column">
                <Link
                  href={repo.html_url}
                  target="_blank"
                  fontSize="md"
                  fontWeight="bold"
                  style={{ wordBreak: "break-all" }}
                >
                  {repo.name}
                </Link>
                <Badge
                  fontSize={["0.6em", "0.7em"]}
                  colorScheme="whatsapp"
                  textAlign="center"
                  px={1}
                  mt={1}
                  width="min-content"
                >
                  LANGUAGE: {repo.language ? repo.language : " None"}
                </Badge>
              </Flex>

              {!isMobileScreen && (
                <Stack direction="row">
                  <Badge
                    bgColor="yellow.500"
                    color="black"
                    p={2}
                    borderRadius={10}
                    marginRight={4}
                    fontSize={["0.8em", "1em"]}
                  >
                    STARS: {repo.stargazers_count ? repo.stargazers_count : 0}
                  </Badge>
                  <Badge
                    bgColor="pink"
                    color="black"
                    p={2}
                    borderRadius={10}
                    marginRight={4}
                    fontSize={["0.8em", "1em"]}
                  >
                    FORKS: {repo.forks ? repo.forks : 0}
                  </Badge>
                  <Badge
                    bgColor="blue.300"
                    color="black"
                    p={2}
                    borderRadius={10}
                    marginRight={4}
                    fontSize={["0.8em", "1em"]}
                  >
                    WATCHERS: {repo.watchers ? repo.watchers : 0}
                  </Badge>
                </Stack>
              )}
            </Flex>
          );
        })}
      {!showMore && repos.length > 5 && (
        <Flex justifyContent="center">
          <Button
            colorScheme="green"
            size="md"
            m={4}
            w={"min-content"}
            onClick={() => setShowMore(true)}
          >
            Show More
          </Button>
        </Flex>
      )}
      {showMore && repos.length > 5 && (
        <Flex justifyContent="center">
          <Button
            colorScheme="green"
            size="md"
            m={4}
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
