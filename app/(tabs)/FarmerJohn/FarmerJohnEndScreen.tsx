import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function FarmerJohnEndScreen() {
  const router = useRouter();

  const handleReturnHome = () => {
    router.push('/(tabs)/home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.endingText}>Congratulations! Farmer John have harvested all the apples and fed all the animals, thank you so much for what you did</Text>
      <TouchableOpacity style={styles.returnButton} onPress={handleReturnHome}>
        <Text style={styles.returnButtonText}>Return Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  endingText: {
    fontSize: 24,
    fontWeight: 'bold',
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
