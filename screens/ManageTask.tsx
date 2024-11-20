import { useLayoutEffect } from "react";
import { Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { StackParamList } from "../@types/navigation";

type ManageTaskProps = NativeStackScreenProps<StackParamList, "ManageTask">;

function ManageTask({ route, navigation }: ManageTaskProps) {
  const editedTaskId = route.params?.taskId;
  const isEditing = !!editedTaskId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Task" : "Add Task",
    });
  }, [navigation, isEditing]);

  return <Text>ManageTask Screen</Text>;
}

export default ManageTask;
