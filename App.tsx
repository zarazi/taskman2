import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import AllTasks from "./screens/AllTasks";
import ManageTask from "./screens/ManageTask";
import { GlobalStyles } from "./constants/styles";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="AllTasks"
            component={AllTasks}
            options={{
              title: "All Tasks",
            }}
          />
          <Stack.Screen name="ManageTask" component={ManageTask} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
