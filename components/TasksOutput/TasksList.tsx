import { FlatList, ListRenderItemInfo, Text } from "react-native";

import { ITask } from "../../@types/task";

interface TasksListProps {
  tasks: ITask[];
}

function renderTaskItem({ item }: ListRenderItemInfo<ITask>) {
  return <Text>{item.title}</Text>;
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
