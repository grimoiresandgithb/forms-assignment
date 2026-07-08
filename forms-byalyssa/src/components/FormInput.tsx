import { View, TextInput, Text, StyleSheet, TextInputProps } from "react-native";
import { useState } from "react";

export interface FormInputProps extends TextInputProps {
    label: string;
    error?: string | false;
}

export default function FormInput({ label, error, ...props} : FormInputProps) {
    const [focused, setFocused] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>

            <TextInput 
                style={[styles.input, focused && styles.inputFocused, error && styles.inputError,]}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                {...props}
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 18,
    },
    label: {
        fontWeight: '600',
        marginBottom: 6,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    inputFocused: {
        borderColor: '#4A90E2',
    },
    inputError: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        marginTop: 4,
        fontSize: 13,
    },
});