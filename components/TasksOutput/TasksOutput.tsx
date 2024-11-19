import { StyleSheet, View } from "react-native";

import TasksList from "./TasksList";
import { ITask } from "../../@types/task";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_TASKS: ITask[] = [
  {
    id: "1",
    title: "Research todos app",
    description: "something worth spending ...",
    status: "done",
  },
  {
    id: "2",
    title: "Design app architecture",
    description: "something worth spending more ...",
    status: "in-progress",
  },
  {
    id: "3",
    title: "Prep coding tools",
    description: "something worth spending much more ...",
    status: "todo",
  },
];

function TasksOutput() {
  return (
    <View style={styles.container}>
      <TasksList tasks={DUMMY_TASKS} />
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
