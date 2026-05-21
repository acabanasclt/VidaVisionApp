import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../../utils/colors';

interface SectionTitleProps {
  title: string;
}

export const SectionTitle = ({ title }: SectionTitleProps) => (
  <View style={{
    borderBottomWidth: 1,
    borderBottomColor: colors.outlineVariant,
    paddingBottom: 8,
    marginBottom: 16,
  }}>
    <Text style={{
      fontSize: 11,
      fontWeight: '600',
      letterSpacing: 1.5,
      color: colors.onSurfaceVariant,
      textTransform: 'uppercase',
    }}>
      {title}
    </Text>
  </View>
);