import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AlertTriangle, ChevronRight } from 'lucide-react-native';
import { colors } from '../../utils/colors';

interface HeroBannerProps {
  message: string;
  onPress?: () => void;
}

export const HeroBanner = ({ message, onPress }: HeroBannerProps) => (
  <TouchableOpacity
    activeOpacity={0.85}
    onPress={onPress}
    style={{
      backgroundColor: `${colors.error}12`,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: `${colors.error}30`,
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    }}>
    <View style={{
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: `${colors.error}18`,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <AlertTriangle size={18} color={colors.error} />
    </View>
    <Text style={{
      flex: 1,
      fontSize: 14,
      fontWeight: '400',
      color: colors.onSurface,
      lineHeight: 20,
    }}>
      {message}
    </Text>
    <ChevronRight size={16} color={colors.outline} />
  </TouchableOpacity>
);