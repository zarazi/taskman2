import { FlatList, ListRenderItemInfo, StyleSheet, Text } from "react-native";

import { ITask } from "../../@types/task";
import { GlobalStyles } from "../../constants/styles";

interface TasksListProps {
  tasks: ITask[];
}

function renderTaskItem({ item }: ListRenderItemInfo<ITask>) {
  return <Text style={styles.text}>{item.title}</Text>;
}

function TasksList({ tasks }: TasksListProps) {
  return (
    <FlatList
      data={tasks}
      renderItem={renderTaskItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default TasksList;

const styles = StyleSheet.create({
  text: {
    color: GlobalStyles.colors.primary50,
  },
});
