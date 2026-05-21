import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../../utils/colors';

type BadgeVariant = 'success' | 'error' | 'warning' | 'info';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
}

const variantStyles = {
  success: { bg: `${colors.primary}18`, text: colors.primary },
  error: { bg: `${colors.error}18`, text: colors.error },
  warning: { bg: '#D9770618', text: '#D97706' },
  info: { bg: '#2563EB18', text: '#2563EB' },
};

export const Badge = ({ label, variant = 'success' }: BadgeProps) => {
  const s = variantStyles[variant];
  return (
    <View style={{
      backgroundColor: s.bg,
      borderRadius: 999,
      paddingHorizontal: 10,
      paddingVertical: 4,
    }}>
      <Text style={{
        fontSize: 11,
        fontWeight: '600',
        color: s.text,
        letterSpacing: 1,
        textTransform: 'uppercase',
      }}>
        {label}
      </Text>
    </View>
  );
};