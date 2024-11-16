import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
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
      <View style={styles.header}>
        <Text style={styles.title}>Path Setup</Text>
      </View>
      
      <Image
        source={require('@/assets/images/learningpath.png')} // Replace this with the actual path to your image
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.mainContent}>
        <View style={styles.infoSection}>
          <Text style={styles.descriptionTitle}>Your path:</Text>
          <Text style={styles.descriptionText}>Selected path here</Text>
          
          <Text style={styles.descriptionTitle}>Schedule:</Text>
          <Text style={styles.label}>between {slider1Value} week(s)</Text>
          <Slider
            style={styles.slider}
            minimumValue={1}
            maximumValue={20}
            step={1}
            value={slider1Value}
            onValueChange={(value) => setSlider1Value(value)}
            minimumTrackTintColor="#273DBD"
            maximumTrackTintColor="#d3d3d3"
            thumbTintColor="#273DBD"
          />
          
          <Text style={styles.label}>and {slider2Value} week(s)</Text>
          <Slider
            style={styles.slider}
            minimumValue={1}
            maximumValue={20}
            step={1}
            value={slider2Value}
            onValueChange={(value) => setSlider2Value(value)}
            minimumTrackTintColor="#273DBD"
            maximumTrackTintColor="#d3d3d3"
            thumbTintColor="#273DBD"
          />

          <View style={styles.radioGroup}>
            <TouchableOpacity
              style={styles.radioButton}
              onPress={() => handleRadioChange('option1')}
            >
              <FontAwesome
                name={selectedOption === 'option1' ? 'dot-circle-o' : 'circle-o'}
                size={20}
                color="#273DBD"
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
                color="#273DBD"
              />
              <Text style={styles.radioLabel}>Hard</Text>
            </TouchableOpacity>
          </View>

          
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.playButton}
              onPress={() => router.push('/(tabs)/paths')} // Navigate back to home
            >
              <Text style={styles.buttonText}>Make Path!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity 
        style={styles.homeButton}
        onPress={() => router.push('/(tabs)/home')}
      >
        <FontAwesome name="home" size={24} color="#273DBD" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#85CAD5",
  },
  header: {
    paddingTop: 10,
    paddingHorizontal: 20,
    backgroundColor: "#85CAD5",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  galindoText: {
    fontFamily: 'Galindo_400Regular',
    fontSize: 24,
    color: '#333',
  },
  profileContainer: {
    alignItems: "flex-start",
    backgroundColor: "#85CAD5",
    // alignItems: "center",
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#85CAD5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#f41971",
    marginBottom: 30,
    textAlign: "center",
    fontFamily: 'Galindo_400Regular',
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
    backgroundColor: "#85CAD5",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10, 
  },
  playButton: {
    backgroundColor: '#273DBD',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: 'Galindo_400Regular',
  },
  homeButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 10,
    backgroundColor: "#85CAD5",
  },
  infoSection: {
    marginBottom: 30,
    backgroundColor: "#85CAD5",
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 15,
    color: "#fff",
    fontFamily: 'Galindo_400Regular',
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: "#f41971",
    fontFamily: 'Galindo_400Regular',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: "#fff",
    fontFamily: 'Galindo_400Regular',
  },
  slider: {
    width: 300,
    height: 40,
  },
  radioGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 30,
    backgroundColor: "#85CAD5",
    borderRadius: 8,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioLabel: {
    marginLeft: 8,
    fontSize: 17,
    color: "#f41971",
    fontFamily: 'Galindo_400Regular',
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 15,
    backgroundColor: "#69BB57",
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
});
