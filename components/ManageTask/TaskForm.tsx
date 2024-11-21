import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { ITask, ITaskData } from "../../@types/task";
import { GlobalStyles } from "../../constants/styles";
import Input from "./Input";
import Button from "../UI/Button";
import TaskStatus from "../TaskDetails/TaskStatus";

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
  type ValidKey = "title" | "description" | "status";
  type ValidData<T> = {
    [key in ValidKey]: {
      value: T;
      isValid: boolean;
    };
  };

  const [inputs, setInputs] = useState<ValidData<string>>({
    title: {
      value: defaultValues ? defaultValues.title : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
    status: {
      value: defaultValues ? defaultValues.status : "todo",
      isValid: true,
    },
  });

  function inputChangedHandler(inputIdentifier: string, enteredValue: string) {
    setInputs((currentInputs) => {
      return {
        ...currentInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function submitHandler() {
    const taskData: ITaskData = {
      title: inputs.title.value,
      description: inputs.description.value,
      status: inputs.status.value,
    };

    const titleIsValid = taskData.title.trim().length > 0;
    const descriptionIsValid = taskData.description.trim().length >= 0;
    const statusIsValid =
      taskData.status.trim().length > 0 &&
      ["todo", "in-progress", "done"].includes(taskData.status.trim());

    if (!titleIsValid || !descriptionIsValid || !statusIsValid) {
      setInputs((currentInputs) => {
        return {
          title: { value: currentInputs.title.value, isValid: titleIsValid },
          description: {
            value: currentInputs.description.value,
            isValid: descriptionIsValid,
          },
          status: { value: currentInputs.status.value, isValid: statusIsValid },
        };
      });
      return;
    }

    onSubmit(taskData);
  }

  const formIsInvalid =
    !inputs.title.isValid ||
    !inputs.description.isValid ||
    !inputs.status.isValid;

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Task</Text>
      <Input
        label="Title"
        invalid={!inputs.title.isValid}
        textInputConfig={{
          maxLength: 100,
          onChangeText: inputChangedHandler.bind(this, "title"),
          value: inputs.title.value,
        }}
      />
      <Input
        label="Description"
        invalid={!inputs.description.isValid}
        textInputConfig={{
          multiline: true,
          maxLength: 255,
          onChangeText: inputChangedHandler.bind(this, "description"),
          value: inputs.description.value,
          // autoCapitalize: 'none',
          // autoCorrect: true,
        }}
      />
      <View style={styles.statusContainer}>
        <Text style={styles.label}>Status</Text>
        <TaskStatus
          status={inputs.status.value}
          onChange={inputChangedHandler.bind(this, "status")}
        />
      </View>
      {formIsInvalid && (
        <Text style={styles.errorText}>
          Invalid input values - please check your entered!
        </Text>
      )}
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
