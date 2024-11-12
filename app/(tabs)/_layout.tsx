import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import { useRouter } from 'expo-router';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { UserProvider } from '@/components/userContext';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <UserProvider>
      <Tabs
        screenOptions={{
          tabBarStyle: { display: 'none' }, // This hides the tab bar
          headerShown: useClientOnlyValue(false, true),
        }}>
        <Tabs.Screen
          name="two" // This will now be our first screen
          options={{
            title: 'Create Account',
            tabBarIcon: ({ color }) => <TabBarIcon name="user-plus" color={color} />,
          }}
        />
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          }}
        />
        <Tabs.Screen
          name="game1"
          options={{
          title: 'Game 1',
          tabBarIcon: ({ color }) => <TabBarIcon name="gamepad" color={color} />,
          }}
        />
        <Tabs.Screen
          name="game1History"
          options={{
          title: 'Game 1 History',
          tabBarIcon: ({ color }) => <TabBarIcon name="history" color={color} />,
          }}
        />
        <Tabs.Screen
          name="game2History"
          options={{
          title: 'Game 2 History',
          tabBarIcon: ({ color }) => <TabBarIcon name="history" color={color} />,
          }}
        />
          <Tabs.Screen
          name="game2"
          options={{
          title: 'Game 2',
          tabBarIcon: ({ color }) => <TabBarIcon name="gamepad" color={color} />,
          }}
        />
          <Tabs.Screen
          name="game1Feedback"
          options={{
          title: 'Game 1 Feedback',
          tabBarIcon: ({ color }) => <TabBarIcon name="gamepad" color={color} />,
          }}
        />
        <Tabs.Screen
          name="game2Feedback"
          options={{
          title: 'Game 2 Feedback',
          tabBarIcon: ({ color }) => <TabBarIcon name="gamepad" color={color} />,
          }}
        />
        <Tabs.Screen
          name="learning"
          options={{
          title: 'Learning Path',
          tabBarIcon: ({ color }) => <TabBarIcon name="gamepad" color={color} />,
          }}
        />
        <Tabs.Screen
          name="pathSetup"
          options={{
          title: 'Path setup',
          tabBarIcon: ({ color }) => <TabBarIcon name="gamepad" color={color} />,
          }}
        />
      </Tabs>
    </UserProvider>
  );
}