import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TextInputProps } from 'react-native';
import { colors } from '../../utils/colors';
import { fontSize, radius, spacing } from '../../utils/responsive';

interface InputProps extends TextInputProps {
  label: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
  rightLabel?: React.ReactNode;
}

export const Input = ({
  label, error, leftIcon, rightIcon, onRightIconPress, rightLabel, ...props
}: InputProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <View style={{ marginBottom: spacing.md }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.xs }}>
        <Text style={{ fontSize: fontSize.xs, fontWeight: '600', letterSpacing: 1.2, color: colors.onSurfaceVariant, textTransform: 'uppercase' }}>
          {label}
        </Text>
        {rightLabel}
      </View>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.surfaceContainerLow,
        borderRadius: radius.lg,
        borderWidth: 1,
        borderColor: error ? colors.error : focused ? colors.primary : colors.outlineVariant,
        paddingHorizontal: spacing.md,
        height: spacing.xxl + spacing.md,
      }}>
        {leftIcon && <View style={{ marginRight: spacing.sm }}>{leftIcon}</View>}
        <TextInput
          style={{ flex: 1, fontSize: fontSize.md, color: colors.onSurface, fontWeight: '300' }}
          placeholderTextColor={colors.outline}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
        {rightIcon && <TouchableOpacity onPress={onRightIconPress}>{rightIcon}</TouchableOpacity>}
      </View>
      {error && <Text style={{ fontSize: fontSize.xs, color: colors.error, marginTop: spacing.xs }}>{error}</Text>}
    </View>
  );
};