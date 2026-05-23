import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../theme/useTheme';
import { fontSize, rs, spacing } from '../../utils/responsive';

interface ConfidenceScoreProps {
  score: number;
}

export const ConfidenceScore = ({ score }: ConfidenceScoreProps) => {
  const { colors } = useTheme();

  return (
    <View style={{ alignItems: 'center', marginTop: -rs(60), gap: spacing.xs }}>
      <Text style={{
        fontSize: fontSize.xs,
        fontWeight: '600',
        color: colors.primary,
        letterSpacing: 2,
        textTransform: 'uppercase',
      }}>
        Nivel de Confianza
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: rs(2) }}>
        <Text style={{
          fontSize: rs(64),
          fontWeight: '700',
          color: colors.primary,
          letterSpacing: -2,
          lineHeight: rs(72),
        }}>
          {score}
        </Text>
        <Text style={{
          fontSize: fontSize.xxl,
          fontWeight: '700',
          color: colors.primary,
          marginBottom: rs(8),
        }}>
          %
        </Text>
      </View>
    </View>
  );
};