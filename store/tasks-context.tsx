import { createContext, ReactNode, useReducer } from "react";

import { ITask, ITaskData } from "../@types/task";

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

type TasksContextType = {
  tasks: ITask[];
  addTask: (taskData: ITaskData) => void;
  deleteTask: (id: string) => void;
  updateTask: (id: string, taskData: ITaskData) => void;
};

export const TasksContext = createContext<TasksContextType>(null!);

type TaskActionType =
  | { type: "ADD"; payload: ITaskData }
  | { type: "DELETE"; payload: string }
  | { type: "UPDATE"; payload: { id: string; data: ITaskData } };

function tasksReducer(state: ITask[], action: TaskActionType) {
  switch (action.type) {
    case "ADD":
      // TODO: generate more compact format with UUID or shorter date format
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "DELETE":
      return state.filter((task) => task.id !== action.payload);
    case "UPDATE":
      const updatableTaskIndex = state.findIndex(
        (task) => task.id === action.payload.id
      );
      const updatableTask = state[updatableTaskIndex];
      const updatedItem = { ...updatableTask, ...action.payload.data };
      const updatedTasks = [...state];
      updatedTasks[updatableTaskIndex] = updatedItem;
      return updatedTasks;
    default:
      return state;
  }
}

interface TasksContextProviderProps {
  children: ReactNode;
}

function TasksContextProvider({ children }: TasksContextProviderProps) {
  const [tasksState, dispatch] = useReducer(tasksReducer, DUMMY_TASKS);

  function addTask(taskData: ITaskData) {
    dispatch({ type: "ADD", payload: taskData });
  }

  function deleteTask(id: string) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateTask(id: string, taskData: ITaskData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: taskData } });
  }

  const value: TasksContextType = {
    tasks: tasksState,
    addTask: addTask,
    deleteTask: deleteTask,
    updateTask: updateTask,
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
}

export default TasksContextProvider;
