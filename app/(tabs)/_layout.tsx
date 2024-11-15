import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import "../../global.css";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FF566A',
        
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: '#FF566A',
          padding:10,
          height:75,
          paddingBottom:15
                   
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="home-outline"
              color={focused ? '#FF566A' : color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: 'Tracking',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="locate-outline"
              color={focused ? '#FF566A' : color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="navigate-outline"
              color="white"              
              style={{
                backgroundColor:  '#FF566A' ,
                borderRadius: 100, 
                padding: 28,
                position: 'absolute',
                top:  -30 
              }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="chatbubble-outline"
              color={focused ? '#FF566A' : color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="person-outline"
              color={focused ? '#FF566A' : color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
