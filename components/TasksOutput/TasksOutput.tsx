import { StyleSheet, Text, View } from "react-native";

import TasksList from "./TasksList";
import { ITask } from "../../@types/task";
import { GlobalStyles } from "../../constants/styles";

interface TasksOutputProps {
  tasks: ITask[];
  fallbackText: string;
}

function TasksOutput({ tasks, fallbackText }: TasksOutputProps) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (tasks.length > 0) {
    content = <TasksList tasks={tasks} />;
  }
  return <View style={styles.container}>{content}</View>;
}

export default TasksOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
