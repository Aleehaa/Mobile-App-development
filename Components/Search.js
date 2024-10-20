import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Search() {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.searchSection}>
      <Icon style={styles.searchIcon} name="search" size={20} color="#999" />
      <TextInput
        style={styles.input}
        placeholder="Search conditions, doctors..."
        placeholderTextColor="#999"
        value={search}
        onChangeText={(text) => setSearch(text)}
        
      />
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 20,
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#DDD',
    height: 40,
    width: '100%',
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  searchIcon: {
    padding: 5,
  },
  input: {
    flex: 1,
    padding: 0,
    color: '#333',
    fontSize: 16,
  },
});

export default Search;