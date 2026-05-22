import React from 'react';
import { View, Text, Switch } from 'react-native';
import { Moon, Sun } from 'lucide-react-native';
import { useTheme } from '../../theme/useTheme';
import { fontSize, radius, rs, spacing } from '../../utils/responsive';

export const ThemeSelector = () => {
  const { colors, isDark, toggleDark } = useTheme();

  return (
    <View style={{
      backgroundColor: colors.surfaceContainerLowest,
      borderWidth: 1,
      borderColor: colors.outlineVariant,
      borderRadius: radius.xl,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.md,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
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
          {isDark
            ? <Moon size={rs(20)} color={colors.primary} />
            : <Sun size={rs(20)} color={colors.primary} />
          }
        </View>
        <View>
          <Text style={{ fontSize: fontSize.md, color: colors.onSurface }}>
            Modo Oscuro
          </Text>
          <Text style={{ fontSize: fontSize.xs, color: colors.onSurfaceVariant }}>
            {isDark ? 'Activado' : 'Desactivado'}
          </Text>
        </View>
      </View>
      <Switch
        value={isDark}
        onValueChange={toggleDark}
        trackColor={{ false: colors.outlineVariant, true: colors.primary }}
        thumbColor={isDark ? colors.onPrimary : colors.surfaceContainerLowest}
      />
    </View>
  );
};