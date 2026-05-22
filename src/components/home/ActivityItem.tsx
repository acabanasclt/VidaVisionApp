import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { Badge } from '../common/Badge';
import { useTheme } from '../../theme/useTheme';
import { fontSize, spacing, rs } from '../../utils/responsive';

type ActivityStatus = 'success' | 'error' | 'warning';

interface ActivityItemProps {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
  status: ActivityStatus;
  statusLabel: string;
  onPress?: () => void;
  showDivider?: boolean;
}

export const ActivityItem = ({ icon, iconBg, title, description, status, statusLabel, onPress, showDivider = true }: ActivityItemProps) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.md,
        borderBottomWidth: showDivider ? 1 : 0,
        borderBottomColor: colors.outlineVariant,
      }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, gap: spacing.md }}>
        <View style={{
          width: rs(44),
          height: rs(44),
          borderRadius: rs(22),
          backgroundColor: iconBg,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {icon}
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: fontSize.md, fontWeight: '600', color: colors.onSurface, marginBottom: spacing.xs }}>
            {title}
          </Text>
          <Text style={{ fontSize: fontSize.sm, fontWeight: '300', color: colors.onSurfaceVariant }}>
            {description}
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.sm }}>
        <Badge label={statusLabel} variant={status} />
        <ChevronRight size={rs(16)} color={colors.outlineVariant} />
      </View>
    </TouchableOpacity>
  );
};