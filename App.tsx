import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import AllTasks from "./screens/AllTasks";
import ManageTask from "./screens/ManageTask";
import { GlobalStyles } from "./constants/styles";
import IconButton from "./components/UI/IconButton";
import { StackParamList } from "./@types/navigation";
import TasksContextProvider from "./store/tasks-context";

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <TasksContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={({ navigation }) => ({
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: "white",
            })}
          >
            <Stack.Screen
              name="AllTasks"
              component={AllTasks}
              options={({ navigation }) => ({
                title: "All Tasks",
                headerRight: ({ tintColor }) => (
                  <IconButton
                    name="add"
                    size={24}
                    color={tintColor}
                    onPress={() => {
                      navigation.navigate("ManageTask");
                    }}
                  />
                ),
              })}
            />
            <Stack.Screen
              name="ManageTask"
              component={ManageTask}
              options={{
                presentation: "modal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </TasksContextProvider>
    </>
  );
}
