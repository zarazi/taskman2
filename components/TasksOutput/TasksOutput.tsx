import { View } from "react-native";

import TasksList from "./TasksList";
import { ITask } from "../../@types/task";

const DUMMY_TASKS: ITask[] = [
  {
    id: "1",
    title: "Research todos app",
    description: "something worth spending ...",
    status: "todo",
  },
  {
    id: "2",
    title: "Design app architecture",
    description: "something worth spending more ...",
    status: "todo",
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
    <View>
      <TasksList tasks={DUMMY_TASKS} />
    </View>
  );
}

export default TasksOutput;
