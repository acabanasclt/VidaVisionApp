import React from 'react';
import { View } from 'react-native';
import { SectionTitle } from '../common/SectionTitle';
import { HistoryCard, HistoryCardData } from './HistoryCard';
import { spacing } from '../../utils/responsive';

interface HistorySectionProps {
  title: string;
  items: HistoryCardData[];
  onItemPress: (id: string) => void;
}

export const HistorySection = ({ title, items, onItemPress }: HistorySectionProps) => (
  <View style={{ gap: spacing.md }}>
    <SectionTitle title={title} />
    {items.map(item => (
      <HistoryCard key={item.id} item={item} onPress={onItemPress} />
    ))}
  </View>
);