import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../theme/useTheme';
import { fontSize, radius, spacing } from '../../utils/responsive';

interface DiagnosisBadgesProps {
  severity: string;
  severityVariant: 'error' | 'warning' | 'info';
  phase: string;
}

export const DiagnosisBadges = ({ severity, severityVariant, phase }: DiagnosisBadgesProps) => {
  const { colors } = useTheme();

  const severityColor = {
    error: { bg: colors.errorContainer, text: colors.error },
    warning: { bg: `${colors.tertiary}18`, text: colors.tertiary },
    info: { bg: colors.secondaryContainer, text: colors.secondary },
  }[severityVariant];

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', gap: spacing.sm, flexWrap: 'wrap' }}>
      <View style={{
        backgroundColor: severityColor.bg,
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.xs,
        borderRadius: radius.full,
      }}>
        <Text style={{ fontSize: fontSize.xs, fontWeight: '700', color: severityColor.text, letterSpacing: 1.5, textTransform: 'uppercase' }}>
          {severity}
        </Text>
      </View>
      <View style={{
        backgroundColor: colors.secondaryContainer,
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.xs,
        borderRadius: radius.full,
      }}>
        <Text style={{ fontSize: fontSize.xs, fontWeight: '700', color: colors.secondary, letterSpacing: 1.5, textTransform: 'uppercase' }}>
          {phase}
        </Text>
      </View>
    </View>
  );
};