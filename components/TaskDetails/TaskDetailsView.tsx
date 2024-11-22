import { View, Text, StyleSheet } from "react-native";

import { ITask } from "../../@types/task";
import { GlobalStyles } from "../../constants/styles";
import Input from "../ManageTask/Input";
import TaskStatus from "./TaskStatus";

interface TaskDetailsViewProps {
  displayValues: ITask;
}

function TaskDetailsView({ displayValues }: TaskDetailsViewProps) {
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Task</Text>
      <Input
        label="Title"
        invalid={false}
        textInputConfig={{
          maxLength: 100,
          value: displayValues.title,
        }}
      />
      <Input
        label="Description"
        invalid={false}
        textInputConfig={{
          multiline: true,
          maxLength: 255,
          value: displayValues.description,
          // autoCapitalize: 'none',
          // autoCorrect: true,
        }}
      />
      <View style={styles.statusContainer}>
        <Text style={styles.label}>Status</Text>
        <TaskStatus status={displayValues.status} />
      </View>
    </View>
  );
}

export default TaskDetailsView;

const styles = StyleSheet.create({
  form: {
    // marginTop: 64,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    // marginVertical: 24,
    textAlign: "center",
  },
  statusContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  errorText: {
    textAlign: "center",
    color: GlobalStyles.colors.error500,
    margin: 8,
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
