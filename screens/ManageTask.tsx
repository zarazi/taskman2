import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { StackParamList } from "../@types/navigation";
import { ITaskData } from "../@types/task";
import { TasksContext } from "../store/tasks-context";
import { GlobalStyles } from "../constants/styles";
import IconButton from "../components/UI/IconButton";
import TaskForm from "../components/ManageTask/TaskForm";

type ManageTaskProps = NativeStackScreenProps<StackParamList, "ManageTask">;

function ManageTask({ route, navigation }: ManageTaskProps) {
  const tasksCtx = useContext(TasksContext);

  const editedTaskId = route.params?.taskId;
  const isEditing = !!editedTaskId;

  const selectedTask = tasksCtx.tasks.find((task) => task.id === editedTaskId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Task" : "Add Task",
    });
  }, [navigation, isEditing]);

  function deleteTaskHandler() {
    if (isEditing) tasksCtx.deleteTask(editedTaskId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler(taskData: ITaskData) {
    if (isEditing) {
      tasksCtx.updateTask(editedTaskId, taskData);
    } else {
      tasksCtx.addTask(taskData);
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <TaskForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        defaultValues={selectedTask}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            name="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteTaskHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
