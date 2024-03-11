import { AppTitle } from "@/components/shared/AppTitle";
import { View, StyleSheet, TextInput } from "react-native";
import Modal from "react-native-modal";
import { Theme } from "@/theme";
import { useTheme } from "@shopify/restyle";
import { useEffect, useState } from "react";
import { AppButton } from "@/components/shared/AppButton";
import { useGlobalStore } from "@/stores/zustandStore";
import { Feather } from "@expo/vector-icons";
import { AppIconButton } from "./AppIconButton";
import { useLanguage } from "@/hooks/useLanguage";

type UpsertTaskModalProps = {
  selectedTaskId: number | undefined;
  isModalVisible: boolean;
  toggleModal: () => void;
};

export const UpsertTaskModal = ({
  selectedTaskId,
  isModalVisible,
  toggleModal,
}: UpsertTaskModalProps) => {
  const { t } = useLanguage();
  const theme = useTheme<Theme>();
  const styles = UpsertTaskModalStyles(theme);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const tasks = useGlobalStore((state) => state.tasks);
  const addTaskToStore = useGlobalStore((state) => state.addTask);
  const editTaskInStore = useGlobalStore((state) => state.editTask);
  const deleteTaskInStore = useGlobalStore((state) => state.deleteTask);

  useEffect(() => {
    if (selectedTaskId) {
      const selectedTask = tasks.find((task) => task.id === selectedTaskId);
      if (selectedTask) {
        setTitle(selectedTask.title);
        setDescription(selectedTask.description);
      }
    }
  }, [selectedTaskId]);

  const closeModal = () => {
    setTitle("");
    setDescription("");
    toggleModal();
  };

  const addTask = () => {
    addTaskToStore({ title, description });
    closeModal();
  };

  const saveTask = () => {
    editTaskInStore({ id: selectedTaskId, title, description });
    closeModal();
  };

  const deleteTask = () => {
    if (!selectedTaskId) return;

    deleteTaskInStore(selectedTaskId);
    closeModal();
  };

  return (
    <Modal isVisible={isModalVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.header}>
          <AppTitle style={styles.title}>
            {selectedTaskId ? t("tasks.editTask") : t("tasks.addTask")}
          </AppTitle>
          {selectedTaskId ? (
            <AppIconButton onPress={deleteTask}>
              <Feather
                name="trash"
                size={theme.iconButtonSize}
                color={theme.colors.primaryButtonIcon}
              />
            </AppIconButton>
          ) : null}
        </View>
        <TextInput
          placeholder={`${t("tasks.title")}`}
          autoFocus
          style={styles.inputBox}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <TextInput
          placeholder={`${t("tasks.task")}`}
          style={styles.descriptionBox}
          value={description}
          multiline
          numberOfLines={2}
          textAlignVertical="top"
          onChangeText={(text) => setDescription(text)}
        />
        <View style={styles.actionBtnsContainer}>
          <AppButton onPress={closeModal}>{t("tasks.cancel")}</AppButton>
          {!selectedTaskId ? (
            <AppButton
              disabled={title.length === 0 || description.length === 0}
              onPress={addTask}
            >
              {t("tasks.add")}
            </AppButton>
          ) : (
            <AppButton
              disabled={title.length === 0 || description.length === 0}
              onPress={saveTask}
            >
              {t("tasks.save")}
            </AppButton>
          )}
        </View>
      </View>
    </Modal>
  );
};

const UpsertTaskModalStyles = (theme: Theme) =>
  StyleSheet.create({
    modalContainer: {
      backgroundColor: theme.colors.primaryBackground,
      padding: theme.spacing.l,
      borderRadius: theme.borderRadius.l,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: theme.spacing.l,
    },
    title: {
      fontSize: theme.fontSize.l,
      color: theme.colors.primaryText,
    },
    inputBox: {
      height: 40,
      fontSize: theme.fontSize.m,
      paddingTop: theme.spacing.s,
      paddingBottom: theme.spacing.s,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.textInputBorder,
      color: theme.colors.primaryText,
    },
    descriptionBox: {
      height: 200,
      marginTop: theme.spacing.s,
      color: theme.colors.primaryText,
    },
    actionBtnsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: theme.spacing.s,
    },
  });
