import { StyleSheet, ImageBackground, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function FarmerJohnPlantingSeedsScreen() {
  const seedImage = require('@/assets/images/FarmerJohn/FarmerJohnPlantingSeedsScreen.png'); // Replace with the correct image path
  const [answer, setAnswer] = useState('');
  const [stage, setStage] = useState(0); // Track stage of the story
  const router = useRouter();

  const handleContinue = () => {
    if (stage < 2) {
      setStage(stage + 1); // Progress to the next part of the story
    } else {
      router.push('/(tabs)/FarmerJohn/FarmerJohnHarvestingApplesScreen'); // Navigate to the next screen when finished
    }
  };

  const handleSubmit = () => {
    if (answer.trim() === '5') { // Correct answer for 8 - 3
      setStage(0);
      setAnswer("");
      alert("Perfect! With these seeds, we’ll have plenty of new trees next year.");
      router.push('/(tabs)/FarmerJohn/FarmerJohnHarvestingApplesScreen'); // Proceed to the next screen
    } else {
      alert('Try again! Subtract carefully to find the correct answer.');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
      <TouchableOpacity style={styles.homeButton} onPress={() => router.push('/(tabs)/home')}>
            <Text style={styles.homeButtonText}>Home</Text>
          </TouchableOpacity>
        <ImageBackground
          source={seedImage}
          resizeMode="cover"
          style={styles.background}
        >
          <View style={styles.contentContainer}>
            <LinearGradient colors={['rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 0.6)']} style={styles.storyContainer}>
              {stage === 0 && <Text style={styles.storyText}>Farmer John decides it’s time to plant some apple seeds to grow new trees for next season. He opens his hand, showing a few tiny seeds lying in his palm.</Text>}
              {stage === 1 && <Text style={styles.storyText}>“If I plant these seeds now, we’ll have even more apples next year,” he says. “But I want to save a few for another day. Can you help me figure out how many I should plant today?”</Text>}
              {stage === 2 && (
                <>
                  <Text style={styles.questionText}>Farmer John has 8 apple seeds. He wants to keep 3 for next year. How many seeds should he plant today?</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your answer"
                    placeholderTextColor="#999"
                    keyboardType="numeric"
                    value={answer}
                    onChangeText={setAnswer}
                  />
                  <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}>Submit Answer</Text>
                  </TouchableOpacity>
                </>
              )}
              {stage < 2 && (
                <TouchableOpacity onPress={handleContinue}>
                  <Text style={styles.tapText}>(Tap anywhere to continue)</Text>
                </TouchableOpacity>
              )}
            </LinearGradient>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  storyContainer: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 20,
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  storyText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  questionText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  tapText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 18,
    color: '#333',
    backgroundColor: '#fff',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  homeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: '#007AFF',
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 15,
    zIndex: 10,
    alignItems: 'center',
  },
  homeButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
