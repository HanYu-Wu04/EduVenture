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

export default function WonderWomanDiscoveringCrystalScreen() {
  const WonderWomanDiscoveringCrystalScreen = require("@/assets/images/WonderWoman/WonderWomanDiscoveringCrystalScreen.png");
  const [answer, setAnswer] = useState("");
  const [stage, setStage] = useState(0);
  const router = useRouter();

  const handleContinue = () => {
    if (stage < 3) {
      setStage(stage + 1);
    } else {
      setStage(0);
      router.push("/(tabs)/WonderWoman/WonderWomanDivisionChallengeScreen");
    }
  };

  const handleSubmit = () => {
    if (answer.trim() === "4") {
      setStage(0);
      setAnswer("");
      alert("Correct! You used the right number of boats.");
      router.push("/(tabs)/WonderWoman/WonderWomanDivisionChallengeScreen");
    } else {
      alert("Try again! Remember each boat can carry 3 items.");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackground
          source={WonderWomanDiscoveringCrystalScreen}
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
                  Wonder Woman’s next clue leads her to a shimmering lake. She
                  looks out across the water and spots something sparkling on
                  the other side.
                </Text>
              )}
              {stage === 1 && (
                <Text style={styles.storyText}>
                  “This lake is huge! I’ll need a way to cross it,” she thinks.
                </Text>
              )}
              {stage === 2 && (
                <Text style={styles.storyText}>
                  She notices several small boats along the shore, but each can
                  only carry a certain number of items.
                </Text>
              )}
              {stage === 3 && (
                <>
                  <Text style={styles.questionText}>
                    To cross the lake safely, you need to load the items evenly.
                  </Text>
                  <Text style={styles.questionText}>
                    There are 12 items, and each boat can carry 3 items. How
                    many boats do you need?
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
