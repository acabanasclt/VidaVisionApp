import React from 'react';
import { View, ScrollView } from 'react-native';
import { ShieldCheck, AlertTriangle, Layers, Leaf, Bug } from 'lucide-react-native';
import { Header } from '../../components/layout/Header';
import { HeroBanner } from '../../components/home/HeroBanner';
import { StatCard } from '../../components/home/StatCard';
import { ActivityItem } from '../../components/home/ActivityItem';
import { SectionTitle } from '../../components/common/SectionTitle';
import { useHome } from '../../hooks/useHome';
import { colors } from '../../utils/colors';

export const HomeScreen = () => {
  const {
    user,
    recentActivity,
    handleNotifications,
    handleStatPress,
    handleActivityPress,
  } = useHome();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <Header
        name={user.name}
        hasNotifications
        onNotificationsPress={handleNotifications}
      />

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 20, gap: 20, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}>

        {/* Alerta banner */}
        <HeroBanner
          message="Alerta estacional activa — Temporada de roya en maíz. Revisá tus parcelas."
          onPress={() => handleStatPress('alert')}
        />

        {/* Stats */}
        <View>
          <SectionTitle title="Resumen del Día" />
          <View style={{ gap: 12 }}>
            <View style={{ flexDirection: 'row', gap: 12 }}>
              <StatCard
                icon={<ShieldCheck size={24} color={colors.primary} />}
                value={12}
                label="Diagnósticos"
                sublabel="Últimos 7 días"
                onPress={() => handleStatPress('diagnosis')}
              />
              <StatCard
                icon={<AlertTriangle size={24} color={colors.error} />}
                value={3}
                label="Alertas"
                sublabel="Requieren atención"
                valueColor={colors.error}
                onPress={() => handleStatPress('alert')}
              />
            </View>
            <StatCard
              icon={<Layers size={24} color={colors.primary} />}
              value={2}
              label="Parcelas"
              sublabel="Monitoreadas activamente"
              onPress={() => handleStatPress('parcel')}
            />
          </View>
        </View>

        {/* Actividad reciente */}
        <View>
          <SectionTitle title="Actividad Reciente" />
          <View style={{
            backgroundColor: colors.surfaceContainerLowest,
            borderWidth: 1,
            borderColor: colors.outlineVariant,
            borderRadius: 20,
            overflow: 'hidden',
          }}>
            {recentActivity.map((item, index) => (
              <ActivityItem
                key={item.id}
                icon={item.type === 'healthy'
                  ? <Leaf size={20} color={colors.onPrimaryContainer} />
                  : <Bug size={20} color={colors.error} />}
                iconBg={item.type === 'healthy'
                  ? colors.primaryContainer
                  : colors.errorContainer}
                title={item.title}
                description={item.description}
                status={item.status}
                statusLabel={item.statusLabel}
                onPress={() => handleActivityPress(item.id)}
                showDivider={index < recentActivity.length - 1}
              />
            ))}
          </View>
        </View>

      </ScrollView>
    </View>
  );
};