import Modal from "react-native-modal";
import { View, StyleSheet } from "react-native";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/theme";
import { ThemeRadioGroup } from "./ThemeRadioGroup";
import { AppTitle } from "@/components/shared/AppTitle";
import { useLanguage } from "@/hooks/useLanguage";

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
  const { t } = useLanguage();

  return (
    <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
      <View style={styles.modalContainer}>
        <AppTitle style={styles.title}>{t("settings.chooseTheme")}</AppTitle>
        <ThemeRadioGroup />
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
