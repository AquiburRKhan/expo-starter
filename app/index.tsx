import { Theme } from "@/theme";
import { useTheme } from "@shopify/restyle";
import { Link } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet, Text, Pressable } from "react-native";

const Home = () => {
  const theme = useTheme<Theme>();
  const styles = HomeStyles(theme);

  const openAddTaskModal = () => {
    console.log("Open Add Task Modal");
  };

  return (
    <View style={styles.homeContainer}>
      <View>
        <Text>Hello, world!</Text>
        <Link style={{ padding: 20, color: "black" }} href="/settings">
          Lib Examples
        </Link>
      </View>
      <Pressable style={styles.addTaskModalButton} onPress={openAddTaskModal}>
        <MaterialCommunityIcons
          name="plus"
          size={50}
          style={styles.addTaskModalButtonIcon}
        />
      </Pressable>
    </View>
  );
};

const HomeStyles = (theme: Theme) =>
  StyleSheet.create({
    homeContainer: {
      flex: 1,
      backgroundColor: theme.colors.primaryBackground,
    },
    addTaskModalButton: {
      position: "absolute",
      bottom: 50,
      right: 30,
      height: 50,
      width: 50,
      borderRadius: 10,
      backgroundColor: theme.colors.primaryButtonBackground,
    },
    addTaskModalButtonIcon: {
      color: theme.colors.primaryButtonIcon,
    },
  });

export default Home;
