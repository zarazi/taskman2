import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { StackParamList } from "../@types/navigation";
import { GlobalStyles } from "../constants/styles";
import IconButton from "../components/UI/IconButton";

type ManageTaskProps = NativeStackScreenProps<StackParamList, "ManageTask">;

function ManageTask({ route, navigation }: ManageTaskProps) {
  const editedTaskId = route.params?.taskId;
  const isEditing = !!editedTaskId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Task" : "Add Task",
    });
  }, [navigation, isEditing]);

  function deleteTaskHandler() {}

  return (
    <View style={styles.container}>
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
