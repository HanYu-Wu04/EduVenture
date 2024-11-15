import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Slider from '@react-native-community/slider';

export default function pathSetup() {
  const router = useRouter();
  const [slider1Value, setSlider1Value] = useState(1);
  const [slider2Value, setSlider2Value] = useState(1);
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleRadioChange = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Learning Path</Text>
      
      <View style={styles.imagePlaceholder}>
        {/* Replace this with an actual image component later */}
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.descriptionTitle}>Your path:</Text>
        <Text style={styles.descriptionText}>Selected path here</Text>
        
        <Text style={styles.descriptionTitle}>Schedule</Text>
        <Text style={styles.label}>between {slider1Value} week(s)</Text>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={20}
          step={1}
          value={slider1Value}
          onValueChange={(value) => setSlider1Value(value)}
          minimumTrackTintColor="#4a90e2"
          maximumTrackTintColor="#d3d3d3"
          thumbTintColor="#4a90e2"
        />
        
        <Text style={styles.label}>and {slider2Value} week(s)</Text>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={20}
          step={1}
          value={slider2Value}
          onValueChange={(value) => setSlider2Value(value)}
          minimumTrackTintColor="#4a90e2"
          maximumTrackTintColor="#d3d3d3"
          thumbTintColor="#4a90e2"
        />

        <View style={styles.radioGroup}>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => handleRadioChange('option1')}
          >
            <FontAwesome
              name={selectedOption === 'option1' ? 'dot-circle-o' : 'circle-o'}
              size={20}
              color="#4a90e2"
            />
            <Text style={styles.radioLabel}>Easy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => handleRadioChange('option2')}
          >
            <FontAwesome
              name={selectedOption === 'option2' ? 'dot-circle-o' : 'circle-o'}
              size={20}
              color="#4a90e2"
            />
            <Text style={styles.radioLabel}>Hard</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.playButton}
            onPress={() => router.push('/(tabs)/paths')} // Navigate back to home
          >
            <Text style={styles.playButtonText}>Make Path!</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.homeButton}
        onPress={() => router.push('/(tabs)/home')}
      >
        <FontAwesome name="home" size={24} color="#4a90e2" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff', 
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    color: '#333', 
  },
  imagePlaceholder: {
    width: '100%',
    height: 200,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 30,
    backgroundColor: '#ffffff', 
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10, 
  },
  playButton: {
    backgroundColor: '#4a90e2',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  playButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  homeButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 10,
    backgroundColor: '#ffffff',
  },
  infoSection: {
    marginBottom: 30,
    backgroundColor: '#ffffff',
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 15,
    color: '#666',
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  slider: {
    width: 300,
    height: 40,
  },
  radioGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    padding: 30,
    backgroundColor: "white",
    borderRadius: 8,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioLabel: {
    marginLeft: 8,
    fontSize: 17,
    color: "#333",
  },
});
