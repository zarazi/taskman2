import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { StackParamList } from "../@types/navigation";
import { TasksContext } from "../store/tasks-context";
import Button from "../components/UI/Button";

type TaskDetailsProps = NativeStackScreenProps<StackParamList, "TaskDetails">;

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
      <Text>Details of {selectedTaskId}</Text>
      {/* TODO: show selected task details */}
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
