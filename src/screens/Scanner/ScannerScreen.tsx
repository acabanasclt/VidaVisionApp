import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Camera } from 'react-native-vision-camera';
import { Image } from 'lucide-react-native';
import { useTheme } from '../../theme/useTheme';
import { useScanner } from '../../hooks/useScanner';
import { ScannerControls } from '../../components/scanner/ScannerControls';
import { ScannerOverlay } from '../../components/scanner/ScannerOverlay';
import { CaptureButton } from '../../components/scanner/CaptureButton';
import { fontSize, rs, spacing } from '../../utils/responsive';

export const ScannerScreen = () => {
  const { colors } = useTheme();
  const {
    cameraRef,
    device,
    hasPermission,
    flash,
    isCapturing,
    toggleFlash,
    handleCapture,
    handleGallery,
    handleBack,
  } = useScanner();

  if (!device && hasPermission) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: '#fff', fontSize: fontSize.md }}>
          No se encontró cámara disponible.
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>

      {hasPermission && device && (
        <Camera
          ref={cameraRef}
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
          photo={true}
          torch={flash}
        />
      )}

      <View style={{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.3)',
      }} />

      <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom']}>
        <ScannerControls
          flash={flash}
          onBack={handleBack}
          onToggleFlash={toggleFlash}
        />

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: spacing.xl }}>
          <ScannerOverlay />
          <Text style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: fontSize.sm,
            fontWeight: '300',
            letterSpacing: 0.5,
          }}>
            Enfocá la hoja afectada
          </Text>
        </View>

        {/* Controles inferiores */}
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: spacing.xxl,
          paddingHorizontal: spacing.xl,
          position: 'relative',
        }}>
          {/* Botón galería */}
          <TouchableOpacity
            onPress={handleGallery}
            style={{
              position: 'absolute',
              left: spacing.xl,
              width: rs(44),
              height: rs(44),
              borderRadius: rs(22),
              backgroundColor: 'rgba(255,255,255,0.2)',
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: 'rgba(255,255,255,0.3)',
            }}>
            <Image size={rs(20)} color="#fff" />
          </TouchableOpacity>

          <CaptureButton
            onPress={handleCapture}
            isCapturing={isCapturing}
          />
        </View>
      </SafeAreaView>

    </View>
  );
};