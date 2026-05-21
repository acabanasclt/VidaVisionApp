import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Bell } from 'lucide-react-native';
import { colors } from '../../utils/colors';

interface HeaderProps {
  name: string;
  avatar?: string;
  hasNotifications?: boolean;
  onNotificationsPress?: () => void;
  onAvatarPress?: () => void;
}

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Buenos días';
  if (hour < 18) return 'Buenas tardes';
  return 'Buenas noches';
};

export const Header = ({ name, avatar, hasNotifications = false, onNotificationsPress, onAvatarPress }: HeaderProps) => (
  <View style={{
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: colors.outlineVariant,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }}>

    {/* Avatar + saludo */}
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
  <TouchableOpacity
    onPress={onAvatarPress}
    style={{
      width: 42,
      height: 42,
      borderRadius: 21,
      backgroundColor: colors.primaryContainer,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
    {avatar ? (
      <Image source={{ uri: avatar }} style={{ width: 42, height: 42 }} />
    ) : (
      <Text style={{
        fontSize: 16,
        fontWeight: '700',
        color: colors.primary,
      }}>
        {name.charAt(0).toUpperCase()}
      </Text>
    )}
  </TouchableOpacity>
  <View>
    <Text style={{
      fontSize: 12,
      fontWeight: '400',
      color: colors.onSurfaceVariant,
    }}>
      {getGreeting()}
    </Text>
    <Text style={{
      fontSize: 18,
      fontWeight: '700',
      color: colors.onBackground,
      letterSpacing: -0.3,
    }}>
      {name} 👋
    </Text>
  </View>
</View>

    {/* Notificaciones */}
    <TouchableOpacity onPress={onNotificationsPress} style={{ padding: 8, position: 'relative' }}>
      <Bell size={22} color={colors.primary} />
      {hasNotifications && (
        <View style={{
          position: 'absolute',
          top: 8,
          right: 8,
          width: 8,
          height: 8,
          borderRadius: 4,
          backgroundColor: colors.error,
        }} />
      )}
    </TouchableOpacity>
  </View>
);