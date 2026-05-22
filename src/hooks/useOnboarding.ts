import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

interface Slide {
    id: string;
    title: string;
    description: string;
    image: string | number;
    scanner: boolean;
}

const SLIDES: Slide[] = [
    {
        id: '1',
        title: 'Protege tus cultivos con IA',
        description: 'Detecta enfermedades al instante y recibe planes de acción personalizados.',
        image: require('../assets/images/proteje_tus_cultivos.png'),
        scanner: false,
    },
    {
        id: '2',
        title: 'Fotografiá tu planta',
        description: 'Apuntá la cámara a cualquier hoja o tallo que te preocupe. VidaVision detecta el problema en segundos.',
        image: require('../assets/images/fotografia_tu_planta.png'),
        scanner: true,
    },
    {
        id: '3',
        title: 'Actuá a tiempo',
        description: 'Recibí un plan de acción claro y preciso para proteger tu cosecha antes de que sea tarde.',
        image: require('../assets/images/actua_tiempo.jpeg'),
        scanner: false,
    },
];

type NavigationProp = StackNavigationProp<RootStackParamList>;

export const useOnboarding = (navigation: NavigationProp) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const isLast = currentIndex === SLIDES.length - 1;

    const goToLogin = async () => {
        await AsyncStorage.setItem('onboarding_completed', 'true');
        navigation.replace('Login');
    };

    const handleNext = async () => {
        if (isLast) {
            await goToLogin();
        } else {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const handleSkip = async () => {
        await goToLogin();
    };

    return {
        slides: SLIDES,
        currentIndex,
        isLast,
        handleNext,
        handleSkip,
    };
};