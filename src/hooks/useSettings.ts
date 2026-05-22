import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';
import { useTheme } from '../theme/useTheme';
import { IconName } from '../utils/icons';

type NavigationProp = StackNavigationProp<RootStackParamList>;

export interface SettingsItem {
  id: string;
  label: string;
  icon: IconName;
  value?: string;
  type: 'navigate' | 'toggle' | 'value';
  toggleValue?: boolean;
  onPress?: () => void;
  onToggle?: (val: boolean) => void;
}

export interface SettingsGroupData {
  id: string;
  title: string;
  items: SettingsItem[];
}

export const useSettings = () => {
  const navigation = useNavigation<NavigationProp>();
  const { isDark, toggleDark } = useTheme();

  const user = {
    name: 'Rebeca Avalos',
    role: 'Productor Senior',
    avatar: '',
  };

  const groups: SettingsGroupData[] = [
    {
      id: 'account',
      title: 'Cuenta',
      items: [
        { id: 'profile', label: 'Perfil', icon: 'user', type: 'navigate', onPress: () => {} },
        { id: 'notifications', label: 'Notificaciones', icon: 'bell', type: 'navigate', onPress: () => {} },
        { id: 'security', label: 'Seguridad', icon: 'shield', type: 'navigate', onPress: () => {} },
      ],
    },
    {
      id: 'preferences',
      title: 'Preferencias',
      items: [
        { id: 'language', label: 'Idioma', icon: 'languages', type: 'value', value: 'Español', onPress: () => {} },
        { id: 'units', label: 'Unidad de Medida', icon: 'ruler', type: 'value', value: 'Hectáreas', onPress: () => {} },
        { id: 'darkmode', label: 'Modo Oscuro', icon: 'moon', type: 'toggle', toggleValue: isDark, onToggle: toggleDark },
      ],
    },
    {
      id: 'app',
      title: 'Aplicación',
      items: [
        { id: 'about', label: 'Acerca de VidaVision', icon: 'info', type: 'navigate', onPress: () => {} },
        { id: 'terms', label: 'Términos y Condiciones', icon: 'file-text', type: 'navigate', onPress: () => {} },
        { id: 'privacy', label: 'Privacidad', icon: 'lock', type: 'navigate', onPress: () => {} },
      ],
    },
    {
      id: 'support',
      title: 'Soporte',
      items: [
        { id: 'help', label: 'Centro de Ayuda', icon: 'help-circle', type: 'navigate', onPress: () => {} },
        { id: 'report', label: 'Reportar un Problema', icon: 'alert-circle', type: 'navigate', onPress: () => {} },
      ],
    },
  ];

  const handleLogout = () => {};
  const handleEditProfile = () => {};

  return { user, groups, isDark, handleLogout, handleEditProfile };
};