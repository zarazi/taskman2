export interface ITask {
  id: string;
  title: string;
  description: string;
  status: string;
}

export interface ITaskData extends Omit<ITask, "id"> {}
