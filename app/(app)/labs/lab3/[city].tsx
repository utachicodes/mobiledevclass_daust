import { useLocalSearchParams, Stack } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../../../src/exercises/common/ThemeContext';
import WeatherCard from '../../../../src/exercises/lab3/WeatherCard';

export default function CityWeather() {
    const { city } = useLocalSearchParams();
    const { colors } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Stack.Screen options={{ title: `Weather in ${city}` }} />
            <Text style={[styles.title, { color: colors.text }]}>Detailed View for {city}</Text>
            <WeatherCard />
            <View style={styles.info}>
                <Text style={{ color: colors.secondary }}>
                    This is a dynamic route powered by Expo Router.
                    The city name "{city}" was extracted from the URL.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    info: {
        marginTop: 30,
        padding: 15,
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0,0.05)',
    }
});
