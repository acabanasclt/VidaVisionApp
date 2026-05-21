import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { colors } from '../../utils/colors';

interface SocialButtonProps extends TouchableOpacityProps {
  title: string;
  icon: React.ReactNode;
}

export const SocialButton = ({ title, icon, ...props }: SocialButtonProps) => (
  <TouchableOpacity
    activeOpacity={0.8}
    style={{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.surfaceContainerLowest,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: colors.outlineVariant,
      height: 46,
      gap: 8,
    }}
    {...props}>
    {icon}
    <Text style={{ fontSize: 14, fontWeight: '400', color: colors.primary }}>{title}</Text>
  </TouchableOpacity>
);