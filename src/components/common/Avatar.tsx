import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useTheme } from '../../theme/useTheme';
import { rs } from '../../utils/responsive';

interface AvatarProps {
  name: string;
  uri?: string;
  size?: number;
  onPress?: () => void;
}

export const Avatar = ({ name, uri, size = 42, onPress }: AvatarProps) => {
  const { colors } = useTheme();
  const s = rs(size);

  const content = uri ? (
    <Image source={{ uri }} style={{ width: s, height: s }} resizeMode="cover" />
  ) : (
    <Text style={{ fontSize: rs(size * 0.38), fontWeight: '700', color: colors.primary }}>
      {name.charAt(0).toUpperCase()}
    </Text>
  );

  const containerStyle = {
    width: s,
    height: s,
    borderRadius: s / 2,
    backgroundColor: colors.primaryContainer,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    overflow: 'hidden' as const,
    borderWidth: 2,
    borderColor: colors.outlineVariant,
  };

  if (onPress) {
    return <TouchableOpacity onPress={onPress} style={containerStyle}>{content}</TouchableOpacity>;
  }

  return <View style={containerStyle}>{content}</View>;
};