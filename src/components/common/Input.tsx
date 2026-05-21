import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TextInputProps } from 'react-native';

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
    <View style={{ marginBottom: 24 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <Text style={{ fontSize: 12, fontWeight: '600', letterSpacing: 1.2, color: '#404940', textTransform: 'uppercase' }}>
          {label}
        </Text>
        {rightLabel}
      </View>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f1f5ee',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: error ? '#ba1a1a' : focused ? '#005129' : '#bfc9be',
        paddingHorizontal: 16,
        height: 56,
      }}>
        {leftIcon && <View style={{ marginRight: 12 }}>{leftIcon}</View>}
        <TextInput
          style={{ flex: 1, fontSize: 16, color: '#181d19', fontWeight: '300' }}
          placeholderTextColor="#9ca3af"
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
        <Text style={{ fontSize: 12, color: '#ba1a1a', marginTop: 4 }}>{error}</Text>
      )}
    </View>
  );
};