import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "@/components/Themed";
import { useUser } from "@/components/userContext";
import { useState } from "react";
import { TextInput } from "react-native";
import { useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function ProfileScreen() {
  const { username, setUsername } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [tempUsername, setTempUsername] = useState(username);
  const router = useRouter();

  const handleSave = async () => {
    if (tempUsername.trim()) {
      await setUsername(tempUsername.trim());
      setIsEditing(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.usernameContainer}>
          {isEditing ? (
            <View style={styles.editContainer}>
              <TextInput
                style={styles.input}
                value={tempUsername}
                onChangeText={setTempUsername}
                maxLength={12}
              />
              <TouchableOpacity style={styles.button} onPress={handleSave}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <>
              <Text style={styles.label}>Username: {username}</Text>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => setIsEditing(true)}
              >
                <Text style={styles.editButtonText}>Edit</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recently played:</Text>
        <View style={styles.gamesList}>
          <View style={styles.gameItem}>
            <Text style={styles.gameText}>Game 1</Text>
            <View style={styles.gameButtons}>
              <TouchableOpacity
                style={styles.gameButton}
                onPress={() =>
                  router.push("/(tabs)/FarmerJohn/FarmerJohnFeedback")
                }
              >
                <Text style={styles.gameButtonText}>Feedback</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.gameButton}
                onPress={() =>
                  router.push("/(tabs)/FarmerJohn/FarmerJohnHistory")
                }
              >
                <Text style={styles.gameButtonText}>History</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.gameItem}>
            <Text style={styles.gameText}>Game 2</Text>
            <View style={styles.gameButtons}>
              <TouchableOpacity
                style={styles.gameButton}
                onPress={() =>
                  router.push("/(tabs)/WonderWoman/WonderWomanFeedback")
                }
              >
                <Text style={styles.gameButtonText}>Feedback</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.gameButton}
                onPress={() =>
                  router.push("/(tabs)/WonderWoman/WonderWomanHistory")
                }
              >
                <Text style={styles.gameButtonText}>History</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Overall Recommendations</Text>
        <Text style={styles.recommendationText}>
          Practice division and reading speed. {username}'s multiplication
          skills are good, but {username}'s addition could use some work.
        </Text>
      </View>

      {/* Home Button */}
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => router.push("/(tabs)/home")}
      >
        <FontAwesome name="home" size={24} color="#4a90e2" />
      </TouchableOpacity>

      {/* Teacher Dashboard Button */}
      <TouchableOpacity
        style={styles.teacherButton}
        onPress={() => router.push("/(tabs)/TeacherDashboard")}
      >
        <Text style={styles.teacherButtonText}>Teacher Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#85CAD5", //f5f5f5
  },
  section: {
    marginBottom: 30,
    backgroundColor: "transparent", //transparent
  },
  usernameContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "transparent",
  },
  editContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#85CAD5",
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    fontFamily: "Galindo_400Regular",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
    color: "#E13971",
    fontFamily: "Galindo_400Regular",
  },
  editButton: {
    backgroundColor: "#273DBD",
    padding: 8,
    borderRadius: 6,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Galindo_400Regular",
  },
  button: {
    backgroundColor: "#273DBD",
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Galindo_400Regular",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginBottom: 15,
    color: "#E13971",
    fontFamily: "Galindo_400Regular",
  },
  gamesList: {
    paddingLeft: 20,
    backgroundColor: "#85CAD5",
  },
  gameItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "#69BB57",
    borderRadius: 5,
    padding: 5,
  },
  gameText: {
    fontSize: 16,
    marginRight: 15,
    color: "#fff", // Ensures game text is black in light mode
    fontFamily: "Galindo_400Regular",
    backgroundColor: "#69BB57", //new line
  },
  gameButtons: {
    flexDirection: "row",
    backgroundColor: "transparent",
  },
  gameButton: {
    backgroundColor: "#273DBD",
    padding: 8,
    borderRadius: 6,
    marginRight: 10,
  },
  gameButtonText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Galindo_400Regular",
  },
  recommendationText: {
    fontSize: 16,
    lineHeight: 24,
    paddingLeft: 20,
    color: "#fff",
    fontFamily: "Galindo_400Regular",
    backgroundColor: "#69BB57",
    borderRadius: 5,
    padding: 10,
  },
  homeButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  teacherButton: {
    position: "absolute",
    bottom: 80,
    right: 20,
    padding: 10,
    backgroundColor: "#273DBD",
    borderRadius: 8,
    alignItems: "center",
  },
  teacherButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Galindo_400Regular",
  },
});
