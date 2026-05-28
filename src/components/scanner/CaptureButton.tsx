import React from 'react';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Leaf } from 'lucide-react-native';
import { useTheme } from '../../theme/useTheme';
import { rs } from '../../utils/responsive';

interface CaptureButtonProps {
  onPress: () => void;
  isCapturing: boolean;
}

export const CaptureButton = ({ onPress, isCapturing }: CaptureButtonProps) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      disabled={isCapturing}
      style={{
        width: rs(80),
        height: rs(80),
        borderRadius: rs(40),
        borderWidth: 4,
        borderColor: 'rgba(255,255,255,0.4)',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={{
        width: rs(64),
        height: rs(64),
        borderRadius: rs(32),
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        shadowColor: colors.primary,
        shadowOpacity: 0.4,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
      }}>
        {isCapturing
          ? <ActivityIndicator color="#fff" />
          : <Leaf size={rs(28)} color="#fff" />
        }
      </View>
    </TouchableOpacity>
  );
};