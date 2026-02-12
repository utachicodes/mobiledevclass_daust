import { Slot } from 'expo-router';
import { AuthProvider } from '../src/exercises/lab5/contexts/AuthContext';
import { ThemeProvider } from '../src/exercises/common/ThemeContext';

export default function RootLayout() {
    return (
        <AuthProvider>
            <ThemeProvider>
                <Slot />
            </ThemeProvider>
        </AuthProvider>
    );
}
