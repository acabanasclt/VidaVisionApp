import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../theme/useTheme';
import { fontSize, radius, rs, spacing } from '../../utils/responsive';

interface ActionPlanCardProps {
  number: number;
  title: string;
  description: string;
}

export const ActionPlanCard = ({ number, title, description }: ActionPlanCardProps) => {
  const { colors } = useTheme();

  return (
    <View style={{
      backgroundColor: colors.surfaceContainerLow,
      borderWidth: 1,
      borderColor: colors.outlineVariant,
      borderRadius: radius.xl,
      padding: spacing.md,
      flexDirection: 'row',
      gap: spacing.md,
    }}>
      <Text style={{
        fontSize: rs(32),
        fontWeight: '700',
        color: `${colors.primary}30`,
        lineHeight: rs(36),
        width: rs(40),
      }}>
        {String(number).padStart(2, '0')}
      </Text>
      <View style={{ flex: 1, gap: spacing.xs }}>
        <Text style={{ fontSize: fontSize.md, fontWeight: '700', color: colors.onSurface }}>
          {title}
        </Text>
        <Text style={{ fontSize: fontSize.sm, fontWeight: '300', color: colors.onSurfaceVariant, lineHeight: spacing.xl }}>
          {description}
        </Text>
      </View>
    </View>
  );
};