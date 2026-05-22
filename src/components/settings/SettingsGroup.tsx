import React from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { useTheme } from '../../theme/useTheme';
import { SectionTitle } from '../common/SectionTitle';
import { SettingsGroupData } from '../../hooks/useSettings';
import { getIcon } from '../../utils/icons';
import { fontSize, radius, rs, spacing } from '../../utils/responsive';

interface SettingsGroupProps {
  group: SettingsGroupData;
}

export const SettingsGroup = ({ group }: SettingsGroupProps) => {
  const { colors } = useTheme();

  return (
    <View>
      <SectionTitle title={group.title} />
      <View style={{
        backgroundColor: colors.surfaceContainerLowest,
        borderWidth: 1,
        borderColor: colors.outlineVariant,
        borderRadius: radius.xl,
        overflow: 'hidden',
      }}>
        {group.items.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            onPress={item.type !== 'toggle' ? item.onPress : undefined}
            activeOpacity={item.type === 'toggle' ? 1 : 0.7}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: spacing.md,
              borderBottomWidth: index < group.items.length - 1 ? 1 : 0,
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

            {item.type === 'toggle' && (
              <Switch
                value={item.toggleValue ?? false}
                onValueChange={item.onToggle}
                trackColor={{ false: colors.outlineVariant, true: colors.primary }}
                thumbColor={item.toggleValue ? colors.onPrimary : colors.surfaceContainerLowest}
              />
            )}
            {item.type === 'value' && (
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.xs }}>
                <Text style={{ fontSize: fontSize.sm, fontWeight: '600', color: colors.onSurfaceVariant }}>
                  {item.value}
                </Text>
                <ChevronRight size={rs(16)} color={colors.outline} />
              </View>
            )}
            {item.type === 'navigate' && (
              <ChevronRight size={rs(16)} color={colors.outline} />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};