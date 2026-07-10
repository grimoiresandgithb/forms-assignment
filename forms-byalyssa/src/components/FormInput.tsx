import { View, TextInput, Text, StyleSheet, TextInputProps, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export interface FormInputProps extends TextInputProps {
    label: string;
    error?: string | false;
}

export default function FormInput({ label, error, secureTextEntry, ...props} : FormInputProps) {
    const [focused, setFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = secureTextEntry === true;

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>

            <View style={styles.inputWrapper}>
            <TextInput 
                style={[styles.input, focused && styles.inputFocused, error && styles.inputError,]}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                {...props}
            />

            {isPassword && (
                <TouchableOpacity 
                    onPress={() => setShowPassword(!showPassword)}
                    style={styles.iconWrapper}
                >
                    <Ionicons
                        name={showPassword ? 'eye-off' : 'eye'}
                        size={22}
                        color='#4a4a4a'
                    />
                </TouchableOpacity>
            )}
            {error && <Text style={styles.errorText}>{error}</Text>}
            </View>
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
    inputWrapper: {
        position: 'relative',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    inputFocused: {
        borderColor: '#4a90e2',
    },
    inputError: {
        borderColor: '#D90429',
    },
    iconWrapper: {
        position: 'absolute',
        right: 10,
        padding: 4,
    },
    errorText: {
        color: '#D90429',
        marginTop: 4,
        fontSize: 13,
    },
});