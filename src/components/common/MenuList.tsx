import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { useTheme } from '../../theme/useTheme';
import { getIcon, IconName } from '../../utils/icons';
import { fontSize, radius, rs, spacing } from '../../utils/responsive';

export interface MenuListItem {
  id: string;
  label: string;
  icon: IconName;
  badge?: string;
  onPress: () => void;
}

interface MenuListProps {
  items: MenuListItem[];
}

export const MenuList = ({ items }: MenuListProps) => {
  const { colors } = useTheme();

  return (
    <View style={{
      backgroundColor: colors.surfaceContainerLowest,
      borderWidth: 1,
      borderColor: colors.outlineVariant,
      borderRadius: radius.xl,
      overflow: 'hidden',
    }}>
      {items.map((item, index) => (
        <TouchableOpacity
          key={item.id}
          onPress={item.onPress}
          activeOpacity={0.7}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: spacing.md,
            borderBottomWidth: index < items.length - 1 ? 1 : 0,
            borderBottomColor: colors.outlineVariant,
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.md }}>
            <View style={{
              width: rs(40),
              height: rs(40),
              borderRadius: rs(20),
              backgroundColor: colors.surfaceContainerHigh,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {getIcon(item.icon, rs(20), colors.primary)}
            </View>
            <Text style={{ fontSize: fontSize.md, color: colors.onSurface }}>
              {item.label}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.sm }}>
            {item.badge && (
              <Text style={{ fontSize: fontSize.xs, color: colors.primary, fontWeight: '600' }}>
                {item.badge}
              </Text>
            )}
            <ChevronRight size={rs(16)} color={colors.outline} />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};