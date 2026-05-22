import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AlertTriangle, ChevronRight } from 'lucide-react-native';
import { useTheme } from '../../theme/useTheme';
import { fontSize, radius, spacing, rs } from '../../utils/responsive';

interface HeroBannerProps {
  message: string;
  onPress?: () => void;
}

export const HeroBanner = ({ message, onPress }: HeroBannerProps) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={{
        backgroundColor: `${colors.error}12`,
        borderRadius: radius.lg,
        borderWidth: 1,
        borderColor: `${colors.error}30`,
        padding: spacing.md,
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.md,
      }}>
      <View style={{
        width: rs(36),
        height: rs(36),
        borderRadius: rs(18),
        backgroundColor: `${colors.error}18`,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <AlertTriangle size={rs(18)} color={colors.error} />
      </View>
      <Text style={{ flex: 1, fontSize: fontSize.sm, fontWeight: '400', color: colors.onSurface, lineHeight: spacing.xl }}>
        {message}
      </Text>
      <ChevronRight size={rs(16)} color={colors.outline} />
    </TouchableOpacity>
  );
};