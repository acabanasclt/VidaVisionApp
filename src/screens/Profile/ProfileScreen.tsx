import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MapPin, Layers, ScanLine, LogOut } from 'lucide-react-native';
import { useTheme } from '../../theme/useTheme';
import { useProfile } from '../../hooks/useProfile';
import { Avatar } from '../../components/common/Avatar';
import { Badge } from '../../components/common/Badge';
import { StatCard } from '../../components/home/StatCard';
import { MenuList } from '../../components/common/MenuList';
import { OutlineButton } from '../../components/common/OutlineButton';
import { SectionTitle } from '../../components/common/SectionTitle';
import { ConfirmDialog } from '../../components/common/ConfirmDialog';
import { fontSize, rs, spacing } from '../../utils/responsive';

export const ProfileScreen = () => {
  const { colors } = useTheme();
  const {
    user,
    stats,
    menuItems,
    showLogoutDialog,
    handleLogoutPress,
    handleLogoutConfirm,
    handleLogoutCancel,
  } = useProfile();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['top']}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}>

        {/* Header perfil */}
        <View style={{
          alignItems: 'center',
          paddingTop: spacing.xl,
          paddingBottom: spacing.xl,
          paddingHorizontal: spacing.lg,
          borderBottomWidth: 1,
          borderBottomColor: colors.outlineVariant,
          gap: spacing.sm,
        }}>
          <Avatar name={user.name} uri={user.avatar} size={100} />

          <Text style={{ fontSize: fontSize.xxl, fontWeight: '700', color: colors.primary, letterSpacing: -0.3 }}>
            {user.name}
          </Text>

          <Badge label={user.role} variant="success" />

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.xs }}>
            <MapPin size={rs(14)} color={colors.onSurfaceVariant} />
            <Text style={{ fontSize: fontSize.sm, color: colors.onSurfaceVariant }}>
              {user.location}
            </Text>
          </View>

          <Text style={{
            fontSize: fontSize.sm,
            fontWeight: '300',
            color: colors.onSurfaceVariant,
            textAlign: 'center',
            lineHeight: spacing.xl,
          }}>
            {user.bio}
          </Text>
        </View>

        <View style={{ padding: spacing.lg, gap: spacing.xl }}>

          <View>
            <SectionTitle title="Estadísticas Principales" />
            <View style={{ flexDirection: 'row', gap: spacing.md }}>
              <StatCard
                icon={<Layers size={rs(20)} color={colors.primary} />}
                value={stats[0].value}
                label={stats[0].label}
                sublabel=""
              />
              <StatCard
                icon={<ScanLine size={rs(20)} color={colors.primary} />}
                value={stats[1].value}
                label={stats[1].label}
                sublabel=""
              />
            </View>
          </View>

          <View>
            <SectionTitle title="Gestión de Cuenta" />
            <MenuList items={menuItems} />
          </View>

          <OutlineButton
            label="Cerrar Sesión"
            icon={<LogOut size={rs(16)} color={colors.error} />}
            color={colors.error}
            onPress={handleLogoutPress}
          />

        </View>
      </ScrollView>

      {/* Dialog de confirmación */}
      <ConfirmDialog
        visible={showLogoutDialog}
        title="Cerrar Sesión"
        message="¿Estás seguro que querés cerrar la sesión? Tendrás que volver a ingresar tus datos."
        confirmLabel="Cerrar Sesión"
        cancelLabel="Cancelar"
        confirmVariant="error"
        icon={<LogOut size={rs(28)} color={colors.error} />}
        onConfirm={handleLogoutConfirm}
        onCancel={handleLogoutCancel}
      />

    </SafeAreaView>
  );
};