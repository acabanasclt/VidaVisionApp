import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { colors } from '../../utils/colors';
import { fontSize, radius, spacing } from '../../utils/responsive';

interface StatCardProps {
  icon: React.ReactNode;
  value: number | string;
  label: string;
  sublabel: string;
  valueColor?: string;
  onPress?: () => void;
}

export const StatCard = ({ icon, value, label, sublabel, valueColor = colors.primary, onPress }: StatCardProps) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={{
      flex: 1,
      backgroundColor: colors.surfaceContainerLow,
      borderWidth: 1,
      borderColor: colors.outlineVariant,
      borderRadius: radius.xl,
      padding: spacing.md,
      gap: spacing.md,
    }}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      {icon}
      <Text style={{ fontSize: fontSize.xxl, fontWeight: '700', color: valueColor, letterSpacing: -0.5 }}>
        {value}
      </Text>
    </View>
    <View>
      <Text style={{ fontSize: fontSize.md, fontWeight: '400', color: colors.onSurface }}>
        {label}
      </Text>
      <Text style={{ fontSize: fontSize.xs, fontWeight: '600', color: colors.onSurfaceVariant, letterSpacing: 0.5, marginTop: spacing.xs }}>
        {sublabel}
      </Text>
    </View>
  </TouchableOpacity>
);