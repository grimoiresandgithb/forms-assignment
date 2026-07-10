import { TouchableOpacity, Text, StyleSheet } from "react-native";

export interface SubmitButtonProps {
    title: string;
    disabled?: boolean;
    onPress: () => void;
}

export default function SubmitButton ({ title, disabled = false, onPress} : SubmitButtonProps) {
    return (
        <TouchableOpacity
            style={[styles.button, disabled && styles.disabled]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#1357b2',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    disabled: {
        backgroundColor: '#cbdce4',
    },
    text: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
    },
})