import { ThemeProvider } from "@shopify/restyle";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { CustomDrawerContent } from "@/components/layout/CustomDrawerContent";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useRestyleTheme } from "@/hooks/useRestyleTheme";
import { Theme } from "@/theme";
import { StyleSheet } from "react-native";
import { useLanguage } from "@/hooks/useLanguage";

const navIconSize = 22;
export const RootLayoutNav = () => {
  const { t } = useLanguage();
  const [restyleTheme] = useRestyleTheme();
  const styles = RootLayoutNavStyles(restyleTheme);

  return (
    <ThemeProvider theme={restyleTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer
          drawerContent={CustomDrawerContent}
          screenOptions={{
            drawerType: "slide",
            drawerHideStatusBarOnOpen: true,
            headerShadowVisible: false,
            headerTintColor: restyleTheme.colors.primaryHeaderText,
            headerStyle: {
              backgroundColor: restyleTheme.colors.primaryHeaderBackground,
            },
            headerTitleStyle: styles.headerTitleStyle,
            drawerStyle: {
              backgroundColor: restyleTheme.colors.primaryBackground,
            },
            drawerLabelStyle: styles.labelStyle,
            drawerActiveTintColor: restyleTheme.colors.drawerActiveTintColor,
            drawerActiveBackgroundColor:
              restyleTheme.colors.drawerActiveBackgroundColor,
            drawerInactiveTintColor:
              restyleTheme.colors.drawerInactiveTintColor,
          }}
        >
          <Drawer.Screen
            name="index" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: `${t("tasks.tasks")}`,
              title: `${t("tasks.tasks")}`,
              drawerIcon: ({ color }) => {
                return (
                  <FontAwesome5 name="tasks" size={navIconSize} color={color} />
                );
              },
            }}
          />
          <Drawer.Screen
            name="settings"
            options={{
              drawerLabel: `${t("settings.settings")}`,
              title: `${t("settings.settings")}`,
              drawerIcon: ({ color }) => {
                return (
                  <Ionicons name="settings" size={navIconSize} color={color} />
                );
              },
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
};

const RootLayoutNavStyles = (theme: Theme) => {
  return StyleSheet.create({
    headerTitleStyle: {
      fontFamily: theme.navigationFontFamily,
      fontSize: 16,
    },
    labelStyle: {
      fontFamily: theme.navigationFontFamily,
      fontSize: 16,
      marginLeft: -20,
    },
  });
};
