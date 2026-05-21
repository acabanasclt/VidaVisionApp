import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, ViewStyle, TouchableOpacityProps } from 'react-native';
import { colors } from '../../utils/colors';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  loading?: boolean;
  style?: ViewStyle;
}

export const Button = ({ title, variant = 'primary', loading = false, disabled, style, ...props }: ButtonProps) => {
  const styles = {
    primary: { bg: disabled ? '#a5c4b0' : colors.primary, text: colors.onPrimary },
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
        borderRadius: 16,
        borderWidth: variant === 'outline' ? 1 : 0,
        borderColor: colors.primary,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }, style]}
      {...props}>
      {loading
        ? <ActivityIndicator color={s.text} />
        : <Text style={{ fontSize: 16, fontWeight: '400', color: s.text }}>{title}</Text>
      }
    </TouchableOpacity>
  );
};