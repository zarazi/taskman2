import { StyleSheet, View } from "react-native";

import TasksList from "./TasksList";
import { ITask } from "../../@types/task";
import { GlobalStyles } from "../../constants/styles";

interface TasksOutputProps {
  tasks: ITask[];
}

function TasksOutput({ tasks }: TasksOutputProps) {
  return (
    <View style={styles.container}>
      <TasksList tasks={tasks} />
    </View>
  );
}

export default TasksOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
