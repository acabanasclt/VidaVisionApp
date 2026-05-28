import React, { useCallback, useEffect, useRef } from 'react';
import { Animated, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Camera } from 'lucide-react-native';
import { useTheme } from '../../theme/useTheme';
import { fontSize, radius, rs, spacing } from '../../utils/responsive';

interface CameraPermissionOverlayProps {
  visible: boolean;
  onAllow: () => void;
  onDeny: () => void;
}

export const CameraPermissionOverlay = ({ visible, onAllow, onDeny }: CameraPermissionOverlayProps) => {
  const { colors } = useTheme();
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.92)).current;
  const isAnimating = useRef(false);

  useEffect(() => {
    if (visible) {
      isAnimating.current = true;
      Animated.parallel([
        Animated.timing(opacity, { toValue: 1, duration: 220, useNativeDriver: true }),
        Animated.spring(scale, { toValue: 1, tension: 120, friction: 9, useNativeDriver: true }),
      ]).start(() => { isAnimating.current = false; });
    }
  }, [visible]);

  const handleAllow = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    Animated.parallel([
      Animated.timing(opacity, { toValue: 0, duration: 180, useNativeDriver: true }),
      Animated.timing(scale, { toValue: 0.94, duration: 180, useNativeDriver: true }),
    ]).start(() => {
      onAllow();
    });
  }, [onAllow]);

  if (!visible) return null;

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="box-none">
      {/* Backdrop */}
      <Animated.View style={[
        StyleSheet.absoluteFill,
        { opacity, backgroundColor: 'rgba(0,0,0,0.7)' }
      ]} />

      {/* Card */}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} pointerEvents="box-none">
        <Animated.View style={{
          width: '85%',
          backgroundColor: colors.surfaceContainerLowest,
          borderRadius: radius.xl,
          padding: spacing.xl,
          gap: spacing.md,
          opacity,
          transform: [{ scale }],
        }}>

          {/* Ícono */}
          <View style={{
            width: rs(56),
            height: rs(56),
            borderRadius: rs(28),
            backgroundColor: `${colors.primary}15`,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
            <Camera size={rs(28)} color={colors.primary} />
          </View>

          {/* Texto */}
          <Text style={{
            fontSize: fontSize.lg,
            fontWeight: '700',
            color: colors.onSurface,
            textAlign: 'center',
            letterSpacing: -0.3,
          }}>
            Acceso a la Cámara
          </Text>
          <Text style={{
            fontSize: fontSize.sm,
            fontWeight: '300',
            color: colors.onSurfaceVariant,
            textAlign: 'center',
            lineHeight: spacing.xl,
          }}>
            VidaVision necesita acceso a tu cámara para escanear y diagnosticar tus cultivos.
          </Text>

          {/* Botones */}
          <View style={{ gap: spacing.sm, marginTop: spacing.sm }}>
            <TouchableOpacity
              onPress={handleAllow}
              activeOpacity={0.85}
              style={{
                backgroundColor: colors.primary,
                borderRadius: radius.lg,
                height: rs(48),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{ fontSize: fontSize.sm, fontWeight: '600', color: colors.onPrimary, letterSpacing: 0.5 }}>
                Permitir
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onDeny}
              activeOpacity={0.7}
              style={{
                height: rs(44),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{ fontSize: fontSize.sm, fontWeight: '400', color: colors.onSurfaceVariant }}>
                Ahora no
              </Text>
            </TouchableOpacity>
          </View>

        </Animated.View>
      </View>
    </View>
  );
};