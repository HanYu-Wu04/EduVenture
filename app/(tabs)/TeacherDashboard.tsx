import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Alert} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const students = [
  { id: '1', name: 'Alice Johnson' },
  { id: '2', name: 'Ben Williams' },
  { id: '3', name: 'Charlie Brown' },
  { id: '4', name: 'Daisy Evans' },
];

const fakeFeedback = {
  FarmerJohn: [
    { id: '1', name: 'Alice Johnson', progress: 'Completed 5/5 tasks with 90% accuracy.' },
    { id: '2', name: 'Ben Williams', progress: 'Completed 4/5 tasks with 80% accuracy.' },
  ],
  WonderWoman: [
    { id: '3', name: 'Charlie Brown', progress: 'Completed 3/4 tasks with 75% accuracy.' },
    { id: '4', name: 'Daisy Evans', progress: 'Completed 4/4 tasks with 85% accuracy.' },
  ],
};

export default function TeacherDashboard() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [assignedGames, setAssignedGames] = useState({});

  const assignGame = (game) => {
    if (selectedStudent) {
      setAssignedGames({
        ...assignedGames,
        [selectedStudent.id]: game,
      });
      Alert.alert('Game Assigned', `${game} has been assigned to ${selectedStudent.name}.`);
      setSelectedStudent(null);
    } else {
      Alert.alert('Select a Student', 'Please select a student to assign a game.');
    }
  };

  const renderStudent = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.studentButton,
        selectedStudent?.id === item.id ? styles.selectedStudent : null,
      ]}
      onPress={() => setSelectedStudent(item)}
    >
      <Text style={styles.studentButtonText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderFeedback = (game) => {
    return fakeFeedback[game].map((feedback) => (
      <View key={feedback.id} style={styles.feedbackContainer}>
        <Text style={styles.feedbackText}>
          {feedback.name}: {feedback.progress}
        </Text>
      </View>
    ));
  };

  const router = useRouter();

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#E0F7FA', '#80DEEA']} style={styles.header}>
        <Text style={styles.headerText}>Teacher Dashboard</Text>
      </LinearGradient>
      <TouchableOpacity 
        style={styles.homeButton} 
        onPress={() => router.push('/(tabs)/home')}
      >
        <Text style={styles.homeButtonText}>Home</Text>
      </TouchableOpacity>
      <Text style={styles.sectionTitle}>Select a Student</Text>
      <FlatList
        data={students}
        renderItem={renderStudent}
        keyExtractor={(item) => item.id}
        horizontal
        style={styles.studentList}
      />

      <Text style={styles.sectionTitle}>Assign a Game</Text>
      <View style={styles.gameButtons}>
        <TouchableOpacity style={styles.gameButton} onPress={() => assignGame('FarmerJohn')}>
          <Text style={styles.gameButtonText}>Farmer John</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gameButton} onPress={() => assignGame('WonderWoman')}>
          <Text style={styles.gameButtonText}>Wonder Woman</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Student Progress</Text>
      <View style={styles.feedbackSection}>
        <Text style={styles.gameTitle}>Farmer John</Text>
        {renderFeedback('FarmerJohn')}
        <Text style={styles.gameTitle}>Wonder Woman</Text>
        {renderFeedback('WonderWoman')}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00796B',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginVertical: 10,
  },
  studentList: {
    marginBottom: 20,
  },
  studentButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#B2DFDB',
    borderRadius: 8,
    marginRight: 10,
  },
  selectedStudent: {
    backgroundColor: '#00796B',
  },
  studentButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  gameButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  gameButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#00796B',
    borderRadius: 8,
  },
  gameButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  feedbackSection: {
    marginTop: 10,
  },
  gameTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginVertical: 5,
  },
  feedbackContainer: {
    padding: 10,
    backgroundColor: '#E0F2F1',
    borderRadius: 8,
    marginVertical: 5,
  },
  feedbackText: {
    fontSize: 16,
    color: '#00796B',
  },
  homeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 8,
  },
  homeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
