import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { useRouter } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Slider from '@react-native-community/slider';

export default function paths() {
  const router = useRouter();

  const paths = {
    pathOneTitle: "Beginner Math Path",
    pathTwoTitle: "Basic English Path",
    pathThreeTitle: "Expert Science Path"
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.title}>My Paths</Text>
      </View>
      
      <Image
        source={require('@/assets/images/learningpath.png')} // Replace this with the actual path to your image
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.mainContent}>
        <View style={styles.infoSection}>
            <Text style={styles.descriptionTitle}>Your paths:</Text>

            <View style={styles.pathContainer}>
                <View style={styles.pathRow}>
                    <Text style={styles.pathLabel}>{paths.pathOneTitle}</Text>
                    <TouchableOpacity
                        style={styles.pathButton}
                    >
                        <Text style={styles.playButtonText}> Start</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.pathRow}>
                    <Text style={styles.pathLabel}>{paths.pathTwoTitle}</Text>
                    <TouchableOpacity
                        style={styles.pathButton}
                    >
                        <Text style={styles.playButtonText}> Start</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.pathRow}>
                    <Text style={styles.pathLabel}>{paths.pathThreeTitle}</Text>
                    <TouchableOpacity
                        style={styles.pathButton}
                    >
                        <Text style={styles.playButtonText}> Start</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.playButton}
                onPress={() => router.push('/(tabs)/learning')}
            >
                <Text style={styles.playButtonText}>+ Add New Path</Text>
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
    fontFamily: 'Galindo_400Regular',
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
    backgroundColor: '#69BB57', 
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  pathButton: {
    backgroundColor: '#273DBD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
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
  playButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Galindo_400Regular',
  },
  homeButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 10,
    backgroundColor: '#85CAD5',
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
  pathContainer: {

    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#69BB57',
  },
  pathRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0', 
    backgroundColor: '#69BB57',
  },
  pathLabel: {
    fontSize: 16,
    color: '#fff', 
    fontWeight: '500',
    fontFamily: 'Galindo_400Regular',
  },
  pathValue: {
    fontSize: 18,
    color: '#4a90e2', 
    fontWeight: '600',
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
