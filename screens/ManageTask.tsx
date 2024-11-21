import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { StackParamList } from "../@types/navigation";
import { TasksContext } from "../store/tasks-context";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";
import IconButton from "../components/UI/IconButton";
import TaskForm from "../components/ManageTask/TaskForm";

type ManageTaskProps = NativeStackScreenProps<StackParamList, "ManageTask">;

function ManageTask({ route, navigation }: ManageTaskProps) {
  const tasksCtx = useContext(TasksContext);

  const editedTaskId = route.params?.taskId;
  const isEditing = !!editedTaskId;

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

  function confirmHandler() {
    if (isEditing) {
      tasksCtx.updateTask(editedTaskId, {
        title: "Updated Task",
        description: "...",
        status: "todo",
      });
    } else {
      tasksCtx.addTask({
        title: "New Task",
        description: "...",
        status: "todo",
      });
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <TaskForm />
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
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
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
