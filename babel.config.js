module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // Required for react-native-reanimated, has to be listed last
      "react-native-reanimated/plugin",
    ],
  };
};
