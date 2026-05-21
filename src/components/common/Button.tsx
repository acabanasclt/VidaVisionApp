import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, ViewStyle, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  loading?: boolean;
  style?: ViewStyle;
}

export const Button = ({ title, variant = 'primary', loading = false, disabled, style, ...props }: ButtonProps) => {
  const styles = {
    primary: { bg: disabled ? '#a5c4b0' : '#005129', text: '#ffffff' },
    secondary: { bg: '#f1f5ee', text: '#005129' },
    outline: { bg: 'transparent', text: '#005129' },
  };

  const s = styles[variant];

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      disabled={disabled || loading}
      style={[{
        backgroundColor: s.bg,
        borderRadius: 20,
        borderWidth: variant === 'outline' ? 1 : 0,
        borderColor: '#005129',
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
      }, style]}
      {...props}>
      {loading
        ? <ActivityIndicator color={s.text} />
        : <Text style={{ fontSize: 18, fontWeight: '300', color: s.text }}>{title}</Text>
      }
    </TouchableOpacity>
  );
};