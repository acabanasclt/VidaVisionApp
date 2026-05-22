import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { useTheme } from '../../theme/useTheme';
import { fontSize, radius, rs, spacing } from '../../utils/responsive';

interface OutlineButtonProps extends TouchableOpacityProps {
  label: string;
  icon?: React.ReactNode;
  color?: string;
}

export const OutlineButton = ({ label, icon, color, ...props }: OutlineButtonProps) => {
  const { colors } = useTheme();
  const c = color ?? colors.primary;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: spacing.sm,
        borderWidth: 1,
        borderColor: c,
        borderRadius: radius.full,
        padding: spacing.md,
      }}
      {...props}>
      {icon}
      <Text style={{ fontSize: fontSize.xs, fontWeight: '600', color: c, letterSpacing: 1, textTransform: 'uppercase' }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};