import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { colors } from '../../utils/colors';

interface StatCardProps {
  icon: React.ReactNode;
  value: number | string;
  label: string;
  sublabel: string;
  valueColor?: string;
  onPress?: () => void;
}

export const StatCard = ({
  icon,
  value,
  label,
  sublabel,
  valueColor = colors.primary,
  onPress,
}: StatCardProps) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={{
      flex: 1,
      backgroundColor: colors.surfaceContainerLow,
      borderWidth: 1,
      borderColor: colors.outlineVariant,
      borderRadius: 20,
      padding: 16,
      gap: 12,
    }}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      {icon}
      <Text style={{
        fontSize: 28,
        fontWeight: '700',
        color: valueColor,
        letterSpacing: -0.5,
      }}>
        {value}
      </Text>
    </View>
    <View>
      <Text style={{ fontSize: 15, fontWeight: '400', color: colors.onSurface }}>
        {label}
      </Text>
      <Text style={{ fontSize: 11, fontWeight: '600', color: colors.onSurfaceVariant, letterSpacing: 0.5, marginTop: 2 }}>
        {sublabel}
      </Text>
    </View>
  </TouchableOpacity>
);