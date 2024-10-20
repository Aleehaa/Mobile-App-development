import React from 'react native';
import { View, Text, StyleSheet } from 'react-native';
import Search from './Components/Search';  
import Block from './Components/Blocklock';

export default function App() {
  return (
    <View style={styles.container}>
      <Search />
      <Text style={styles.infoText}>Let's find your doctor</Text>
      <View style={styles.grid}> 
        <Block name="Dr. John Smith" specialty="Dermatologist" rating="4.9" />
        <Block name="Dr. Anna Dinn" specialty="Psychologist" rating="4.9" />
        <Block name="Dr. Angela Rayez" specialty="Therapist" rating="4.8" />
        <Block name="Dr. Chris Bronte" specialty="Dentist" rating="5.0" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA',
    padding: 20,
  },
  infoText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10, 
  },
});