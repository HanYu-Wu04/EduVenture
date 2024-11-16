import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Platform
} from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

export default function WonderWomanEnteringForestScreen() {
  const WonderWomanEnteringForestScreen = require("@/assets/images/WonderWoman/WonderWomanEnteringForestScreen.png");
  const [answer, setAnswer] = useState("");
  const [stage, setStage] = useState(0); // Track stage of the story
  const router = useRouter();

  const handleContinue = () => {
    if (stage < 3) {
      setStage(stage + 1); // Progress to the next part of the story
    } else {
      setStage(0);
      router.push("/(tabs)/WonderWoman/WonderWomanDiscoveringCrystalScreen"); // Navigate to the next screen when finished
    }
  };

  const handleSubmit = () => {
    if (answer.trim() === "6") {
      setStage(0);
      setAnswer("");
      alert("Correct! You have claimed the crystal!");
      router.push("/(tabs)/WonderWoman/WonderWomanDiscoveringCrystalScreen"); // Proceed to the next screen
    } else {
      alert("Try again! Count the orbs carefully.");
    }
  };

  const content = (
      <View style={styles.container}>
        <ImageBackground
          source={WonderWomanEnteringForestScreen}
          resizeMode="cover"
          style={styles.background}
        >
          <TouchableOpacity
            style={styles.homeButton}
            onPress={() => router.push("/(tabs)/home")}
          >
            <Text style={styles.homeButtonText}>Home</Text>
          </TouchableOpacity>
          <View style={styles.contentContainer}>
            <LinearGradient
              colors={["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.6)"]}
              style={styles.storyContainer}
            >
              {stage === 0 && (
                <Text style={styles.storyText}>
                  Our young hero, dressed as Wonder Woman, steps into a dense,
                  mysterious forest. The birds chirp, and the leaves rustle as
                  she makes her way deeper into the trees. Suddenly, she sees a
                  faint glow coming from a clearing ahead.
                </Text>
              )}
              {stage === 1 && (
                <Text style={styles.storyText}>
                  “Oh! That must be one of the magical crystals!” she says,
                  excitedly.
                </Text>
              )}
              {stage === 2 && (
                <Text style={styles.storyText}>
                  As she approaches, she sees a riddle on a sign next to the
                  crystal.
                </Text>
              )}
              {stage === 3 && (
                <>
                  <Text style={styles.questionText}>
                    To claim this crystal, solve this challenge:
                  </Text>
                  <Text style={styles.questionText}>
                    There are 3 rows of trees, and each row has 2 glowing orbs.
                    How many orbs are there in total?
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
                  <Text style={styles.tapText}>(Tap here to continue)</Text>
                </TouchableOpacity>
              )}
            </LinearGradient>
          </View>
        </ImageBackground>
      </View>
  );

  return Platform.OS === 'web' ? (
    content
  ) : (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {content}
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
