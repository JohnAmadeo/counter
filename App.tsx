import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{count}</Text>
      <Pressable onPress={() => setCount(count + 1)}>
        <View style={styles.button} />
      </Pressable>
      <StatusBar style="auto" />
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
  countText: {
    fontSize: 80,
    fontWeight: 'bold',
  },
  button: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'red',
  },
});
