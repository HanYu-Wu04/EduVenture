import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useUser } from '@/components/userContext';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const { username, logout } = useUser();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <TouchableOpacity 
            style={styles.profileButton}
            onPress={() => router.push('/(tabs)/profile')}
          >
            <FontAwesome name="user-circle" size={40} color="#4a90e2" />
            <Text style={styles.profileText}>{username}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.logoutButton}
            onPress={logout}
          >
            <FontAwesome name="sign-out" size={16} color="#666" />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.mainContent}>
        <Text style={styles.title}>Welcome to EduVenture</Text>
        
        <View style={styles.contentContainer}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.squareButton}
            onPress={() => router.push('/(tabs)/game1')}
            >
              <Text style={styles.buttonText}>Game 1</Text>
            </TouchableOpacity>
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionText}>
                This is game 1. This is a short description of the game
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.squareButton}
            onPress={() => router.push('/(tabs)/game2')}
            >
              <Text style={styles.buttonText}>Game 2</Text>
            </TouchableOpacity>
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionText}>
                This is game 2. This is a short description of the game
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.squareButton}
            onPress={() => router.push('/(tabs)/learning')}>
              <Text style={styles.buttonText}>Learning Path</Text>
            </TouchableOpacity>
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionText}>
                Go here to see how you are progressing in your learning and change the pace and difficulty.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', 
  },
  header: {
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#ffffff', 
  },
  profileContainer: {
    alignItems: 'flex-start',
    backgroundColor: '#ffffff', 
  },
  profileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 5,
  },
  profileText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
    backgroundColor: '#f5f5f5',
    marginLeft: 50,
  },
  logoutText: {
    marginLeft: 5,
    fontSize: 12,
    color: '#666',
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff', 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  contentContainer: {
    flex: 1,
    gap: 20,
    backgroundColor: '#ffffff', 
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 15,
    backgroundColor: '#ffffff', 
  },
  squareButton: {
    backgroundColor: '#4a90e2',
    width: 120,
    height: 120,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  descriptionContainer: {
    flex: 1,
    backgroundColor: '#ffffff', 
    paddingHorizontal: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
  },
});
