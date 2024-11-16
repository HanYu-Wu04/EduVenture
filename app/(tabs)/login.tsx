import { StyleSheet, Dimensions } from 'react-native';
import { Text, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useUser } from '@/components/userContext';
import { useRouter } from 'expo-router';
import { Galindo_400Regular } from '@expo-google-fonts/galindo';
import { useFonts } from 'expo-font';

export default function loginScreen() {
  const { username, setUsername } = useUser();
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    Galindo_400Regular,
  });
  
  const { width } = Dimensions.get('window');

  const titleFontSize = width < 350 ? 30 : 50; // Reduce title size for small screens


  const handleSubmit = async () => {
    if (username.trim()) {
      await setUsername(username.trim());
      router.replace('/(tabs)/home'); 
    }
  };

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>EduVenture</Text>
      <Text style={styles.text}>Create Account</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter username"
          value={username}
          onChangeText={setUsername}
          maxLength={12}
        />
      </View>
      <TouchableOpacity 
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff', 
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 50,
    fontFamily: 'Galindo_400Regular',
    color: '#f41971',
    textAlign: 'center', // Center-align the title
    flexWrap: 'wrap', // Allow wrapping for small screens
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    // fontFamily: 'Galindo_400Regular',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    width: '100%',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#69BB57',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Galindo_400Regular',
  },
});