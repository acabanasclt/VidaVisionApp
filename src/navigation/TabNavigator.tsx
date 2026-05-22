import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { Home, Camera, Map, BookOpen, User } from 'lucide-react-native';
import { MainTabParamList } from './types';
import { useTheme } from '../theme/useTheme';
import { rs } from '../utils/responsive';
import { ProfileScreen } from '../screens/Profile/ProfileScreen';
import { HomeScreen } from '../screens/home/HomeScreen';
import { HistoryScreen } from '../screens/History/HistoryScreen';

const ScannerScreen = () => <View />;
const MapScreen = () => <View />;

const Tab = createBottomTabNavigator<MainTabParamList>();

export const TabNavigator = () => {
  const { colors } = useTheme();

  return (
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
                width: rs(52),
                height: rs(52),
                borderRadius: rs(26),
                backgroundColor: colors.primaryContainer,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: rs(24),
                elevation: 6,
              }}>
                <Camera size={rs(24)} color={colors.onPrimaryContainer} />
              </View>
            );
          }

          const icons: Record<string, React.ReactNode> = {
            Home: <Home size={size} color={color} />,
            History: <BookOpen size={size} color={color} />,
            Map: <Map size={size} color={color} />,
            Profile: <User size={size} color={color} />,
          };

          return (
            <View style={{ alignItems: 'center' }}>
              {icons[route.name]}
              {focused && (
                <View style={{
                  width: rs(4),
                  height: rs(4),
                  borderRadius: rs(2),
                  backgroundColor: colors.primary,
                  marginTop: rs(4),
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
};