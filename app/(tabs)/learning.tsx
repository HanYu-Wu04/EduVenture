import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useRouter } from 'expo-router';

export default function learning() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Learning Path</Text>
      </View>
      
      <Image
        source={require('@/assets/images/learningpath.png')} // Replace this with the actual path to your image
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.mainContent}>
        <View style={styles.infoSection}>
          <Text style={styles.descriptionTitle}>Choose Theme:</Text>
          
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.playButton} onPress={() => router.push('/(tabs)/pathSetup')}>
              <Text style={styles.buttonText}>Math</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.playButton} onPress={() => router.push('/(tabs)/pathSetup')}>
              <Text style={styles.buttonText}>Science</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.playButton} onPress={() => router.push('/(tabs)/pathSetup')}>
              <Text style={styles.buttonText}>English</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.homeButton}
        onPress={() => router.push('/(tabs)/home')}
      >
        <FontAwesome name="home" size={24} color="#273DBD" />
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
      marginTop: 20,
      marginBottom: 20,
      color: '#f41971', 
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
      backgroundColor: '#273DBD',
      paddingVertical: 15,
      paddingHorizontal: 40,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
    },
    buttonText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
      fontFamily: 'Galindo_400Regular',
    },
    homeButton: {
      position: 'absolute',
      bottom: 20,
      right: 20,
      padding: 10,
      backgroundColor: "#85CAD5",
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
    },
    header: {
      paddingTop: 10,
      paddingHorizontal: 20,
      backgroundColor: "#85CAD5",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    mainContent: {
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: "#85CAD5",
    },
    image: {
      width: '100%',
      height: 200,
      borderRadius: 10,
      marginBottom: 20,
    },
});
