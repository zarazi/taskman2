import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

import { ITask, ITaskData } from "../../@types/task";
import Input from "./Input";
import Button from "../UI/Button";

interface TaskFormProps {
  submitButtonLabel: string;
  onCancel: () => void;
  onSubmit: (taskData: ITaskData) => void;
  defaultValues?: ITask;
}

function TaskForm(
  this: any,
  { submitButtonLabel, onCancel, onSubmit, defaultValues }: TaskFormProps
) {
  const [inputValues, setInputValues] = useState<ITaskData>({
    title: defaultValues ? defaultValues.title : "",
    description: defaultValues ? defaultValues.description : "",
    status: defaultValues ? defaultValues.status : "",
  });

  function inputChangedHandler(inputIdentifier: string, enteredValue: string) {
    setInputValues((currentInputValues) => {
      return {
        ...currentInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  function submitHandler() {
    const taskData: ITaskData = {
      title: inputValues.title,
      description: inputValues.description,
      status: inputValues.status,
    };

    const titleIsValid = taskData.title.trim().length > 0;
    // const descriptionIsValid = taskData.description.trim().length > 0;
    const statusIsValid =
      taskData.status.trim().length > 0 &&
      ["todo", "in-progress", "done"].includes(taskData.status.trim());

    if (!titleIsValid || !statusIsValid) {
      Alert.alert(
        "Invalid input",
        "Please check and correct your input values"
      );
      return;
    }

    onSubmit(taskData);
  }

  // useEffect(() => {
  //   console.log(inputValues);
  // }, [inputValues]);

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Task</Text>
      <Input
        label="Title"
        textInputConfig={{
          maxLength: 100,
          onChangeText: inputChangedHandler.bind(this, "title"),
          value: inputValues.title,
        }}
      />
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          maxLength: 255,
          onChangeText: inputChangedHandler.bind(this, "description"),
          value: inputValues.description,
          // autoCapitalize: 'none',
          // autoCorrect: true,
        }}
      />
      <Input
        label="Status"
        textInputConfig={{
          maxLength: 12,
          onChangeText: inputChangedHandler.bind(this, "status"),
          value: inputValues.status,
          autoCapitalize: "none",
        }}
      />
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

export default TaskForm;

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
