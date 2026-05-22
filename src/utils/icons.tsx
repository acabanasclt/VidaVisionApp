import React from 'react';
import {
  User, Bell, Shield, Languages, Ruler, Moon,
  Info, FileText, Lock, HelpCircle, AlertCircle,
  Map, Settings, Headphones, Layers, ScanLine,
  Camera, Home, BookOpen, Palette,
} from 'lucide-react-native';

type IconName =
  | 'user' | 'bell' | 'shield' | 'languages' | 'ruler' | 'moon'
  | 'info' | 'file-text' | 'lock' | 'help-circle' | 'alert-circle'
  | 'map' | 'settings' | 'headphones' | 'layers' | 'scan-line'
  | 'camera' | 'home' | 'book-open' | 'palette';

export type { IconName };

export const getIcon = (name: IconName, size: number, color: string): React.ReactNode => {
  const icons: Record<IconName, React.ReactNode> = {
    user: <User size={size} color={color} />,
    bell: <Bell size={size} color={color} />,
    shield: <Shield size={size} color={color} />,
    languages: <Languages size={size} color={color} />,
    ruler: <Ruler size={size} color={color} />,
    moon: <Moon size={size} color={color} />,
    info: <Info size={size} color={color} />,
    'file-text': <FileText size={size} color={color} />,
    lock: <Lock size={size} color={color} />,
    'help-circle': <HelpCircle size={size} color={color} />,
    'alert-circle': <AlertCircle size={size} color={color} />,
    map: <Map size={size} color={color} />,
    settings: <Settings size={size} color={color} />,
    headphones: <Headphones size={size} color={color} />,
    layers: <Layers size={size} color={color} />,
    'scan-line': <ScanLine size={size} color={color} />,
    camera: <Camera size={size} color={color} />,
    home: <Home size={size} color={color} />,
    'book-open': <BookOpen size={size} color={color} />,
    palette: <Palette size={size} color={color} />,
  };
  return icons[name] ?? null;
};