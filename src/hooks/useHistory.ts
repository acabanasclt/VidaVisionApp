import { useState, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';
import { HistoryCardData } from '../components/history/HistoryCard';

type NavigationProp = StackNavigationProp<RootStackParamList>;

export interface HistorySectionData {
  id: string;
  title: string;
  items: HistoryCardData[];
}

const ALL_ITEMS: HistoryCardData[] = [
  { id: '1', title: 'Soja Lote A', description: 'Roya Asiática detectada', action: 'Acción Requerida', time: '09:42 AM', status: 'error' },
  { id: '2', title: 'Maíz Sector Norte', description: 'Planta saludable', action: 'Óptimo', time: '16:15 PM', status: 'success' },
  { id: '3', title: 'Trigo Lote 3', description: 'Mancha foliar', action: 'Observación', time: '08:30 AM', status: 'warning' },
  { id: '4', title: 'Mandioca Parcela B', description: 'Planta saludable', action: 'Óptimo', time: '11:00 AM', status: 'success' },
  { id: '5', title: 'Poroto Lote 2', description: 'Antracnosis detectada', action: 'Acción Requerida', time: '07:15 AM', status: 'error' },
];

const SECTIONS: HistorySectionData[] = [
  { id: 'today', title: 'Hoy', items: [ALL_ITEMS[0]] },
  { id: 'yesterday', title: 'Ayer', items: [ALL_ITEMS[1], ALL_ITEMS[2]] },
  { id: 'week', title: 'Esta Semana', items: [ALL_ITEMS[3], ALL_ITEMS[4]] },
];

export const useHistory = () => {
  const navigation = useNavigation<NavigationProp>();
  const [search, setSearch] = useState('');

  const filteredSections = useMemo(() => {
    if (!search.trim()) return SECTIONS;

    return SECTIONS.map(section => ({
      ...section,
      items: section.items.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.action.toLowerCase().includes(search.toLowerCase())
      ),
    })).filter(section => section.items.length > 0);
  }, [search]);

  const handleItemPress = (id: string) => {
    // TODO: navegar a diagnóstico
  };

  return {
    search,
    setSearch,
    filteredSections,
    handleItemPress,
  };
};