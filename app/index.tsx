import { Theme } from "@/theme";
import { useTheme } from "@shopify/restyle";
import { Entypo } from "@expo/vector-icons";
import { View, StyleSheet, ScrollView, Pressable } from "react-native";
import { AppText } from "@/components/shared/AppText";
import { useState } from "react";
import { UpsertTaskModal } from "@/components/shared/UpsertTaskModal";
import { AppIconButton } from "@/components/shared/AppIconButton";
import { useGlobalStore } from "@/stores/zustandStore";

const Home = () => {
  const theme = useTheme<Theme>();
  const styles = HomeStyles(theme);
  const tasks = useGlobalStore((state) => state.tasks);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState<number | undefined>();

  const toggleTaskModal = (taskId?: number) => {
    setSelectedTaskId(taskId);
    setIsTaskModalOpen(!isTaskModalOpen);
  };

  return (
    <View style={styles.homeContainer}>
      {tasks.length > 0 ? (
        <ScrollView>
          <View style={styles.tasksContainer}>
            {tasks.map((task) => (
              <View key={task.id} style={styles.taskBox}>
                <Pressable onPress={() => toggleTaskModal(task.id)}>
                  <View style={styles.innerTaskBox}>
                    <AppText
                      numberOfLines={2}
                      ellipsizeMode="tail"
                      style={styles.taskTitle}
                    >
                      {task.title}
                    </AppText>
                    <AppText numberOfLines={4} ellipsizeMode="tail">
                      {task.description}
                    </AppText>
                  </View>
                </Pressable>
              </View>
            ))}
          </View>
        </ScrollView>
      ) : (
        <View style={styles.noTasksTextContainer}>
          <AppText style={styles.noTasksText}>No tasks available</AppText>
        </View>
      )}
      <AppIconButton
        style={styles.addTaskModalButton}
        onPress={() => toggleTaskModal()}
      >
        <Entypo
          name="plus"
          size={theme.iconButtonSize}
          style={{
            color: theme.colors.primaryButtonIcon,
          }}
        />
      </AppIconButton>
      <UpsertTaskModal
        selectedTaskId={selectedTaskId}
        isModalVisible={isTaskModalOpen}
        toggleModal={toggleTaskModal}
      />
    </View>
  );
};

const HomeStyles = (theme: Theme) =>
  StyleSheet.create({
    homeContainer: {
      flex: 1,
      backgroundColor: theme.colors.primaryBackground,
    },
    noTasksTextContainer: {
      padding: theme.spacing.l,
      justifyContent: "center",
      alignItems: "center",
    },
    noTasksText: {
      fontSize: theme.fontSize.m,
    },
    addTaskModalButton: {
      position: "absolute",
      bottom: 50,
      right: 30,
    },
    tasksContainer: {
      flexDirection: "row",
      paddingVertical: theme.spacing.s,
      paddingHorizontal: theme.spacing.s,
      flexWrap: "wrap",
    },
    taskBox: {
      width: "50%",
    },
    innerTaskBox: {
      margin: theme.spacing.s,
      height: 200,
      borderWidth: 1,
      borderColor: theme.colors.taskBoxBorder,
      borderRadius: theme.borderRadius.m,
      padding: theme.spacing.m,
    },
    taskTitle: {
      fontFamily: theme.taskTitleFontFamily,
    },
  });

export default Home;
