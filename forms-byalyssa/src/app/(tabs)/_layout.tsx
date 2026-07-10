import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#4a90e2",
        tabBarInactiveTintColor: "#999",
        tabBarStyle: {
          backgroundColor: "#edede9",
          borderTopWidth: 1,
          borderColor: "#ddd",
          height: 85,
          paddingTop: 5,
        },
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case "index":
              return (
                <Ionicons
                  name="home-outline"
                  size={size}
                  color={color}
                />
              );

            case "employee":
              return (
                <Ionicons
                  name="briefcase-outline"
                  size={size}
                  color={color}
                />
              );

            case "signin":
              return (
                <Ionicons
                  name="log-in-outline"
                  size={size}
                  color={color}
                />
              );

            case "signup":
              return (
                <Ionicons
                  name="person-add-outline"
                  size={size}
                  color={color}
                />
              );

            default:
              return null;
          }
        },
      })}
    >

      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />

      <Tabs.Screen
        name="employee"
        options={{
          title: "Employee",
        }}
      />

      <Tabs.Screen
        name="signin"
        options={{
          title: "Sign In",
        }}
      />

      <Tabs.Screen
        name="signup"
        options={{
          title: "Sign Up",
        }}
      />
    </Tabs>
  );
}
