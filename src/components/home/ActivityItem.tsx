import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { colors } from '../../utils/colors';
import { Badge } from '../common/Badge';

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

export const ActivityItem = ({
  icon,
  iconBg,
  title,
  description,
  status,
  statusLabel,
  onPress,
  showDivider = true,
}: ActivityItemProps) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={onPress}
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 14,
      borderBottomWidth: showDivider ? 1 : 0,
      borderBottomColor: colors.outlineVariant,
    }}>
    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, gap: 12 }}>
      <View style={{
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: iconBg,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {icon}
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 16, fontWeight: '600', color: colors.onSurface, marginBottom: 2 }}>
          {title}
        </Text>
        <Text style={{ fontSize: 14, fontWeight: '300', color: colors.onSurfaceVariant }}>
          {description}
        </Text>
      </View>
    </View>
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
      <Badge label={statusLabel} variant={status} />
      <ChevronRight size={16} color={colors.outlineVariant} />
    </View>
  </TouchableOpacity>
);