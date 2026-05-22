import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ArrowRight } from 'lucide-react-native';
import { useTheme } from '../../theme/useTheme';
import { Badge } from '../common/Badge';
import { fontSize, radius, rs, spacing } from '../../utils/responsive';

type HistoryStatus = 'success' | 'error' | 'warning' | 'info';

export interface HistoryCardData {
  id: string;
  title: string;
  description: string;
  action: string;
  time: string;
  status: HistoryStatus;
}

interface HistoryCardProps {
  item: HistoryCardData;
  onPress: (id: string) => void;
}

export const HistoryCard = ({ item, onPress }: HistoryCardProps) => {
  const { colors } = useTheme();

  const statusColor: Record<HistoryStatus, string> = {
    success: colors.primary,
    error: colors.error,
    warning: colors.tertiary,
    info: colors.outline,
  };

  return (
    <View style={{
      backgroundColor: colors.surfaceContainerLow,
      borderWidth: 1,
      borderColor: colors.outlineVariant,
      borderRadius: radius.xl,
      padding: spacing.md,
      gap: spacing.md,
    }}>
      {/* Header */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <View style={{ flex: 1, gap: spacing.xs }}>
          <Text style={{ fontSize: fontSize.lg, fontWeight: '700', color: colors.onSurface }}>
            {item.title}
          </Text>
          <Text style={{ fontSize: fontSize.md, fontWeight: '300', color: statusColor[item.status] }}>
            {item.description}
          </Text>
        </View>
        <Text style={{ fontSize: fontSize.xs, fontWeight: '600', color: colors.outline, letterSpacing: 0.5 }}>
          {item.time}
        </Text>
      </View>

      {/* Footer */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Badge label={item.action} variant={item.status} />
        <TouchableOpacity
          onPress={() => onPress(item.id)}
          activeOpacity={0.7}
          style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.xs }}>
          <Text style={{ fontSize: fontSize.xs, fontWeight: '600', color: colors.primary, letterSpacing: 1, textTransform: 'uppercase' }}>
            Ver detalles
          </Text>
          <ArrowRight size={rs(14)} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};