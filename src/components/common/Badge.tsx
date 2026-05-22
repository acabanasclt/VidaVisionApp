import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../theme/useTheme';
import { fontSize, spacing, radius } from '../../utils/responsive';

type BadgeVariant = 'success' | 'error' | 'warning' | 'info';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
}

export const Badge = ({ label, variant = 'success' }: BadgeProps) => {
  const { colors } = useTheme();

  const variantStyles = {
    success: { bg: `${colors.primary}18`, text: colors.primary },
    error: { bg: `${colors.error}18`, text: colors.error },
    warning: { bg: '#D9770618', text: '#D97706' },
    info: { bg: '#2563EB18', text: '#2563EB' },
  };

  const s = variantStyles[variant];

  return (
    <View style={{ backgroundColor: s.bg, borderRadius: radius.full, paddingHorizontal: spacing.sm + spacing.xs, paddingVertical: spacing.xs }}>
      <Text style={{ fontSize: fontSize.xs, fontWeight: '600', color: s.text, letterSpacing: 1, textTransform: 'uppercase' }}>
        {label}
      </Text>
    </View>
  );
};