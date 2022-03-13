import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Detail from './screens/Detail';
import List from './screens/List';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Detail/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
