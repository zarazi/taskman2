import { useContext } from "react";

import TasksOutput from "../components/TasksOutput/TasksOutput";
import { TasksContext } from "../store/tasks-context";

function AllTasks() {
  const tasksCtx = useContext(TasksContext);
  return <TasksOutput tasks={tasksCtx.tasks} />;
}

export default AllTasks;
