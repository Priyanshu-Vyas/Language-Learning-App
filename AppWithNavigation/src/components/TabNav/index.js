import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FirstScreen from "../../screens/FirstScreen";
import SecondScreen from "../../screens/SecondScreen";

const Tab = createBottomTabNavigator();

export default function TabNav() {
  const screenOptions = {
    tabBarStyle: {
      backgroundColor: "#000",
      height: 40,
      borderRadius: 20,
      margin: 5,
    },
    tabBarItemStyle: {
      backgroundColor: "#fff",
      margin: 5,
      borderRadius: 15,
    },
  };

  return (
    <Tab.Navigator
      {...{ screenOptions }}

      tabBarOptions={{
        activeTintColor: "#000",
        inactiveTintColor: "#555",
        labelStyle: { fontSize: 20 },
      }}
    >
      <Tab.Screen
        name="user1"
        component={FirstScreen}
        options={{ headerShown: false, tabBarBadge: 3, title:"USER 1" }}
      />
      <Tab.Screen
        name="user2"
        component={SecondScreen}
        options={{ headerShown: false, tabBarBadge: 1, title:"USER 2" }}
      />
    </Tab.Navigator>
  );
}