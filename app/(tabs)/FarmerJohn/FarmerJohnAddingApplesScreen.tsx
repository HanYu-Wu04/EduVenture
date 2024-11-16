import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

export default function FarmerJohnAddingApplesScreen() {
  const basketImage = require("@/assets/images/FarmerJohn/FarmerJohnAddingApplesScreen.png"); // Replace with the path to your basket scene image
  const [answer, setAnswer] = useState("");
  const [stage, setStage] = useState(0); // Track stage of the story
  const router = useRouter();

  const handleContinue = () => {
    if (stage < 2) {
      setStage(stage + 1); // Progress to the next part of the story
    } else {
      router.push("/(tabs)/FarmerJohn/FarmerJohnFeedingAnimalsScreen"); // Navigate to the next screen when finished
    }
  };

  const handleSubmit = () => {
    if (answer.trim() === "10") {
      // Correct answer for 4 + 2
      setStage(0);
      setAnswer("");
      alert("Perfect! Now we know exactly how many apples are in the basket.");
      router.push("/(tabs)/FarmerJohn/FarmerJohnFeedingAnimalsScreen"); // Proceed to the next screen
    } else {
      alert("Try again! Remember to add the apples carefully.");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => router.push("/(tabs)/home")}
        >
          <Text style={styles.homeButtonText}>Home</Text>
        </TouchableOpacity>
        <ImageBackground
          source={basketImage}
          resizeMode="cover"
          style={styles.background}
        >
          <View style={styles.contentContainer}>
            <LinearGradient
              colors={["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.6)"]}
              style={styles.storyContainer}
            >
              {stage === 0 && (
                <Text style={styles.storyText}>
                  Farmer John finds a few more apples lying on the ground, fresh
                  and shiny. He picks them up and adds them to his basket.
                </Text>
              )}
              {stage === 1 && (
                <Text style={styles.storyText}>
                  “The more, the merrier!” he laughs. “Now we have even more
                  apples to take to the market. Let’s make sure we know exactly
                  how many are in the basket.”
                </Text>
              )}
              {stage === 2 && (
                <>
                  <Text style={styles.questionText}>
                    Farmer John already has 6 apples in his basket. He finds 4
                    more on the ground and puts them in. How many apples are in
                    his basket now?
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
              {stage < 2 && (
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
    position: "absolute",
    top: 40,
    right: 20,
    backgroundColor: "#007AFF",
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 15,
    zIndex: 10,
    alignItems: "center",
  },
  homeButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});
