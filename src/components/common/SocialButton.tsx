import React from 'react';
import { TouchableOpacity, Text, View, TouchableOpacityProps } from 'react-native';
import { colors } from '../../utils/colors';

interface SocialButtonProps extends TouchableOpacityProps {
  title: string;
  icon: React.ReactNode;
  dark?: boolean;
}

export const SocialButton = ({ title, icon, dark = false, ...props }: SocialButtonProps) => (
  <TouchableOpacity
    activeOpacity={0.8}
    className="h-14 rounded-2xl flex-row items-center justify-center"
    style={{
      backgroundColor: dark ? '#1A1A1A' : colors.white,
      borderWidth: dark ? 0 : 1,
      borderColor: colors.border,
    }}
    {...props}>
    <View className="mr-3">{icon}</View>
    <Text
      className="text-base font-medium"
      style={{ color: dark ? colors.white : colors.text.primary }}>
      {title}
    </Text>
  </TouchableOpacity>
);