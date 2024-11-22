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
      {/* <Text style={styles.title}>{displayValues.title}</Text> */}
      <Input
        label="Title"
        labelStyle={styles.labelReadonly}
        invalid={false}
        textInputConfig={{
          maxLength: 100,
          value: displayValues.title,
          readOnly: true,
        }}
        textInputStyle={styles.textInputReadonly}
      />
      <Input
        label="Description"
        labelStyle={styles.labelReadonly}
        invalid={false}
        textInputConfig={{
          multiline: true,
          maxLength: 255,
          value: displayValues.description,
          readOnly: true,
        }}
        textInputStyle={styles.textInputReadonly}
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
  labelReadonly: {
    color: GlobalStyles.colors.primary200,
    marginBottom: 0,
  },
  textInputReadonly: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderRadius: 0,
    borderColor: "transparent",
    color: "white",
    paddingLeft: 0,
    paddingTop: 0,
  },
  statusContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary200,
    paddingBottom: 0,
    marginBottom: 6,
    borderWidth: 1,
    borderRadius: 0,
    borderColor: "transparent",
  },
});
