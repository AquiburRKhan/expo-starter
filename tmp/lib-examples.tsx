import { View, Text, Pressable, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Animated, {
  SharedValue,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import * as Localization from "expo-localization";
import { I18n } from "i18n-js";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/theme";
import { useGlobalStore } from "@/stores/zustandStore";
import React from "react";

const translations = {
  en: { welcome: "Hello", name: "Charlie" },
  bn: { welcome: "হ্যালো" },
};

const i18n = new I18n(translations);

// Set the locale once at the beginning of your app.
i18n.locale = Localization.getLocales()[0].languageCode as string;

// When a value is missing from a language it'll fall back to another language with the key present.
i18n.enableFallback = true;
// To see the fallback mechanism uncomment the line below to force the app to use the Japanese language.
// i18n.locale = "bn";

// This is to prevent Animated View from disappearing when the parent component re-renders
const AnimatedView = React.memo(({ width }: { width: SharedValue<number> }) => {
  return (
    <Animated.View
      style={{
        width,
        height: 100,
        backgroundColor: "violet",
      }}
    />
  );
});

const LibExamples = () => {
  const theme = useTheme<Theme>();
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };

  return (
    <ScrollView>
      <Text>Lib Examples</Text>
      {/* Fonts examples */}
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
          marginTop: 20,
        }}
      >
        <Text>Fonts</Text>
        <Text style={{ fontFamily: "PoppinsBold" }}>
          PoppinsBold: This is a game
        </Text>
        <Text style={{ fontFamily: "PoppinsSemiBold" }}>
          PoppinsSemiBold: This is a game
        </Text>
        <Text style={{ fontFamily: "PoppinsMedium" }}>
          PoppinsMedium: This is a game
        </Text>
        <Text style={{ fontFamily: "PoppinsRegular" }}>
          PoppinsRegular: This is a game
        </Text>
        <Text style={{ fontFamily: "PoppinsLight" }}>
          PoppinsLight: This is a game
        </Text>
        <Text>{"\n"}</Text>
        <Text style={{ fontFamily: "RobotoBold" }}>
          RobotoBold: This is a game
        </Text>
        <Text style={{ fontFamily: "RobotoMedium" }}>
          RobotoMedium: This is a game
        </Text>
        <Text style={{ fontFamily: "RobotoRegular" }}>
          RobotoRegular: This is a game
        </Text>
        <Text style={{ fontFamily: "RobotoLight" }}>
          RobotoLight: This is a game
        </Text>
      </View>
      {/* Icons examples */}
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
          marginTop: 20,
        }}
      >
        <Text>Icons</Text>
        <View>
          <Feather name="settings" size={24} color="black" />
        </View>
        <View>
          <Octicons name="graph" size={24} color="black" />
        </View>
        <View>
          <Entypo name="bar-graph" size={24} color="black" />
        </View>
        <View>
          <AntDesign name="infocirlce" size={24} color="black" />
        </View>
        <View>
          <MaterialIcons name="edit" size={24} color="black" />
        </View>
      </View>
      {/* Animation example */}
      <View style={{ flex: 1, alignItems: "center", paddingTop: 50 }}>
        <Text>Animation</Text>
        <AnimatedView width={width} />
        <View
          style={{
            marginTop: 20,
            padding: 20,
          }}
        >
          <Pressable onPress={handlePress}>
            <Text
              style={{
                backgroundColor: "blue",
                padding: 10,
                color: "white",
                fontSize: 16,
              }}
            >
              Click me to expand above
            </Text>
          </Pressable>
        </View>
      </View>
      {/* Localization example */}
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
          marginTop: 20,
        }}
      >
        <Text>Localization</Text>
        <Text>
          {i18n.t("welcome")} {i18n.t("name")}
        </Text>
      </View>
      {/* Theming example example */}
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
          marginTop: 20,
        }}
      >
        <Text>Theming</Text>
        <Pressable
          style={{
            backgroundColor: theme.colors.primaryButtonBackground,
            padding: theme.spacing.m,
          }}
        >
          <Text>Hello</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default LibExamples;
