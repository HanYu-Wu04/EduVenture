import { StyleSheet, ImageBackground, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function FarmerJohnCountingApplesScreen() {
  const treeImage = require('@/assets/images/FarmerJohn/FarmerJohnPickingApplesScreen.png');
  const introImage = require('@/assets/images/FarmerJohn/FarmerJohnCountingApplesScreen.png');
  const [answer, setAnswer] = useState('');
  const [stage, setStage] = useState(0); 
  const router = useRouter();

  const handleContinue = () => {
    if (stage < 3) {
      setStage(stage + 1); 
    } else {
      setStage(0);
      router.push('/(tabs)/FarmerJohn/FarmerJohnPickingApplesScreen'); 
    }
  };

  const handleSubmit = () => {
    if (answer.trim() === '6') { 
      setStage(0);
      setAnswer("");
      alert('Correct! Great counting!');
      router.push('/(tabs)/FarmerJohn/FarmerJohnPickingApplesScreen'); 
    } else {
      alert('Try again! Count the apples carefully.');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackground 
          source={stage === 0 ? introImage : treeImage} // Use introImage if stage is 0
          resizeMode="cover" 
          style={styles.background}
        >
          
          {/* Home Button */}
          <TouchableOpacity style={styles.homeButton} onPress={() => router.push('/(tabs)/home')}>
            <Text style={styles.homeButtonText}>Home</Text>
          </TouchableOpacity>

          <View style={styles.contentContainer}>
            <LinearGradient colors={['rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 0.6)']} style={styles.storyContainer}>
              {stage === 0 && <Text style={styles.storyText}>It’s a bright, sunny morning on Farmer John’s orchard. The air is fresh, the birds are singing, and Farmer John is excited to get started on his tasks. He has a big smile on his face because today he’s getting some extra help — from you!</Text>}
              {stage === 1 && <Text style={styles.storyText}>Farmer John walks up to the biggest apple tree in his orchard. Its branches are heavy with bright, red apples, each one round and shiny under the sunlight. He takes off his hat and scratches his head.</Text>}
              {stage === 2 && <Text style={styles.storyText}>“Look at all these apples!” he says, chuckling. “I wonder how many are hanging on the tree. I could use some help counting them. Would you like to help me?”</Text>}
              {stage === 3 && (
                <>
                  <Text style={styles.questionText}>How many apples are there on the tree?</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your answer"
                    placeholderTextColor="#999"
                    keyboardType="numeric"
                    value={answer}
                    onChangeText={setAnswer}
                    onSubmitEditing={() => Keyboard.dismiss()}
                  />
                  <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}>Submit Answer</Text>
                  </TouchableOpacity>
                </>
              )}
              {stage < 3 && (
                <TouchableOpacity onPress={handleContinue}>
                  <Text style={styles.tapText}>(Tap here to continue)</Text>
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
