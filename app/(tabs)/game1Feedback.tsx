import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useRouter } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Game1FeedbackScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game 1 Feedback</Text>
      
      <View style={styles.feedbackSection}>
        <Text style={styles.feedbackLabel}>Feedback:</Text>
        <Text style={styles.feedbackText}>
          You are slow at solving multiplication problems, but your puzzle solving skills are excellent. 
          Work on times tables and your speed should greatly improve!
        </Text>
        
        <View style={styles.skillsSection}>
          <Text style={styles.skillText}>
            <Text style={styles.skillLabel}>Top skill:</Text> Addition
          </Text>
          <Text style={styles.skillText}>
            <Text style={styles.skillLabel}>Weakest Skill:</Text> Multiplication
          </Text>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => router.push('/(tabs)/game1')}
      >
        <FontAwesome name="arrow-left" size={24} color="#4a90e2" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30,
    color: '#333',
  },
  feedbackSection: {
    marginTop: 20,
    backgroundColor: '#ffffff',
  },
  feedbackLabel: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  feedbackText: {
    fontSize: 18,
    lineHeight: 26,
    color: '#666',
    marginBottom: 30,
  },
  skillsSection: {
    marginTop: 20,
    backgroundColor: '#ffffff',
  },
  skillText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#666',
  },
  skillLabel: {
    fontWeight: 'bold',
    color: '#333',
  },
  backButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    padding: 10,
    backgroundColor: '#ffffff',
  },
});