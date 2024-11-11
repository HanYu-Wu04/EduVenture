import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

type UserContextType = {
  username: string;
  setUsername: (username: string) => Promise<void>;
  logout: () => Promise<void>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [username, setUsernameState] = useState('');
  const router = useRouter();

  useEffect(() => {
    loadUsername();
  }, []);

  const loadUsername = async () => {
    try {
      const savedUsername = await AsyncStorage.getItem('username');
      if (savedUsername) {
        setUsernameState(savedUsername);
      } else {
        // If no username is found, redirect to create account
        router.replace('/(tabs)/two');
      }
    } catch (error) {
      console.error('Error loading username:', error);
    }
  };

  const setUsername = async (newUsername: string) => {
    try {
      await AsyncStorage.setItem('username', newUsername);
      setUsernameState(newUsername);
    } catch (error) {
      console.error('Error saving username:', error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('username');
      setUsernameState('');
      router.replace('/(tabs)/two');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <UserContext.Provider value={{ username, setUsername, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}