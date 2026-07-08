import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router"; 
import { ReactNode } from "react";


export interface HomeScreenProps {
  children?: ReactNode;
}

export default function HomeScreen({}: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Employee Home Page</Text>

      <Link href="/employee" style={styles.link}>
        Go to Employee Form
      </Link>

      <Link href="/signin" style={styles.link}>
        Sign In
      </Link>

      <Link href="/signup" style={styles.link}>
        Sign Up
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 40,
    textAlign: 'center',
  },
  link: {
    fontSize: 18,
    marginVertical: 12,
    color: "#4A90E2",
    fontWeight: "600",
  },
});
