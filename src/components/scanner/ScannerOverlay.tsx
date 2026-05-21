import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing } from 'react-native';

const VIEWFINDER_SIZE = 220;
const CORNER_SIZE = 28;
const CORNER_THICKNESS = 3;
const CORNER_COLOR = '#7afbb1';

export const ScannerOverlay = () => {
  const scanAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Línea de escaneo
    Animated.loop(
      Animated.sequence([
        Animated.timing(scanAnim, {
          toValue: 1,
          duration: 2500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(scanAnim, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Pulso de esquinas
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.03,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const scanLineY = scanAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, VIEWFINDER_SIZE],
  });

  return (
    <Animated.View style={{
      width: VIEWFINDER_SIZE,
      height: VIEWFINDER_SIZE,
      position: 'relative',
      transform: [{ scale: pulseAnim }],
    }}>

      {/* Esquina superior izquierda */}
      <View style={{
        position: 'absolute', top: 0, left: 0,
        width: CORNER_SIZE, height: CORNER_SIZE,
        borderTopWidth: CORNER_THICKNESS, borderLeftWidth: CORNER_THICKNESS,
        borderColor: CORNER_COLOR, borderTopLeftRadius: 6,
      }} />

      {/* Esquina superior derecha */}
      <View style={{
        position: 'absolute', top: 0, right: 0,
        width: CORNER_SIZE, height: CORNER_SIZE,
        borderTopWidth: CORNER_THICKNESS, borderRightWidth: CORNER_THICKNESS,
        borderColor: CORNER_COLOR, borderTopRightRadius: 6,
      }} />

      {/* Esquina inferior izquierda */}
      <View style={{
        position: 'absolute', bottom: 0, left: 0,
        width: CORNER_SIZE, height: CORNER_SIZE,
        borderBottomWidth: CORNER_THICKNESS, borderLeftWidth: CORNER_THICKNESS,
        borderColor: CORNER_COLOR, borderBottomLeftRadius: 6,
      }} />

      {/* Esquina inferior derecha */}
      <View style={{
        position: 'absolute', bottom: 0, right: 0,
        width: CORNER_SIZE, height: CORNER_SIZE,
        borderBottomWidth: CORNER_THICKNESS, borderRightWidth: CORNER_THICKNESS,
        borderColor: CORNER_COLOR, borderBottomRightRadius: 6,
      }} />

      {/* Línea de escaneo */}
      <Animated.View style={{
        position: 'absolute',
        left: 0,
        right: 0,
        height: 2,
        backgroundColor: CORNER_COLOR,
        shadowColor: CORNER_COLOR,
        shadowOpacity: 0.9,
        shadowRadius: 6,
        elevation: 4,
        transform: [{ translateY: scanLineY }],
      }} />

    </Animated.View>
  );
};