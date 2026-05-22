import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Bell } from 'lucide-react-native';
import { colors } from '../../utils/colors';
import { fontSize, radius, spacing, rs } from '../../utils/responsive';

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
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: colors.outlineVariant,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }}>
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.md }}>
      <TouchableOpacity
        onPress={onAvatarPress}
        style={{
          width: rs(42),
          height: rs(42),
          borderRadius: rs(21),
          backgroundColor: colors.primaryContainer,
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}>
        {avatar ? (
          <Image source={{ uri: avatar }} style={{ width: rs(42), height: rs(42) }} />
        ) : (
          <Text style={{ fontSize: fontSize.md, fontWeight: '700', color: colors.primary }}>
            {name.charAt(0).toUpperCase()}
          </Text>
        )}
      </TouchableOpacity>
      <View>
        <Text style={{ fontSize: fontSize.xs, fontWeight: '400', color: colors.onSurfaceVariant }}>
          {getGreeting()}
        </Text>
        <Text style={{ fontSize: fontSize.lg, fontWeight: '700', color: colors.onBackground, letterSpacing: -0.3 }}>
          {name} 👋
        </Text>
      </View>
    </View>

    <TouchableOpacity onPress={onNotificationsPress} style={{ padding: spacing.sm, position: 'relative' }}>
      <Bell size={rs(22)} color={colors.primary} />
      {hasNotifications && (
        <View style={{
          position: 'absolute',
          top: spacing.sm,
          right: spacing.sm,
          width: rs(8),
          height: rs(8),
          borderRadius: rs(4),
          backgroundColor: colors.error,
        }} />
      )}
    </TouchableOpacity>
  </View>
);