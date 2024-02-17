import { Theme } from "@/theme";
import { useTheme } from "@shopify/restyle";
import { Link } from "expo-router";
import { View, Text } from "react-native";

const Home = () => {
  const theme = useTheme<Theme>();

  return (
    <View
      style={{
        backgroundColor: theme.colors.primaryBackground,
        flex: 1,
      }}
    >
      <Text>Hello, world!</Text>
      <Link style={{ padding: 20, color: "black" }} href="/settings">
        Lib Examples
      </Link>
    </View>
  );
};

export default Home;
