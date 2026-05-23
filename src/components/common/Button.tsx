import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, View, ViewStyle, TouchableOpacityProps } from 'react-native';
import { useTheme } from '../../theme/useTheme';
import { fontSize, radius, spacing } from '../../utils/responsive';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  loading?: boolean;
  style?: ViewStyle;
  icon?: React.ReactNode;
}

export const Button = ({ title, variant = 'primary', loading = false, disabled, style, icon, ...props }: ButtonProps) => {
  const { colors } = useTheme();

  const styles = {
    primary: { bg: disabled ? colors.outline : colors.primary, text: colors.onPrimary },
    secondary: { bg: colors.surfaceContainerLow, text: colors.primary },
    outline: { bg: 'transparent', text: colors.primary },
  };
  const s = styles[variant];

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      disabled={disabled || loading}
      style={[{
        backgroundColor: s.bg,
        borderRadius: radius.lg,
        borderWidth: variant === 'outline' ? 1 : 0,
        borderColor: colors.primary,
        height: spacing.xxl + spacing.md,
        alignItems: 'center',
        justifyContent: 'center',
      }, style]}
      {...props}>
      {loading ? (
        <ActivityIndicator color={s.text} />
      ) : (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.sm }}>
          {icon}
          <Text style={{ fontSize: fontSize.md, fontWeight: '400', color: s.text }}>
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};