import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";
import { useRouter } from "expo-router";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { UserProvider } from "@/components/userContext";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
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
          tabBarStyle: { display: "none" }, // This hides the tab bar
          headerShown: useClientOnlyValue(false, true),
        }}
      >
        <Tabs.Screen
          name="login" // This will now be our first screen
          options={{
            title: "Create Account",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="user-plus" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          }}
        />
        <Tabs.Screen
          name="TeacherDashboard"
          options={{
            title: "TeacherDashboard",
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="FarmerJohn/FarmerJohn"
          options={{
            title: "Game 1",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="gamepad" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="FarmerJohn/FarmerJohnReview"
          options={{
            title: "Game 1",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="gamepad" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="FarmerJohn/FarmerJohnHistory"
          options={{
            title: "Game 1 History",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="history" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="WonderWoman/WonderWomanHistory"
          options={{
            title: "Game 2 History",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="history" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="WonderWoman/WonderWoman"
          options={{
            title: "Game 2",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="gamepad" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="WonderWoman/WonderWomanReview"
          options={{
            title: "Game 2",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="gamepad" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="FarmerJohn/FarmerJohnFeedback"
          options={{
            title: "Game 1 Feedback",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="gamepad" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="WonderWoman/WonderWomanFeedback"
          options={{
            title: "Game 2 Feedback",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="gamepad" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="learning"
          options={{
            title: "Learning Path",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="gamepad" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="pathSetup"
          options={{
            title: "Path setup",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="gamepad" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="FarmerJohn/FarmerJohnCountingApplesScreen"
          options={{
            title: "game play",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="gamepad" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="FarmerJohn/FarmerJohnPickingApplesScreen"
          options={{
            title: "game play",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="gamepad" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="FarmerJohn/FarmerJohnAddingApplesScreen"
          options={{
            title: "game play",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="gamepad" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="FarmerJohn/FarmerJohnFeedingAnimalsScreen"
          options={{
            title: "game play",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="gamepad" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="FarmerJohn/FarmerJohnPlantingSeedsScreen"
          options={{
            title: "game play",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="gamepad" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="FarmerJohn/FarmerJohnHarvestingApplesScreen"
          options={{
            title: "game play",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="gamepad" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="FarmerJohn/FarmerJohnEndScreen"
          options={{
            title: "game play",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="gamepad" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="WonderWoman/WonderWomanEnteringForestScreen"
          options={{
            title: "game play",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="gamepad" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="WonderWoman/WonderWomanDiscoveringCrystalScreen"
          options={{
            title: "game play",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="gamepad" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="WonderWoman/WonderWomanDivisionChallengeScreen"
          options={{
            title: "game play",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="gamepad" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="WonderWoman/WonderWomanMultiplicationChallengeScreen"
          options={{
            title: "game play",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="gamepad" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="WonderWoman/WonderWomanEndScreen"
          options={{
            title: "game play",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="gamepad" color={color} />
            ),
          }}
        />
      </Tabs>
    </UserProvider>
  );
}
