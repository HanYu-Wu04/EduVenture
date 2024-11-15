import { StyleSheet, View, Text, TouchableOpacity, ImageBackground} from "react-native";
import { useRouter } from "expo-router";

export default function WonderWomanEndScreen() {
  const WonderWomanEnd = require("@/assets/images/WonderWoman/WonderWomanEndScreen.png")
  const router = useRouter();

  const handleReturnHome = () => {
    router.push("/(tabs)/home");
  };

  return (
    <ImageBackground
      source={WonderWomanEnd}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.endingText}>
        Congratulations! Wonder Woman has retrieved all the crystals and saved the day!
        </Text>
        <TouchableOpacity style={styles.returnButton} onPress={handleReturnHome}>
          <Text style={styles.returnButtonText}>Return Home</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // A dark overlay for readability
  },
  endingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // White text for contrast
    textAlign: 'center',
    marginBottom: 30,
  },
  returnButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  returnButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
