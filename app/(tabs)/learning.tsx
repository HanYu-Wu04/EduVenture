import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useRouter } from 'expo-router';

export default function learning() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Learning Path</Text>
      
      <View style={styles.imagePlaceholder}>
        {/* Replace this with an actual image component later */}
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.descriptionTitle}>Choose Theme:</Text>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.playButton} onPress={() => router.push('/(tabs)/pathSetup')}>
            <Text style={styles.playButtonText}>Math</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.playButton} onPress={() => router.push('/(tabs)/pathSetup')}>
            <Text style={styles.playButtonText}>Science</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.playButton} onPress={() => router.push('/(tabs)/pathSetup')}>
            <Text style={styles.playButtonText}>English</Text>
          </TouchableOpacity>
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
      backgroundColor: '#ffffff', 
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 20,
      marginBottom: 20,
      color: '#333', 
    },
    imagePlaceholder: {
      width: '100%',
      height: 200,
      backgroundColor: '#e0e0e0',
      borderRadius: 10,
      marginBottom: 20,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 30,
      backgroundColor: '#ffffff', 
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
    },
    homeButton: {
      position: 'absolute',
      bottom: 20,
      right: 20,
      padding: 10,
      backgroundColor: '#ffffff',
    },
    infoSection: {
      marginBottom: 30,
      backgroundColor: '#ffffff',
    },
    descriptionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      color: '#333',
    },
});
