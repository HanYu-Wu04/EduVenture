import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "@/components/Themed";
import { useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function WonderWomanFeedback() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game 2 Feedback</Text>

      <View style={styles.feedbackSection}>
        <Text style={styles.feedbackLabel}>Feedback:</Text>
        <Text style={styles.feedbackText}>
          You can type fast enough! Work on comprehending the task at hand
          faster by building up your reading speed.
        </Text>

        <View style={styles.skillsSection}>
          <Text style={styles.skillText}>
            <Text style={styles.skillLabel}>Top skill:</Text> Typing speed
          </Text>
          <Text style={styles.skillText}>
            <Text style={styles.skillLabel}>Weakest Skill:</Text> Reading speed
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/(tabs)/WonderWoman/WonderWomanReview")}
      >
        <Text style={styles.buttonText}>Review</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push("/(tabs)/WonderWoman/WonderWoman")}
      >
        <FontAwesome name="arrow-left" size={24} color="#fff" />
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
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 30,
    color: "#E13971",
    fontFamily: "Galindo_400Regular",
  },
  feedbackSection: {
    marginTop: 20,
    backgroundColor: "#85CAD5",
  },
  feedbackLabel: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#E13971",
    fontFamily: "Galindo_400Regular",
  },
  feedbackText: {
    fontSize: 18,
    lineHeight: 26,
    color: "#fff",
    marginBottom: 30,
    fontFamily: "Galindo_400Regular",
    backgroundColor: "#69BB57",
    borderRadius: 5,
    padding: 10,
  },
  skillsSection: {
    marginTop: 20,
    backgroundColor: "#85CAD5",
  },
  skillText: {
    fontSize: 18,
    marginBottom: 10,
    color: "#fff",
    fontFamily: "Galindo_400Regular",
    backgroundColor: "#69BB57",
    borderRadius: 5,
    padding: 2,
  },
  skillLabel: {
    fontWeight: "bold",
    color: "#E13971",
    fontFamily: "Galindo_400Regular",
  },
  backButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    padding: 10,
    backgroundColor: "#273DBD",
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#273DBD",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
