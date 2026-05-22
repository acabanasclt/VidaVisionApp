import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { useTheme } from '../../theme/useTheme';
import { fontSize, radius, spacing } from '../../utils/responsive';

interface SocialButtonProps extends TouchableOpacityProps {
  title: string;
  icon: React.ReactNode;
}

export const SocialButton = ({ title, icon, ...props }: SocialButtonProps) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.surfaceContainerLowest,
        borderRadius: radius.lg,
        borderWidth: 1,
        borderColor: colors.outlineVariant,
        height: spacing.xxl + spacing.sm,
        gap: spacing.sm,
      }}
      {...props}>
      {icon}
      <Text style={{ fontSize: fontSize.sm, fontWeight: '400', color: colors.primary }}>{title}</Text>
    </TouchableOpacity>
  );
};