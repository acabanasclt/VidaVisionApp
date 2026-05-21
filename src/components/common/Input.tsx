import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, TextInputProps } from 'react-native';
import { colors } from '../../utils/colors';

interface InputProps extends TextInputProps {
  label: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
}

export const Input = ({
  label,
  error,
  leftIcon,
  rightIcon,
  onRightIconPress,
  ...props
}: InputProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <View className="mb-4">
      <Text className="text-xs font-semibold tracking-widest uppercase mb-2"
        style={{ color: colors.text.secondary }}>
        {label}
      </Text>
      <View
        className="flex-row items-center rounded-2xl px-4 h-14"
        style={{
          backgroundColor: colors.white,
          borderWidth: 1,
          borderColor: focused ? colors.primary : error ? colors.status.danger : colors.border,
        }}>
        {leftIcon && <View className="mr-3">{leftIcon}</View>}
        <TextInput
          className="flex-1 text-base"
          style={{ color: colors.text.primary }}
          placeholderTextColor={colors.text.light}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
        {rightIcon && (
          <TouchableOpacity onPress={onRightIconPress} className="ml-3">
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Text className="text-xs mt-1" style={{ color: colors.status.danger }}>
          {error}
        </Text>
      )}
    </View>
  );
};