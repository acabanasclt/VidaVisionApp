import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TextInputProps } from 'react-native';
import { colors } from '../../utils/colors';

interface InputProps extends TextInputProps {
  label: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
  rightLabel?: React.ReactNode;
}

export const Input = ({
  label,
  error,
  leftIcon,
  rightIcon,
  onRightIconPress,
  rightLabel,
  ...props
}: InputProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <View style={{ marginBottom: 16 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
        <Text style={{ fontSize: 11, fontWeight: '600', letterSpacing: 1.2, color: colors.onSurfaceVariant, textTransform: 'uppercase' }}>
          {label}
        </Text>
        {rightLabel}
      </View>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.surfaceContainerLow,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: error ? colors.error : focused ? colors.primary : colors.outlineVariant,
        paddingHorizontal: 14,
        height: 48,
      }}>
        {leftIcon && <View style={{ marginRight: 10 }}>{leftIcon}</View>}
        <TextInput
          style={{ flex: 1, fontSize: 15, color: colors.onSurface, fontWeight: '300' }}
          placeholderTextColor={colors.outline}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
        {rightIcon && (
          <TouchableOpacity onPress={onRightIconPress}>
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Text style={{ fontSize: 11, color: colors.error, marginTop: 3 }}>{error}</Text>
      )}
    </View>
  );
};