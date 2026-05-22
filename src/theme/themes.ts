export type Theme = 'light' | 'dark' | 'green';

export interface ColorScheme {
  primary: string;
  primaryContainer: string;
  primaryFixed: string;
  primaryFixedDim: string;
  onPrimary: string;
  onPrimaryContainer: string;
  background: string;
  surface: string;
  surfaceBright: string;
  surfaceContainerLowest: string;
  surfaceContainerLow: string;
  surfaceContainer: string;
  surfaceContainerHigh: string;
  surfaceContainerHighest: string;
  surfaceDim: string;
  onBackground: string;
  onSurface: string;
  onSurfaceVariant: string;
  outline: string;
  outlineVariant: string;
  secondary: string;
  onSecondary: string;
  secondaryContainer: string;
  tertiary: string;
  onTertiary: string;
  error: string;
  errorContainer: string;
  onError: string;
  inversePrimary: string;
  inverseSurface: string;
  inverseOnSurface: string;
}

export const lightTheme: ColorScheme = {
  primary: '#005129',
  primaryContainer: '#1a6b3c',
  primaryFixed: '#a5f4b8',
  primaryFixedDim: '#89d89e',
  onPrimary: '#ffffff',
  onPrimaryContainer: '#9ae9ae',
  background: '#f7faf3',
  surface: '#f7faf3',
  surfaceBright: '#f7faf3',
  surfaceContainerLowest: '#ffffff',
  surfaceContainerLow: '#f1f5ee',
  surfaceContainer: '#ebefe8',
  surfaceContainerHigh: '#e6e9e2',
  surfaceContainerHighest: '#e0e4dd',
  surfaceDim: '#d7dbd4',
  onBackground: '#181d19',
  onSurface: '#181d19',
  onSurfaceVariant: '#404940',
  outline: '#707a70',
  outlineVariant: '#bfc9be',
  secondary: '#59605c',
  onSecondary: '#ffffff',
  secondaryContainer: '#dae1dd',
  tertiary: '#782c38',
  onTertiary: '#ffffff',
  error: '#ba1a1a',
  errorContainer: '#ffdad6',
  onError: '#ffffff',
  inversePrimary: '#89d89e',
  inverseSurface: '#2d322d',
  inverseOnSurface: '#eef2eb',
};

export const darkTheme: ColorScheme = {
  primary: '#89d89e',
  primaryContainer: '#005129',
  primaryFixed: '#a5f4b8',
  primaryFixedDim: '#89d89e',
  onPrimary: '#00391e',
  onPrimaryContainer: '#9ae9ae',
  background: '#0f1410',
  surface: '#0f1410',
  surfaceBright: '#353a34',
  surfaceContainerLowest: '#0a0f0b',
  surfaceContainerLow: '#181d19',
  surfaceContainer: '#1c211d',
  surfaceContainerHigh: '#272b27',
  surfaceContainerHighest: '#313630',
  surfaceDim: '#0f1410',
  onBackground: '#dde4dd',
  onSurface: '#dde4dd',
  onSurfaceVariant: '#bfc9be',
  outline: '#8a9489',
  outlineVariant: '#404940',
  secondary: '#b3bcb5',
  onSecondary: '#1e261f',
  secondaryContainer: '#354038',
  tertiary: '#ffb2b9',
  onTertiary: '#4a0014',
  error: '#ffb4ab',
  errorContainer: '#93000a',
  onError: '#690005',
  inversePrimary: '#005129',
  inverseSurface: '#dde4dd',
  inverseOnSurface: '#2d322d',
};

export const greenTheme: ColorScheme = {
  primary: '#7afbb1',
  primaryContainer: '#2d6e4e',
  primaryFixed: '#7afbb1',
  primaryFixedDim: '#5cde97',
  onPrimary: '#00391e',
  onPrimaryContainer: '#c8ffd9',
  background: '#0d1f16',
  surface: '#0d1f16',
  surfaceBright: '#1e3829',
  surfaceContainerLowest: '#081209',
  surfaceContainerLow: '#111e13',
  surfaceContainer: '#152318',
  surfaceContainerHigh: '#1e3224',
  surfaceContainerHighest: '#253d2b',
  surfaceDim: '#0d1f16',
  onBackground: '#d0f0dc',
  onSurface: '#d0f0dc',
  onSurfaceVariant: '#a8c5b5',
  outline: '#6e9a80',
  outlineVariant: '#2d5040',
  secondary: '#8cbfa0',
  onSecondary: '#0a2016',
  secondaryContainer: '#1a3d2b',
  tertiary: '#ffb2b9',
  onTertiary: '#4a0014',
  error: '#ffb4ab',
  errorContainer: '#93000a',
  onError: '#690005',
  inversePrimary: '#005129',
  inverseSurface: '#d0f0dc',
  inverseOnSurface: '#0d1f16',
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
  green: greenTheme,
};