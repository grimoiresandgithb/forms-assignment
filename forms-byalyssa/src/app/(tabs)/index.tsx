import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router"; 
import { ReactNode } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";


export interface HomeScreenProps {
  children?: ReactNode;
}

export default function HomeScreen({}: HomeScreenProps) {
  return (
    <SafeAreaProvider>
        <View style={styles.container}>
        <Text style={styles.title}>You're on the Employee Home Page</Text>

        <Text style={styles.welcome}>Welcome!</Text> 
        <Text style={styles.text}>This app makes it easy for your team to stay connected and keep important
                                  information up to date. Whether you're joining us for the first time or updating
                                  your employee details, everything is organized into simple, easy to use forms.</Text>
        <Text style={styles.text}>Tap through the tabs below to fill out your employee profile, sign in, or create a new account.
                                  We're glad you're here!.
        </Text>
        
        </View>
    </SafeAreaProvider>
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
  text: {
    fontSize: 14,
    textAlign: 'center',
    padding: 10,
  },
  welcome: {
    fontSize: 15,
    fontWeight: '500',
  }
});
