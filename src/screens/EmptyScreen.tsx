import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmptyScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.messageText}>This screen is not available now</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  messageText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
  },
});

export default EmptyScreen;
