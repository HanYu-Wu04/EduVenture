import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useUser } from '@/components/userContext';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
// google font
import { Galindo_400Regular } from '@expo-google-fonts/galindo';
import { Schoolbell_400Regular } from '@expo-google-fonts/schoolbell';
import { useFonts } from 'expo-font';


export default function HomeScreen() {
  const { username, logout } = useUser();
  const router = useRouter();


  const [fontsLoaded] = useFonts({
    Galindo_400Regular,
    Schoolbell_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>Loading Fonts...</Text>;  // Show loading state while fonts are loading
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.title}>Welcome to EduVenture</Text>
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
      

      <View style={styles.titleContainer}>
        {/* <Text style={styles.title}>Welcome to EduVenture</Text> */}
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
  galindoText: {
    fontFamily: 'Galindo_400Regular',
    fontSize: 24,
    color: '#333',
  },
  schoolbellText: {
    fontFamily: 'Schoolbell_400Regular',
    fontSize: 24,
    color: '#333',
  },
  // titleContainer: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   flex: 1, // Ensures title is in the center of the screen
  //   marginTop: 50, // Add space from the header
    
  // },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1, // Ensures title is in the center of the screen
    marginTop: 50, // Add space from the header
  },
  // header: {
  //   paddingTop: 40,
  //   paddingHorizontal: 20,
  //   paddingBottom: 20,
  //   backgroundColor: '#00c3f7', 
  //   flexDirection: 'row',
  //   alignItems: 'center', // Ensure content is centered vertically
  //   justifyContent: 'space-between',
  // },
  header: {
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#00c3f7', 
    flexDirection: 'row',
    alignItems: 'center', // Ensure content is centered vertically
    justifyContent: 'center', // Center the header content horizontally
  },
  profileContainer: {
    // alignItems: 'flex-start',
    // backgroundColor: '#00c3f7', 
    flexDirection: 'column', // Stack "Hello" and "Logout" vertically
    alignItems: 'flex-end', // Align them to the right
    backgroundColor: '#00c3f7', 
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
    marginTop: 5
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
    fontFamily: 'Galindo_400Regular',
    fontSize: 28,
    color: '#E13971', // 333 prior
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
    
    backgroundColor: '#69BB57',
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
