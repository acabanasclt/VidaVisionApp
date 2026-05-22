import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../../utils/colors';
import { fontSize, spacing } from '../../utils/responsive';

interface DividerProps {
  label?: string;
}

export const Divider = ({ label }: DividerProps) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: spacing.xl }}>
    <View style={{ flex: 1, height: 1, backgroundColor: colors.outlineVariant }} />
    {label && (
      <Text style={{ marginHorizontal: spacing.md, fontSize: fontSize.xs, fontWeight: '600', letterSpacing: 1.2, color: colors.outline }}>
        {label}
      </Text>
    )}
    <View style={{ flex: 1, height: 1, backgroundColor: colors.outlineVariant }} />
  </View>
);