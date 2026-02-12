import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../../src/exercises/common/ThemeContext';
import ThemeSwitcher from '../../src/exercises/lab3/ThemeSwitcher';
import { useRouter } from 'expo-router';

export default function SettingsModal() {
    const { colors } = useTheme();
    const router = useRouter();

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={styles.header}>
                <Text style={[styles.title, { color: colors.text }]}>Settings</Text>
            </View>

            <View style={styles.section}>
                <Text style={[styles.sectionTitle, { color: colors.primary }]}>Appearance</Text>
                <ThemeSwitcher />
            </View>

            <TouchableOpacity
                style={[styles.closeBtn, { backgroundColor: colors.primary }]}
                onPress={() => router.back()}
            >
                <Text style={styles.closeBtnText}>Close</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        marginBottom: 30,
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    section: {
        marginBottom: 40,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 15,
    },
    closeBtn: {
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 'auto',
    },
    closeBtnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
