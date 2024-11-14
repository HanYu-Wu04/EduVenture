import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

export default function WonderWomanDivisionChallengeScreen() {
  const WonderWomanDivisionChallengeScreen = require("@/assets/images/WonderWoman/WonderWomanDivisionChallengeScreen.png");
  const [answer, setAnswer] = useState("");
  const [stage, setStage] = useState(0);
  const router = useRouter();

  const handleContinue = () => {
    if (stage < 3) {
      setStage(stage + 1);
    } else {
      setStage(0);
      router.push(
        "/(tabs)/WonderWoman/WonderWomanMultiplicationChallengeScreen"
      );
    }
  };

  const handleSubmit = () => {
    if (answer.trim() === "6") {
      setStage(0);
      setAnswer("");
      alert("Correct! You can make 6 stops.");
      router.push(
        "/(tabs)/WonderWoman/WonderWomanMultiplicationChallengeScreen"
      );
    } else {
      alert("Try again! Remember, you eat 4 berries per stop.");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackground
          source={WonderWomanDivisionChallengeScreen}
          resizeMode="cover"
          style={styles.background}
        >
          <TouchableOpacity style={styles.homeButton} onPress={() => router.push('/(tabs)/home')}>
            <Text style={styles.homeButtonText}>Home</Text>
          </TouchableOpacity>
          <View style={styles.contentContainer}>
            <LinearGradient
              colors={["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.6)"]}
              style={styles.storyContainer}
            >
              {stage === 0 && (
                <Text style={styles.storyText}>
                  After crossing the lake, Wonder Woman reaches the base of a tall
                  mountain. She’s determined to find the crystal at the top.
                </Text>
              )}
              {stage === 1 && (
                <Text style={styles.storyText}>
                  Halfway up, she sees a group of forest animals who offer her
                  berries for strength.
                </Text>
              )}
              {stage === 2 && (
                <Text style={styles.storyText}>
                  “These berries are perfect for the journey!” she exclaims.
                </Text>
              )}
              {stage === 3 && (
                <>
                  <Text style={styles.questionText}>
                    The animals give you 24 berries to eat.
                  </Text>
                  <Text style={styles.questionText}>
                    If you want to save some, and only eat 4 berries at each rest
                    stop, how many stops can you make?
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your answer"
                    placeholderTextColor="#999"
                    keyboardType="numeric"
                    value={answer}
                    onChangeText={setAnswer}
                  />
                  <TouchableOpacity
                    style={styles.submitButton}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.submitButtonText}>Submit Answer</Text>
                  </TouchableOpacity>
                </>
              )}
              {stage < 3 && (
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
    backgroundColor: "#ffffff",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  storyContainer: {
    position: "absolute",
    bottom: 50,
    left: 20,
    right: 20,
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  storyText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  questionText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginBottom: 15,
    textAlign: "center",
  },
  tapText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 18,
    color: "#333",
    backgroundColor: "#fff",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  submitButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
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
