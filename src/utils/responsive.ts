import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Dimensions, PixelRatio } from 'react-native';

const { width } = Dimensions.get('window');

// Escala de fuentes basada en ancho de pantalla
// Base: 390px (iPhone 14 / Pixel 7)
const scale = width / 390;

export const rf = (size: number) => Math.round(PixelRatio.roundToNearestPixel(size * scale));
export const rw = (percentage: number) => wp(`${percentage}%`);
export const rh = (percentage: number) => hp(`${percentage}%`);
export const rs = (size: number) => Math.round(size * scale);

// Espaciados estándar
export const spacing = {
  xs: rs(4),
  sm: rs(8),
  md: rs(16),
  lg: rs(20),
  xl: rs(24),
  xxl: rs(32),
};

// Tamaños de fuente estándar
export const fontSize = {
  xs: rf(11),
  sm: rf(13),
  md: rf(15),
  lg: rf(18),
  xl: rf(22),
  xxl: rf(28),
  xxxl: rf(36),
};

// Bordes redondeados estándar
export const radius = {
  sm: rs(8),
  md: rs(12),
  lg: rs(16),
  xl: rs(20),
  full: 999,
};