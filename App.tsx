import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Lab2Showcase from './src/exercises/lab2/Lab2Showcase';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Lab2Showcase />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
