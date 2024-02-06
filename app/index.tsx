import { Link } from "expo-router";
import { Text } from "react-native";

const Home = () => {
  return (
    <>
      <Text>Hello, world!</Text>
      <Link
        style={{ backgroundColor: "blue", padding: 20, color: "white" }}
        href="/lib-examples"
      >
        Lib Examples
      </Link>
    </>
  );
};

export default Home;
