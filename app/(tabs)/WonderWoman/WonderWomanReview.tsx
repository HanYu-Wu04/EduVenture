import {
  StyleSheet,
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

const questions = [
  {
    question:
      "There are 3 rows of trees, and each row has 4 glowing orbs. How many orbs are there in total?",
    correctAnswer: "12",
    hint: "Multiply the number of rows by the orbs in each row.",
  },
  {
    question:
      "You have 12 items, and each boat can carry 3 items. How many boats do you need?",
    correctAnswer: "4",
    hint: "Divide the total number of items by the capacity of each boat.",
  },
  {
    question:
      "The animals give you 24 berries to eat. If you only eat 4 berries at each stop, how many stops can you make?",
    correctAnswer: "6",
    hint: "Divide the total berries by the berries eaten at each stop.",
  },
  {
    question:
      "You have 5 groups of weights, and each group weighs 3 kilograms. What is the total weight?",
    correctAnswer: "15",
    hint: "Multiply the number of groups by the weight of each group.",
  },
];

export default function WonderWomanReview() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const router = useRouter();

  const handleAnswerSubmit = () => {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (userAnswer.trim() === correctAnswer) {
      setFeedback("Correct! Great job!");
    } else {
      setFeedback(`Incorrect. Hint: ${questions[currentQuestionIndex].hint}`);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer("");
      setFeedback("");
    } else {
      setCurrentQuestionIndex(0);
      router.push("/(tabs)/home"); // Go back to the home page after the last question
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

        <LinearGradient
          colors={["rgba(255, 255, 255, 0.9)", "rgba(255, 255, 255, 0.7)"]}
          style={styles.reviewContainer}
        >
          <Text style={styles.questionText}>
            {questions[currentQuestionIndex].question}
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your answer"
            placeholderTextColor="#999"
            keyboardType="numeric"
            value={userAnswer}
            onChangeText={setUserAnswer}
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleAnswerSubmit}
          >
            <Text style={styles.submitButtonText}>Submit Answer</Text>
          </TouchableOpacity>

          {feedback ? (
            <Text
              style={[
                styles.feedbackText,
                feedback.includes("Correct")
                  ? styles.correctFeedback
                  : styles.incorrectFeedback,
              ]}
            >
              {feedback}
            </Text>
          ) : null}

          <TouchableOpacity
            style={styles.nextButton}
            onPress={handleNextQuestion}
          >
            <Text style={styles.nextButtonText}>
              {currentQuestionIndex < questions.length - 1
                ? "Next Question"
                : "Finish Review"}
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#85CAD5",
    justifyContent: "center",
    alignItems: "center",
  },
  reviewContainer: {
    width: "90%",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    alignItems: "center",
  },
  questionText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    width: "100%",
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
    paddingHorizontal: 30,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "Galindo_400Regular",
  },
  feedbackText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  correctFeedback: {
    color: "green",
  },
  incorrectFeedback: {
    color: "red",
  },
  nextButton: {
    backgroundColor: "#007AFF",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "Galindo_400Regular",
  },
  homeButton: {
    position: "absolute",
    top: 40,
    left: 20,
    backgroundColor: "#4CAF50",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  homeButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "Galindo_400Regular",
  },
});
