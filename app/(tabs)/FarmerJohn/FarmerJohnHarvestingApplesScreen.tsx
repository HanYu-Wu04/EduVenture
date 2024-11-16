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

export default function FarmerJohnHarvestingApplesScreen() {
  const harvestImage = require("@/assets/images/FarmerJohn/FarmerJohnHarvestingApplesScreen.png"); // Replace with the correct image path
  const [answer, setAnswer] = useState("");
  const [stage, setStage] = useState(0); // Track stage of the story
  const router = useRouter();

  const handleContinue = () => {
    if (stage < 2) {
      setStage(stage + 1); // Progress to the next part of the story
    } else {
      alert("Thank you for helping Farmer John!"); // End of the story
    }
  };

  const handleSubmit = () => {
    if (answer.trim() === "15") {
      // Correct answer for 7 + 5
      setStage(0);
      alert("You're a math whiz! That’s exactly how many apples we have.");
      router.push("/(tabs)/FarmerJohn/FarmerJohnEndScreen");
    } else {
      alert("Try again! Add the apples carefully to find the correct answer.");
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
          source={harvestImage}
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
                  As the sun begins to set, Farmer John looks around his orchard
                  and decides it’s time to gather the remaining apples for the
                  day. He heads to the last apple tree and picks the ripe apples
                  from its branches.
                </Text>
              )}
              {stage === 1 && (
                <Text style={styles.storyText}>
                  “This has been such a great day,” he says, looking at the
                  apples in his basket. “Let’s see how many we have altogether.”
                </Text>
              )}
              {stage === 2 && (
                <>
                  <Text style={styles.questionText}>
                    Farmer John collects 7 apples from the last tree. If he had
                    8 in his basket already, how many does he have in total?
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
