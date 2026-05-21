import { useState } from 'react';

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
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqkDBcg4zdAGLZegUDWgS-x1oAGUWL_ynoxOrQWniZ-8cEa0l3owv-gug-XgAQBaNlxqF9Y_U3QOuc6HkfOYCwDK6DtGS8gMv7GrudV6yzoyLpdb7ANiDvJHYgJ7mOj8X5ZQh60mOiTo8OE82PJOL1FJRldHrpF_abh1oHWGGC2rTSmPkE2pYLPCoiSp52L_90HCyZWJtTIBAOkHuby8AXT3I37Mj7V_VD81LYTe0MoNpy4KR5w8S_LjSkrrLHd0XIPis2nxkuOQ',
    scanner: false,
  },
  {
    id: '2',
    title: 'Fotografiá tu planta',
    description: 'Apuntá la cámara a cualquier hoja o tallo que te preocupe. VidaVision detecta el problema en segundos.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkUGy1Sp0De6CHnWR3FgHPPmbpGiLtpuXQ9JD9_y_fLqHHddNb9dKcTt0cAVUQXlkJcu3wNUuOoLDwEEMFWXIIpxP_r_T2kniJJQ-XI6-4i194nKm0-YcmoiFApDxGSR2fUNTYVe3DVpK_Uw6fw0go3CT1chVacwP5gl6zkhqqEvmyNJ7szk-wqNDdC1y9xePvnf_R0R47D35FO7GUiEnkotiHMSGnDTDc4bwNhAb7m8mSSXwLNOAYb90pbPxlXlRONAPgn6Mv4A',
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

export const useOnboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isLast = currentIndex === SLIDES.length - 1;

  const handleNext = () => {
    if (!isLast) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // TODO: navegar a Home
    }
  };

  const handleSkip = () => {
    // TODO: navegar a Home
  };

  return {
    slides: SLIDES,
    currentIndex,
    isLast,
    handleNext,
    handleSkip,
  };
};