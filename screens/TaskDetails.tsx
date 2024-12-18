import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { StackParamList } from "../@types/navigation";
import { TasksContext } from "../store/tasks-context";
import { GlobalStyles } from "../constants/styles";
import TaskDetailsView from "../components/TaskDetails/TaskDetailsView";
import Button from "../components/UI/Button";

interface TaskDetailsProps
  extends NativeStackScreenProps<StackParamList, "TaskDetails"> {}

function TaskDetails({ route, navigation }: TaskDetailsProps) {
  const tasksCtx = useContext(TasksContext);

  const selectedTaskId = route.params?.taskId;

  const selectedTask = tasksCtx.tasks.find(
    (task) => task.id === selectedTaskId
  );

  function closeHandler() {
    navigation.goBack();
  }

  function editHandler() {
    navigation.navigate("ManageTask", { taskId: selectedTaskId });
  }

  return (
    <View style={styles.container}>
      {selectedTask && <TaskDetailsView displayValues={selectedTask} />}
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={closeHandler}>
          Close
        </Button>
        <Button style={styles.button} onPress={editHandler}>
          Edit
        </Button>
      </View>
    </View>
  );
}

export default TaskDetails;

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
});
