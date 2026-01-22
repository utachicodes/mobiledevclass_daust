import React from 'react';
import { Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native';

type Variant = 'default' | 'primary' | 'success' | 'warning' | 'danger';

interface TagProps {
    text: string;
    variant?: Variant;
    onPress?: () => void;
}

const colors: Record<Variant, { bg: string; text: string }> = {
    default: { bg: '#e0e0e0', text: '#666' },
    primary: { bg: '#007AFF', text: '#fff' },
    success: { bg: '#34C759', text: '#fff' },
    warning: { bg: '#FF9500', text: '#fff' },
    danger: { bg: '#FF3B30', text: '#fff' },
};

export default function Tag({ text, variant = 'default', onPress }: TagProps) {
    const { bg, text: textColor } = colors[variant];

    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: bg }]}
            onPress={onPress}
            disabled={!onPress}
        >
            <Text style={[styles.text, { color: textColor }]}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 16,
        marginRight: 8,
        marginBottom: 8,
        alignSelf: 'flex-start',
    },
    text: {
        fontWeight: '600',
        fontSize: 12,
    },
});
