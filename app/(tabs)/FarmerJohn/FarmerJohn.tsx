import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useRouter } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Game1Screen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game 1</Text>
      
      <Image
        source={require('@/assets/images/FarmerJohn/FarmerJohnCountingApplesScreen.png')} // Replace this with the actual path to your image
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.playButton} 
          onPress={() => router.push('/(tabs)/FarmerJohn/FarmerJohnCountingApplesScreen')}>
          <Text style={styles.playButtonText}>Play</Text>
        </TouchableOpacity>
      
        <View style={styles.rightButtons}>
          <TouchableOpacity style={styles.secondaryButton}
            onPress={() => router.push('/(tabs)/FarmerJohn/FarmerJohnHistory')}
          >
            <Text style={styles.secondaryButtonText}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}
            onPress={() => router.push('/(tabs)/FarmerJohn/FarmerJohnFeedback')}
          >
            <Text style={styles.secondaryButtonText}>Feedback</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.descriptionTitle}>Description:</Text>
        <Text style={styles.descriptionText}>This is a description of the game</Text>
        
        <Text style={styles.skillsTitle}>Skills:</Text>
        <View style={styles.skillsList}>
          <Text style={styles.skillItem}>• Reading</Text>
          <Text style={styles.skillItem}>• Basic Math</Text>
        </View>
      </View>

      <View style={styles.progressSection}>
        <Text style={styles.progressLabel}>Progress</Text>
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBar} />
        </View>
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
      backgroundColor: '#85CAD5', 
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#f41971', 
      fontFamily: 'Galindo_400Regular',
    },
    image: {
      width: '100%',
      height: 200,
      borderRadius: 10,
      marginBottom: 20,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 30,
      backgroundColor: '#85CAD5', 
      paddingVertical: 10,
      paddingHorizontal: 5,
      borderRadius: 10, 
    },
    playButton: {
      backgroundColor: '#4a90e2',
      paddingVertical: 15,
      paddingHorizontal: 40,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
    },
    playButtonText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: 'Galindo_400Regular',
    },
    rightButtons: {
      gap: 10,
      backgroundColor: '#85CAD5', 
      borderRadius: 10, 
    },
    secondaryButton: {
      backgroundColor: '#4a90e2',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
    },
    secondaryButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '500',
      fontFamily: 'Galindo_400Regular',
    },
  infoSection: {
    marginBottom: 30,
    backgroundColor: '#85CAD5',
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#f41971', 
    fontFamily: 'Galindo_400Regular',
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 15,
    color: '#fff',
    fontFamily: 'Galindo_400Regular',
  },
  skillsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#f41971',
    fontFamily: 'Galindo_400Regular',
  },
  skillsList: {
    paddingLeft: 10,
    backgroundColor: '#85CAD5',
  },
  skillItem: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Galindo_400Regular',
    marginBottom: 5,
  },
  progressSection: {
    marginBottom: 20,
    backgroundColor: '#85CAD5',
  },
  progressLabel: {
    fontSize: 16,
    marginBottom: 5,
    color: '#f41971',
    fontFamily: 'Galindo_400Regular',
  },
  progressBarContainer: {
    width: '100%',
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    width: '75%',
    height: '100%',
    backgroundColor: '#4a90e2',
  },
  homeButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 10,
    backgroundColor: '#85CAD5',
  },
});
