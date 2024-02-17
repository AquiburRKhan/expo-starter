import { Theme } from "@/theme";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useTheme } from "@shopify/restyle";
import { Text, StyleSheet, View } from "react-native";

export const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const theme = useTheme<Theme>();
  const styles = CustomDrawerContentStyles(theme);

  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <View style={styles.appTitleContainer}>
        <Text style={styles.appTitle}>Task Tracker</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const CustomDrawerContentStyles = (theme: Theme) =>
  StyleSheet.create({
    appTitleContainer: {
      marginHorizontal: theme.spacing.s,
      marginTop: 4,
      marginBottom: theme.spacing.m,
      borderRadius: theme.borderRadius.xs,
    },
    appTitle: {
      fontSize: theme.fontSize.l,
      fontFamily: theme.fontFamily.RobotoBold,
      color: theme.colors.primaryTitle,
    },
  });
