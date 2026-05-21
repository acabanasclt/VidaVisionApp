import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../../utils/colors';

interface DividerProps {
  label?: string;
}

export const Divider = ({ label }: DividerProps) => (
  <View className="flex-row items-center my-6">
    <View className="flex-1 h-px" style={{ backgroundColor: colors.border }} />
    {label && (
      <Text className="mx-4 text-sm" style={{ color: colors.text.light }}>
        {label}
      </Text>
    )}
    <View className="flex-1 h-px" style={{ backgroundColor: colors.border }} />
  </View>
);