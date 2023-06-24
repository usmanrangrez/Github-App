import "./App.css";
import { Text, Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { useState } from "react";
import UserProfile from "./components/UserProfile";
function App() {
  //we use this to lift up the state
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log(userData ? userData.data : userData);

  return (
    <>
      <Container maxW="container.lg">
        <Navbar />
        <Text fontSize="3xl" marginTop={6} align={"center"} size>
          Search users on Github
        </Text>
        <Search setUserData={setUserData} setLoading={setLoading} />
        {/* only show rest when search button clicked */}
        {userData && <UserProfile userData={userData} />}
      </Container>
    </>
  );
}

export default App;
