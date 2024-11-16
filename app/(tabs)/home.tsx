import React from 'react';
import { StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useUser } from '@/components/userContext';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import { Galindo_400Regular } from '@expo-google-fonts/galindo';
import { useFonts } from 'expo-font';

// Get the screen width
const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const { username, logout } = useUser();
  const router = useRouter();
  
  const [fontsLoaded] = useFonts({
    Galindo_400Regular,
  });

  const isSmallScreen = width < 350; // You can adjust this threshold as needed

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to EduVenture</Text>
        <View style={styles.profileContainer}>
          <TouchableOpacity
            style={styles.profileButton}
            onPress={() => router.push("/(tabs)/profile")}
          >
            <FontAwesome name="user-circle" size={40} color="#fff" />
            <Text style={styles.profileText}>{username}</Text>
          </TouchableOpacity>
          
          {/* If on a smaller screen, stack the logout button */}
          <TouchableOpacity 
            style={[styles.logoutButton, isSmallScreen && styles.logoutButtonSmallScreen]} 
            onPress={logout}
          >
            <FontAwesome name="sign-out" size={16} color="#fff" />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.mainContent}>
        <View style={styles.contentContainer}>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.squareButton}
              onPress={() => router.push("/(tabs)/FarmerJohn/FarmerJohn")}
            >
              <Text style={styles.buttonText}>Farmer John</Text>
            </TouchableOpacity>
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionText}>
                Join Farmer John in this engaging math game.
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              style={styles.squareButton}
              onPress={() => router.push("/(tabs)/WonderWoman/WonderWoman")}
            >
              <Text style={styles.buttonText}>Wonder Woman</Text>
            </TouchableOpacity>
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionText}>
                Play as a young Wonder Woman exploring a mysterious forest facing math challenges with adventure.
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              style={styles.squareButton}
              onPress={() => router.push("/(tabs)/learning")}
            >
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
    backgroundColor: '#85CAD5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Ensure buttons are spaced out
    flexWrap: 'wrap', // Allow content to wrap if needed
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    flexWrap: 'wrap', // Allow the profile and logout buttons to wrap
    backgroundColor: '#85CAD5',

  },
  profileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#0869b2',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 5,
  },
  profileText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
    backgroundColor: '#0869b2',
    marginLeft: 10,
  },
  logoutText: {
    marginLeft: 5,
    fontSize: 12,
    color: '#fff',
  },
  logoutButtonSmallScreen: {
    marginTop: 10, // Add space if stacked vertically on smaller screens
    marginLeft: 0, // Reset margin-left for stacked layout
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#85CAD5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f41971',
    marginBottom: 30,
    textAlign: 'center',
    fontFamily: 'Galindo_400Regular',
  },
  contentContainer: {
    flex: 1,
    gap: 20,
    backgroundColor: '#85CAD5',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 15,
    backgroundColor: '#69BB57',
  },
  squareButton: {
    backgroundColor: '#273DBD',
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
    fontFamily: 'Galindo_400Regular',
  },
  descriptionContainer: {
    flex: 1,
    backgroundColor: '#69BB57',
    paddingHorizontal: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 22,
    fontFamily: 'Galindo_400Regular',
  },
});
