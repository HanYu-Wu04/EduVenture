import { StyleSheet, ImageBackground, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function FarmerJohnPickingApplesScreen() {
  const treeImage = require('@/assets/images/FarmerJohn/FarmerJohnAddingApplesScreen.png'); // Replace with the correct path to your apple tree image
  const [answer, setAnswer] = useState('');
  const [stage, setStage] = useState(0); // Track stage of the story
  const router = useRouter();

  const handleContinue = () => {
    if (stage < 2) {
      setStage(stage + 1); // Progress to the next part of the story
    } else {
      // Proceed to the question section
      setStage(3);
    }
  };

  const handleSubmit = () => {
    if (answer.trim() === '2') { // Assuming the initial count was 10 apples, with 4 picked
      setStage(0);
      setAnswer("")
      alert('Well done! That’s exactly how many apples are left.');
      router.push('/(tabs)/FarmerJohn/FarmerJohnAddingApplesScreen'); // Navigate to the next screen
    } else {
      alert('Try again! Count carefully to find out how many apples are left.');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
      <TouchableOpacity style={styles.homeButton} onPress={() => router.push('/(tabs)/home')}>
            <Text style={styles.homeButtonText}>Home</Text>
          </TouchableOpacity>
        <ImageBackground
          source={treeImage}
          resizeMode="cover"
          style={styles.background}
        >
          <View style={styles.contentContainer}>
            <LinearGradient colors={['rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 0.6)']} style={styles.storyContainer}>
              {stage === 0 && <Text style={styles.storyText}>Farmer John grabs a woven basket and starts reaching up to pick the apples, carefully placing each one into the basket. As he picks the apples, the tree starts to look a little emptier.</Text>}
              {stage === 1 && <Text style={styles.storyText}>“I’ve picked a few apples to take to the market,” he says, holding up the basket with a proud smile. “But now I’m wondering how many are still left on the tree. Can you help me figure that out?”</Text>}
              {stage === 2 && (
                <>
                  <Text style={styles.questionText}>If Farmer John picked 4 apples, how many apples are left on the tree?</Text>
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
