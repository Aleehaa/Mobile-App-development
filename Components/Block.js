import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function Block({ name, specialty, rating }) {
  return (
    <View style={styles.block}>
      <FontAwesome name="user-md" size={60} color="#000" />
      <Text style={styles.blockText}>{name}</Text>
      <Text style={styles.subheadingText}>{specialty}</Text>
      <View style={styles.ovalContainer}>
        <FontAwesome name="star" size={20} color="#FFD700" />
        <Text style={styles.ratingText}>{rating}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    width: '48%',
    height: 200,
    backgroundColor: '#FFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#DDD',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  blockText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  subheadingText: {
    marginTop: 3,
    fontSize: 14,
    color: '#808080',
  },
  ovalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: '#800080',
    borderRadius: 50,
  },
  ratingText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 16,
  },
});

export default Block;