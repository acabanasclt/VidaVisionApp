import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { Home, Camera, Map, BookOpen, User } from 'lucide-react-native';
import { MainTabParamList } from './types';
import { colors } from '../utils/colors';

// Placeholders temporales
const HomeScreen = () => <View />;
const ScannerScreen = () => <View />;
const MapScreen = () => <View />;
const HistoryScreen = () => <View />;
const ProfileScreen = () => <View />;

const Tab = createBottomTabNavigator<MainTabParamList>();

export const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: colors.surfaceContainerLowest,
        borderTopColor: colors.outlineVariant,
        borderTopWidth: 1,
        height: 60,
        paddingBottom: 8,
      },
      tabBarIcon: ({ focused, size }) => {
        const color = focused ? colors.primary : colors.outline;
        const icons: Record<string, React.ReactNode> = {
          Home: <Home size={size} color={color} />,
          Scanner: <Camera size={size} color={color} />,
          Map: <Map size={size} color={color} />,
          History: <BookOpen size={size} color={color} />,
          Profile: <User size={size} color={color} />,
        };
        return icons[route.name] ?? null;
      },
    })}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Scanner" component={ScannerScreen} />
    <Tab.Screen name="Map" component={MapScreen} />
    <Tab.Screen name="History" component={HistoryScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);