import React from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from './ThemeContext';

const ThemeSwitcher = () => {
    const { theme, toggleTheme, colors } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <View style={styles.textContainer}>
                <Text style={[styles.title, { color: colors.text }]}>Dark Mode</Text>
                <Text style={{ color: colors.secondary }}>
                    {theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
                </Text>
            </View>
            <Switch
                value={theme === 'dark'}
                onValueChange={toggleTheme}
                trackColor={{ false: '#767577', true: colors.primary }}
                thumbColor={theme === 'dark' ? '#fff' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        borderRadius: 16,
        borderWidth: 1,
        marginTop: 20,
        marginBottom: 20,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 4,
    },
});

export default ThemeSwitcher;
