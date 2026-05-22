import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../theme/useTheme';
import { fontSize, spacing } from '../../utils/responsive';

interface SectionTitleProps {
  title: string;
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
  const { colors } = useTheme();
  return (
    <View style={{ borderBottomWidth: 1, borderBottomColor: colors.outlineVariant, paddingBottom: spacing.sm, marginBottom: spacing.md }}>
      <Text style={{ fontSize: fontSize.xs, fontWeight: '600', letterSpacing: 1.5, color: colors.onSurfaceVariant, textTransform: 'uppercase' }}>
        {title}
      </Text>
    </View>
  );
};