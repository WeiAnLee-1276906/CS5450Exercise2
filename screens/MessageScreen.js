import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function MessageScreen({ route }) {
  const { category } = route.params;

  const defaultMessages = {
    'Lakehead U': ['Assignment due Friday', 'CS5450 lab today'],
    'Golf Links Apt': ['Laundry machine is broken', 'Package delivered today'],
    'Family': ['Call Mom this weekend', 'Dad’s birthday next week'],
    'Work': ['Team meeting at 3 PM', 'Submit report to manager'],
  };

  const [messages, setMessages] = useState(defaultMessages[category] || []);
  const [input, setInput] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleSend = () => {
    if (input.trim() === '') return;
    const updated = [...messages];
    if (editingIndex !== null) {
      updated[editingIndex] = input;
      setEditingIndex(null);
    } else {
      updated.push(input);
    }
    setMessages(updated);
    setInput('');
  };

  const handleEdit = (index) => {
    setInput(messages[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updated = [...messages];
    updated.splice(index, 1);
    setMessages(updated);
  };

  const handleMessagePress = (index) => {
    Alert.alert('Modify Message', messages[index], [
      { text: 'EDIT', onPress: () => handleEdit(index) },
      { text: 'DELETE', onPress: () => handleDelete(index), style: 'destructive' },
      { text: 'CANCEL', style: 'cancel' },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category} Messages</Text>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.messageCard,
              editingIndex === index && styles.activeCard,
            ]}
            onPress={() => handleMessagePress(index)}
          >
            <Text style={styles.messageText}>{item}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
      <View style={styles.inputRow}>
        <TextInput
          placeholder="Enter a message"
          value={input}
          onChangeText={setInput}
          style={styles.input}
          placeholderTextColor="#999"
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Text style={styles.sendText}>{editingIndex !== null ? 'Save' : 'Send'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 16,
    alignSelf: 'center',
    color: '#333',
  },
  messageCard: {
    backgroundColor: '#f4f4f4',
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  activeCard: {
    backgroundColor: '#e0dbff',
    borderWidth: 1,
    borderColor: '#a08df2',
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
    paddingTop: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    backgroundColor: '#fff',
  },
  sendButton: {
    backgroundColor: '#8000ff',
    paddingHorizontal: 18,
    paddingVertical: 11,
    borderRadius: 12,
    marginLeft: 10,
  },
  sendText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
