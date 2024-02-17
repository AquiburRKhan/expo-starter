import Modal from "react-native-modal";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/theme";
import { ThemeSelection } from "./ThemeSelection";
import { AppTitle } from "@/components/shared/AppTitle";

type ThemeModalProps = {
  isModalVisible: boolean;
  toggleModal: () => void;
};

export const ThemeModal = ({
  isModalVisible,
  toggleModal,
}: ThemeModalProps) => {
  const theme = useTheme<Theme>();
  const styles = ThemeModalStyles(theme);

  return (
    <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
      <View style={styles.modalContainer}>
        <AppTitle style={styles.title}>Choose theme</AppTitle>
        <ThemeSelection />
      </View>
    </Modal>
  );
};

const ThemeModalStyles = (theme: Theme) =>
  StyleSheet.create({
    modalContainer: {
      backgroundColor: theme.colors.primaryBackground,
      padding: theme.spacing.l,
      borderRadius: theme.borderRadius.l,
    },
    title: {
      fontSize: theme.fontSize.l,
      marginBottom: theme.spacing.l,
      color: theme.colors.primaryText,
    },
  });
