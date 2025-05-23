import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const categories = ['Lakehead U', 'Golf Links Apt', 'Family', 'Work'];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          style={styles.button}
          onPress={() => navigation.navigate('Message', { category })}
        >
          <Text style={styles.buttonText}>{category}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#9370DB',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
