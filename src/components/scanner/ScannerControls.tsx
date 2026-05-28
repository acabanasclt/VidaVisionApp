import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { ArrowLeft, Zap, ZapOff } from 'lucide-react-native';
import { useTheme } from '../../theme/useTheme';
import { rs, spacing } from '../../utils/responsive';

interface ScannerControlsProps {
  flash: 'on' | 'off';
  onBack: () => void;
  onToggleFlash: () => void;
}

export const ScannerControls = ({ flash, onBack, onToggleFlash }: ScannerControlsProps) => {
  const { colors } = useTheme();

  const btnStyle = {
    width: rs(44),
    height: rs(44),
    borderRadius: rs(22),
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  };

  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.md,
    }}>
      <TouchableOpacity onPress={onBack} style={btnStyle}>
        <ArrowLeft size={rs(20)} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity onPress={onToggleFlash} style={btnStyle}>
        {flash === 'on'
          ? <Zap size={rs(20)} color="#fff" />
          : <ZapOff size={rs(20)} color="#fff" />
        }
      </TouchableOpacity>
    </View>
  );
};