import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MC24 Laghouat</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create Match</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Join Match</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e783c',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 40
  },
  button: {
    backgroundColor: '#111',
    width: 230,
    paddingVertical: 16,
    borderRadius: 14,
    marginVertical: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600'
  }
});
