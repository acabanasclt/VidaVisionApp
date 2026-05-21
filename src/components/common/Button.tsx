import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, View, TouchableOpacityProps } from 'react-native';
import { colors } from '../../utils/colors';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  loading?: boolean;
  leftIcon?: React.ReactNode;
}

export const Button = ({
  title,
  variant = 'primary',
  loading = false,
  leftIcon,
  disabled,
  ...props
}: ButtonProps) => {
  const styles = {
    primary: {
      bg: disabled ? '#A7C4B0' : colors.primary,
      text: colors.white,
      border: 'transparent',
    },
    secondary: {
      bg: colors.primaryLight,
      text: colors.primary,
      border: 'transparent',
    },
    outline: {
      bg: 'transparent',
      text: colors.primary,
      border: colors.primary,
    },
    ghost: {
      bg: 'transparent',
      text: colors.text.secondary,
      border: 'transparent',
    },
  };

  const s = styles[variant];

  return (
    <TouchableOpacity
      disabled={disabled || loading}
      activeOpacity={0.8}
      style={{
        backgroundColor: s.bg,
        borderWidth: variant === 'outline' ? 1 : 0,
        borderColor: s.border,
      }}
      className="h-14 rounded-2xl items-center justify-center flex-row"
      {...props}>
      {loading ? (
        <ActivityIndicator color={s.text} />
      ) : (
        <View className="flex-row items-center gap-2">
          {leftIcon}
          <Text className="text-base font-semibold" style={{ color: s.text }}>
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};