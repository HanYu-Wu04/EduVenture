import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useUser } from '@/components/userContext';
import { useState } from 'react';
import { TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

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

      <TouchableOpacity 
        style={styles.homeButton}
        onPress={() => router.push('/(tabs)/home')}
      >
        <FontAwesome name="home" size={24} color="#4a90e2" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  section: {
    marginBottom: 30,
    backgroundColor: "transparent",
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
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
    color: "#000",
  },
  editButton: {
    backgroundColor: "#4a90e2",
    padding: 8,
    borderRadius: 6,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 14,
  },
  button: {
    backgroundColor: "#4a90e2",
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginBottom: 15,
    color: "#000",
  },
  gamesList: {
    paddingLeft: 20,
    backgroundColor: "#f5f5f5",
  },
  gameItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "transparent",
  },
  gameText: {
    fontSize: 16,
    marginRight: 15,
    color: "#000", // Ensures game text is black in light mode
  },
  gameButtons: {
    flexDirection: "row",
    backgroundColor: "transparent",
  },
  gameButton: {
    backgroundColor: "#4a90e2",
    padding: 8,
    borderRadius: 6,
    marginRight: 10,
  },
  gameButtonText: {
    color: "#fff",
    fontSize: 14,
  },
  recommendationText: {
    fontSize: 16,
    lineHeight: 24,
    paddingLeft: 20,
    color: "#000",
  },
  homeButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
});