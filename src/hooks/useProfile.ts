import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';
import { useTheme } from '../theme/useTheme';
import { Theme } from '../theme/themes';
import { IconName } from '../utils/icons';

type NavigationProp = StackNavigationProp<RootStackParamList>;

export interface ProfileMenuItem {
  id: string;
  label: string;
  icon: IconName;
  badge?: string;
  onPress: () => void;
}

export const useProfile = () => {
  const navigation = useNavigation<NavigationProp>();
  const { theme, setTheme } = useTheme();
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const user = {
    name: 'Rebeca Avalos',
    role: 'Productor Premium',
    location: 'Itapúa, Paraguay',
    bio: 'Especialista en agricultura de precisión con más de 15 años de experiencia en la región sur.',
    avatar: '',
  };

  const stats = [
    { id: '1', value: 12, label: 'Parcelas Activas' },
    { id: '2', value: 148, label: 'Escaneos Totales' },
  ];

  const menuItems: ProfileMenuItem[] = [
    { id: 'parcels', label: 'Mis Parcelas', icon: 'map', onPress: () => {} },
    { id: 'settings', label: 'Configuración', icon: 'settings', onPress: () => navigation.navigate('Settings') },
    { id: 'support', label: 'Soporte Técnico', icon: 'headphones', onPress: () => {} },
  ];

  const handleLogoutPress = () => setShowLogoutDialog(true);

  const handleLogoutConfirm = () => {
    setShowLogoutDialog(false);
    navigation.replace('Login');
  };

  const handleLogoutCancel = () => setShowLogoutDialog(false);

  const handleChangeTheme = (newTheme: Theme) => setTheme(newTheme);

  return {
    user,
    stats,
    menuItems,
    theme,
    showLogoutDialog,
    handleLogoutPress,
    handleLogoutConfirm,
    handleLogoutCancel,
    handleChangeTheme,
  };
};