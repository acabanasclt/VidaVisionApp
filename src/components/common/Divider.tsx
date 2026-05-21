import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../../utils/colors';

interface DividerProps {
  label?: string;
}

export const Divider = ({ label }: DividerProps) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 32 }}>
    <View style={{ flex: 1, height: 1, backgroundColor: colors.outlineVariant }} />
    {label && (
      <Text style={{ marginHorizontal: 16, fontSize: 12, fontWeight: '600', letterSpacing: 1.2, color: colors.outline }}>
        {label}
      </Text>
    )}
    <View style={{ flex: 1, height: 1, backgroundColor: colors.outlineVariant }} />
  </View>
);