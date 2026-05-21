import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackParamList } from './types';
import { OnboardingScreen } from '../screens/Onboarding/OnboardingScreen';
import { LoginScreen } from '../screens/Auth/LoginScreen';
import { TabNavigator } from './TabNavigator';

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  const [initialRoute, setInitialRoute] = useState<keyof RootStackParamList | null>(null);

  useEffect(() => {
    const checkOnboarding = async () => {
      const completed = await AsyncStorage.getItem('onboarding_completed');
      setInitialRoute(completed ? 'Login' : 'Onboarding');
    };
    checkOnboarding();
  }, []);

  if (!initialRoute) return null;

  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Main" component={TabNavigator} />
    </Stack.Navigator>
  );
};