import { useState, useEffect, useRef } from 'react';
import { Alert } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

type NavigationProp = StackNavigationProp<RootStackParamList>;

export const useScanner = () => {
  const navigation = useNavigation<NavigationProp>();
  const { hasPermission, requestPermission } = useCameraPermission();
  const device = useCameraDevice('back');
  const cameraRef = useRef<Camera>(null);
  const [flash, setFlash] = useState<'on' | 'off'>('off');
  const [isCapturing, setIsCapturing] = useState(false);

  useEffect(() => {
    if (!hasPermission) requestPermission();
  }, [hasPermission]);

  const toggleFlash = () => {
    setFlash(prev => prev === 'off' ? 'on' : 'off');
  };

  const navigateToDiagnosis = (imageUri: string) => {
    navigation.navigate('Diagnosis', {
      imageUri,
      confidence: 98.5,
      severity: 'Alto Severidad',
      severityVariant: 'error',
      phase: 'Fase: R3 (Temprana)',
      name: 'Roya de la Soja',
      scientificName: 'Phakopsora pachyrhizi',
      actionPlan: [
        { number: 1, title: 'Aplicación Inmediata', description: 'Se recomienda el uso de fungicidas sistémicos (triazoles + estrobirulinas) para frenar la dispersión en el lote actual.' },
        { number: 2, title: 'Monitoreo Intensivo', description: 'Inspeccionar el estrato inferior de las parcelas linderas cada 48 horas para detectar nuevas pústulas.' },
        { number: 3, title: 'Registro de Clima', description: 'Evaluar condiciones de alta humedad y temperaturas entre 18-25°C, ideales para la progresión del hongo.' },
      ],
      specialistNote: 'La detección en etapa R3 permite una intervención con alta probabilidad de éxito en el mantenimiento del rendimiento del cultivo.',
      canSave: true,
    });
  };

  const handleCapture = async () => {
    if (!cameraRef.current || isCapturing) return;
    setIsCapturing(true);
    try {
      const photo = await cameraRef.current.takePhoto({ flash });
      navigateToDiagnosis(`file://${photo.path}`);
    } catch (error) {
      Alert.alert('Error', 'No se pudo capturar la foto. Intentá de nuevo.');
    } finally {
      setIsCapturing(false);
    }
  };

  const handleGallery = async () => {
    const result = await launchImageLibrary({ mediaType: 'photo', quality: 1 });
    if (result.assets && result.assets[0]?.uri) {
      navigateToDiagnosis(result.assets[0].uri);
    }
  };

  const handleBack = () => navigation.goBack();

  return {
    cameraRef,
    device,
    hasPermission,
    flash,
    isCapturing,
    toggleFlash,
    handleCapture,
    handleGallery,
    handleBack,
  };
};