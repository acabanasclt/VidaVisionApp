import React from 'react';
import { StatusBar, StatusBarStyle } from 'react-native';
import { SafeAreaView, Edges } from 'react-native-safe-area-context';
import { colors } from '../../utils/colors';

interface Props {
  children: React.ReactNode;
  statusBarStyle?: StatusBarStyle;
  backgroundColor?: string;
  edges?: Edges;
}

/**
 * Wrapper global de pantalla.
 * - Aplica SafeAreaView con los bordes indicados (por defecto ['top']).
 * - Renderiza StatusBar con translucent=true y backgroundColor="transparent"
 *   para que funcione correctamente en modo edge-to-edge de Android (RN 0.74+).
 * - El color de fondo del área de status bar lo controla el propio SafeAreaView.
 *
 * Uso en pantallas claras (default):
 *   <ScreenWrapper>...</ScreenWrapper>
 *
 * Uso en pantallas oscuras (ej. Scanner):
 *   <ScreenWrapper statusBarStyle="light-content" backgroundColor={colors.inverseSurface}>
 */
export const ScreenWrapper = ({
  children,
  statusBarStyle = 'dark-content',
  backgroundColor = colors.background,
  edges = ['top'],
}: Props) => (
  <SafeAreaView style={{ flex: 1, backgroundColor }} edges={edges}>
    <StatusBar
      barStyle={statusBarStyle}
      backgroundColor="transparent"
      translucent
    />
    {children}
  </SafeAreaView>
);
