import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function GlobalNav() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Navigation</Text>

            <Link href='/index' style={styles.link}>Home</Link>
            <Link href='/employee' style={styles.link}>Employee Form</Link>
            <Link href='/signin' style={styles.link}>Sign In</Link>
            <Link href='/signup' style={styles.link}>Sign Up</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        paddingTop: 20,
        borderTopWidth: 1,
        borderColor: '#ddd',
    },
    title: {
        fontWeight: '700',
        fontSize: 16,
        marginBottom: 10,
    },
    link: {
        fontSize: 16,
        marginVertical: 6,
        color: '#4A90E2',
        fontWeight: '600',
    },
});