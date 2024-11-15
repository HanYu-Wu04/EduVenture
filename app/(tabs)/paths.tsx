import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Slider from '@react-native-community/slider';

export default function paths() {
  const router = useRouter();

  const paths = {
    pathOneTitle: "Begginer Math Path",
    pathTwoTitle: "Intermediate English Path",
    pathThreeTitle: "Advanced Science Path"
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Learning Path</Text>
      
      <View style={styles.imagePlaceholder}>
        {/* Replace this with an actual image component later */}
      </View>

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
            onPress={() => router.push('/(tabs)/learning')} // Navigate back to home
          >
            <Text style={styles.playButtonText}>+ Add New Path</Text>
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
  pathButton: {
    backgroundColor: '#4a90e2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
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
  pathContainer: {
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  pathRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0', 
    backgroundColor: '#f5f5f5',
  },
  pathLabel: {
    fontSize: 18,
    color: '#333', 
    fontWeight: '500',
  },
  pathValue: {
    fontSize: 18,
    color: '#4a90e2', 
    fontWeight: '600',
  },
});
