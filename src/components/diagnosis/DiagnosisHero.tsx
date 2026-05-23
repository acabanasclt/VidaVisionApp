import React from 'react';
import { View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '../../theme/useTheme';
import { rs } from '../../utils/responsive';

interface DiagnosisHeroProps {
  imageUri?: string;
}

export const DiagnosisHero = ({ imageUri }: DiagnosisHeroProps) => {
  const { colors } = useTheme();

  return (
    <View style={{ width: '100%', height: rs(280), overflow: 'hidden' }}>
      {imageUri ? (
        <Image
          source={{ uri: imageUri }}
          style={{ width: '100%', height: '100%' }}
          resizeMode="cover"
        />
      ) : (
        <View style={{ flex: 1, backgroundColor: colors.surfaceContainerLow }} />
      )}
      <LinearGradient
        colors={['transparent', colors.background]}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: rs(160),
        }}
      />
    </View>
  );
};