import { Theme } from "@/theme";
import { useTheme } from "@shopify/restyle";
import { Entypo } from "@expo/vector-icons";
import { View, StyleSheet, Pressable } from "react-native";
import { AppText } from "@/components/shared/AppText";
import { useState } from "react";
import { UpsertTaskModal } from "@/components/shared/UpsertTaskModal";
import { AppIconButton } from "@/components/shared/AppIconButton";
import { useGlobalStore } from "@/stores/zustandStore";

import DraggableFlatList, {
  ScaleDecorator,
  RenderItemParams,
} from "react-native-draggable-flatlist";

const Home = () => {
  const theme = useTheme<Theme>();
  const styles = HomeStyles(theme);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState<number | undefined>();

  const tasks = useGlobalStore((state) => state.tasks);
  const updateTasksOrder = useGlobalStore((state) => state.updateTasksOrder);

  const toggleTaskModal = (taskId?: number) => {
    setSelectedTaskId(taskId);
    setIsTaskModalOpen(!isTaskModalOpen);
  };

  const renderItem = ({ item, drag }: RenderItemParams<any>) => {
    return (
      <ScaleDecorator activeScale={1.03}>
        <Pressable
          style={styles.innerTaskBox}
          onLongPress={drag}
          onPress={() => toggleTaskModal(item.id)}
        >
          <AppText
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.taskTitle}
          >
            {item.title}
          </AppText>
          <AppText numberOfLines={1} ellipsizeMode="tail">
            {item.description}
          </AppText>
        </Pressable>
      </ScaleDecorator>
    );
  };

  return (
    <View style={styles.homeContainer}>
      {tasks.length > 0 ? (
        <DraggableFlatList
          containerStyle={styles.tasksContainer}
          data={tasks}
          onDragEnd={({ data }) => updateTasksOrder(data)}
          keyExtractor={(task) => task.id?.toString() as string}
          renderItem={renderItem}
        />
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
      flex: 1,
    },
    innerTaskBox: {
      margin: theme.spacing.s,
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
