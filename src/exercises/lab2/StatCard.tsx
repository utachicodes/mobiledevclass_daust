import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StatCardProps {
    value: string;
    label: string;
    icon?: string;
    change?: number;
}

export default function StatCard({ value, label, icon, change }: StatCardProps) {
    const isPositive = change && change > 0;
    const changeColor = isPositive ? '#34C759' : '#FF3B30';

    return (
        <View style={styles.container}>
            {icon && <Text style={styles.icon}>{icon}</Text>}
            <Text style={styles.value}>{value}</Text>
            <Text style={styles.label}>{label}</Text>
            {change !== undefined && (
                <Text style={[styles.change, { color: changeColor }]}>
                    {isPositive ? '↑' : '↓'} {Math.abs(change)}%
                </Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 12,
        alignItems: 'flex-start',
        width: 140,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
        margin: 8,
    },
    icon: {
        fontSize: 24,
        marginBottom: 8,
    },
    value: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    label: {
        fontSize: 14,
        color: '#888',
        marginBottom: 8,
    },
    change: {
        fontSize: 12,
        fontWeight: '600',
    },
});
