import { useContext } from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import { ITask } from "../../@types/task";
import { StackParamList } from "../../@types/navigation";
import { TasksContext } from "../../store/tasks-context";
import { GlobalStyles } from "../../constants/styles";
import IconButton from "../UI/IconButton";
import TaskStatus from "../TaskDetails/TaskStatus";

interface TaskItemProps {
  item: ITask;
}

function TaskItem({ item }: TaskItemProps) {
  const tasksCtx = useContext(TasksContext);
  const navigation = useNavigation<NavigationProp<StackParamList>>();

  function taskPressHandler() {
    navigation.navigate("ManageTask", { taskId: item.id });
  }

  function taskDeleteHandler() {
    // TODO: confirm before delete
    tasksCtx.deleteTask(item.id);
  }

  function statusChangeHandler(status: string) {
    const selectedTask = tasksCtx.tasks.find((task) => task.id === item.id);
    if (!selectedTask) return;

    selectedTask.status = status;
    tasksCtx.updateTask(selectedTask.id, selectedTask);
  }

  return (
    <Pressable
      onPress={taskPressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.itemContainer}>
        <View style={styles.upperContainer}>
          <View style={styles.textContainer}>
            <Text style={[styles.textBase, styles.title]}>{item.title}</Text>
            <Text style={[styles.textBase, styles.description]}>
              {item.description}
            </Text>
          </View>
          <View style={styles.deleteContainer}>
            <IconButton
              name="trash"
              color={GlobalStyles.colors.error500}
              size={32}
              onPress={taskDeleteHandler}
            />
          </View>
        </View>
        <TaskStatus status={item.status} onChange={statusChangeHandler} />
      </View>
    </Pressable>
  );
}

export default TaskItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  itemContainer: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  upperContainer: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 8,
  },
  textContainer: {
    flex: 1,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
    fontSize: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  description: {
    color: GlobalStyles.colors.primary100,
    marginBottom: 8,
  },
  deleteContainer: {
    marginLeft: 16,
    padding: 0,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
