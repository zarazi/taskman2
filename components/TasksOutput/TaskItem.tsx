import { Text, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/styles";
import { ITask } from "../../@types/task";

interface TaskItemProps {
  item: ITask;
}

function TaskItem({ item }: TaskItemProps) {
  return <Text style={styles.text}>{item.title}</Text>;
}

export default TaskItem;

const styles = StyleSheet.create({
  text: {
    color: GlobalStyles.colors.primary50,
  },
});
