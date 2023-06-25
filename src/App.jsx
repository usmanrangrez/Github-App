import "./App.css";
import { Text, Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { useState } from "react";
import UserProfile from "./components/UserProfile";

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <Container maxW="container.lg">
      <Navbar />
      <Text fontSize={["xl", "2xl", "3xl"]} marginTop={6} textAlign="center">
        Search users on Github
      </Text>
      <Search setUserData={setUserData} setLoading={setLoading} />
      {userData && <UserProfile userData={userData} />}
    </Container>
  );
}

export default App;
