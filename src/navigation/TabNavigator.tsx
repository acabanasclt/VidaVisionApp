import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { Home, Camera, Map, BookOpen, User } from 'lucide-react-native';
import { MainTabParamList } from './types';
import { colors } from '../utils/colors';
import { HomeScreen } from '../screens/home/HomeScreen';

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
        height: 68,
        paddingBottom: 8,
        paddingTop: 8,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: 'absolute',
        elevation: 8,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: -4 },
      },
      tabBarIcon: ({ focused, size }) => {
        const color = focused ? colors.primary : colors.outline;

        if (route.name === 'Scanner') {
          return (
            <View style={{
              width: 52,
              height: 52,
              borderRadius: 26,
              backgroundColor: colors.primaryContainer,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 24,
              shadowColor: colors.primary,
              shadowOpacity: 0.25,
              shadowRadius: 8,
              shadowOffset: { width: 0, height: 4 },
              elevation: 6,
            }}>
              <Camera size={24} color={colors.onPrimaryContainer} />
            </View>
          );
        }

        const icons: Record<string, React.ReactNode> = {
          Home: <Home size={size} color={color} />,
          Map: <Map size={size} color={color} />,
          History: <BookOpen size={size} color={color} />,
          Profile: <User size={size} color={color} />,
        };

        return (
          <View style={{ alignItems: 'center' }}>
            {icons[route.name]}
            {focused && (
              <View style={{
                width: 4,
                height: 4,
                borderRadius: 2,
                backgroundColor: colors.primary,
                marginTop: 4,
              }} />
            )}
          </View>
        );
      },
    })}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="History" component={HistoryScreen} />
    <Tab.Screen name="Scanner" component={ScannerScreen} />
    <Tab.Screen name="Map" component={MapScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);