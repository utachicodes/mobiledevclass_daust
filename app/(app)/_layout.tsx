import { Redirect, Stack } from 'expo-router';
import { useAuth } from '../../src/exercises/lab5/contexts/AuthContext';
import { ActivityIndicator, View } from 'react-native';
import { useTheme } from '../../src/exercises/common/ThemeContext';

export default function AppLayout() {
    const { isAuthenticated, isLoading } = useAuth();
    const { colors } = useTheme();

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>
                <ActivityIndicator size="large" color={colors.primary} />
            </View>
        );
    }

    if (!isAuthenticated) {
        return <Redirect href="/login" />;
    }

    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.card,
                },
                headerTintColor: colors.text,
            }}
        >
            {/* The main tab interface */}
            <Stack.Screen name="tabs" options={{ headerShown: false }} />

            {/* Dynamic route detail */}
            <Stack.Screen name="labs/lab3/[city]" options={{ title: 'City Details' }} />

            {/* Modal Settings */}
            <Stack.Screen
                name="settings"
                options={{
                    presentation: 'modal',
                    title: 'Settings',
                    headerShown: true
                }}
            />
        </Stack>
    );
}
