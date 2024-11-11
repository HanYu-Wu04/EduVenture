import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type UserContextType = {
  username: string;
  setUsername: (username: string) => Promise<void>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [username, setUsernameState] = useState('');

  useEffect(() => {
    // Load username when the app starts
    loadUsername();
  }, []);

  const loadUsername = async () => {
    try {
      const savedUsername = await AsyncStorage.getItem('username');
      if (savedUsername) {
        setUsernameState(savedUsername);
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

  return (
    <UserContext.Provider value={{ username, setUsername }}>
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