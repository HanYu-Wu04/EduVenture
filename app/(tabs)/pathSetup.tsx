import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Slider from '@react-native-community/slider';

export default function pathSetup() {
  const router = useRouter();
  const [slider1Value, setSlider1Value] = useState(1);
  const [slider2Value, setSlider2Value] = useState(1);
  const [selectedOption, setSelectedOption] = useState('Option1');

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

        <div style={styles.radioGroup}>
            <div style={styles.radioButton}>
                <input
                type="radio"
                id="option1"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={() => handleRadioChange("option1")}
                />
                <label htmlFor="option1" style={styles.descriptionText}>
                easy
                </label>
            </div>
            <div style={styles.radioButton}>
                <input
                type="radio"
                id="option2"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={() => handleRadioChange("option2")}
                />
                <label htmlFor="option2" style={styles.descriptionText}>
                hard
                </label>
            </div>
        </div>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.playButton}
          onPress={() => router.push('/(tabs)/pathSetup')}>
            <Text style={styles.playButtonText}>Make Path!</Text>
          </TouchableOpacity>
        </View>

      </View>

      <TouchableOpacity 
        style={styles.homeButton}
        onPress={() => router.push('/(tabs)/')}
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
    rightButtons: {
      gap: 10,
      backgroundColor: '#ffffff', 
      borderRadius: 10, 
    },
    secondaryButton: {
      backgroundColor: '#4a90e2',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
    },
    secondaryButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '500',
    },
  infoSection: {
    marginBottom: 30,
    backgroundColor: '#ffffff',
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 15,
    color: '#666',
  },
  skillsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  skillsList: {
    paddingLeft: 10,
    backgroundColor: '#ffffff',
  },
  skillItem: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  progressSection: {
    marginBottom: 20,
    backgroundColor: '#ffffff',
  },
  progressLabel: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  progressBarContainer: {
    width: '100%',
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    width: '75%',
    height: '100%',
    backgroundColor: '#4a90e2',
  },
  homeButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 10,
    backgroundColor: '#ffffff',
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
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 20,
    borderRadius: 8,
    backgroundColor: "white",
    padding: 30,
    },
    radioButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    },
    radioLabel: {
    marginLeft: 8,
    fontSize: 17,
    color: "#333",
    },
});
