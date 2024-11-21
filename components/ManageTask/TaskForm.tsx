import { View, Text, StyleSheet } from "react-native";
import Input from "./Input";
import { useEffect, useState } from "react";
import { ITaskData } from "../../@types/task";
import Button from "../UI/Button";

interface TaskFormProps {
  submitButtonLabel: string;
  onCancel: () => void;
  onSubmit: (taskData: ITaskData) => void;
}

function TaskForm(
  this: any,
  { submitButtonLabel, onCancel, onSubmit }: TaskFormProps
) {
  const [inputValues, setInputValues] = useState<ITaskData>({
    title: "",
    description: "",
    status: "",
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
