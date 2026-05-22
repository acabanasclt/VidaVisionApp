import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../theme/useTheme';
import { useHistory } from '../../hooks/useHistory';
import { SearchBar } from '../../components/common/SearchBar';
import { fontSize, spacing } from '../../utils/responsive';
import { HistorySection } from '../../components/history/HistorySection';

export const HistoryScreen = () => {
  const { colors } = useTheme();
  const { search, setSearch, filteredSections, handleItemPress } = useHistory();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['top']}>

      {/* Header fijo */}
      <View style={{
        paddingHorizontal: spacing.lg,
        paddingTop: spacing.xs,
        paddingBottom: spacing.sm,
        gap: spacing.sm,
      }}>
        <View style={{ gap: spacing.xs }}>
          <Text style={{ fontSize: fontSize.xxl, fontWeight: '700', color: colors.onSurface, letterSpacing: -0.3 }}>
            Historial de Análisis
          </Text>
          <Text style={{ fontSize: fontSize.sm, fontWeight: '300', color: colors.onSurfaceVariant }}>
            Consultá tus escaneos recientes y registros de salud vegetal.
          </Text>
        </View>

        <SearchBar
          placeholder="Buscar lote, cultivo o enfermedad..."
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Contenido scrolleable */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingHorizontal: spacing.lg,
          paddingTop: spacing.sm,
          gap: spacing.lg,
          paddingBottom: 100,
        }}
        showsVerticalScrollIndicator={false}>

        {filteredSections.length > 0 ? (
          filteredSections.map(section => (
            <HistorySection
              key={section.id}
              title={section.title}
              items={section.items}
              onItemPress={handleItemPress}
            />
          ))
        ) : (
          <View style={{ alignItems: 'center', paddingTop: spacing.xxl }}>
            <Text style={{ fontSize: fontSize.md, color: colors.onSurfaceVariant, fontWeight: '300' }}>
              No se encontraron resultados para "{search}"
            </Text>
          </View>
        )}

      </ScrollView>
    </SafeAreaView>
  );
};