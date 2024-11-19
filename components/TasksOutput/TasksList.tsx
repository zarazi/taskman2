import { FlatList, ListRenderItemInfo } from "react-native";

import { ITask } from "../../@types/task";
import TaskItem from "./TaskItem";

interface TasksListProps {
  tasks: ITask[];
}

function renderTaskItem({ item }: ListRenderItemInfo<ITask>) {
  return <TaskItem item={item} />;
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
