import React from 'react';
import { TouchableOpacity, Text, View, TouchableOpacityProps } from 'react-native';

interface SocialButtonProps extends TouchableOpacityProps {
  title: string;
  icon: React.ReactNode;
}

export const SocialButton = ({ title, icon, ...props }: SocialButtonProps) => (
  <TouchableOpacity
    activeOpacity={0.8}
    style={{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff',
      borderRadius: 20,
      borderWidth: 1,
      borderColor: '#bfc9be',
      height: 52,
      gap: 8,
    }}
    {...props}>
    {icon}
    <Text style={{ fontSize: 16, fontWeight: '300', color: '#005129' }}>{title}</Text>
  </TouchableOpacity>
);