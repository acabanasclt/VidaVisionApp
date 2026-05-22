import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, LogOut } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../theme/useTheme';
import { useSettings } from '../../hooks/useSettings';
import { Avatar } from '../../components/common/Avatar';
import { OutlineButton } from '../../components/common/OutlineButton';
import { SettingsGroup } from '../../components/settings/SettingsGroup';
import { fontSize, rs, spacing } from '../../utils/responsive';

export const SettingsScreen = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { user, groups, handleLogout, handleEditProfile } = useSettings();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['top']}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: colors.outlineVariant,
        justifyContent: 'space-between',
      }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.md }}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: spacing.xs }}>
            <ArrowLeft size={rs(22)} color={colors.primary} />
          </TouchableOpacity>
          <Text style={{ fontSize: fontSize.xl, fontWeight: '700', color: colors.primary, letterSpacing: -0.3 }}>
            Configuración
          </Text>
        </View>
        <Avatar name={user.name} uri={user.avatar} size={36} />
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: spacing.lg, gap: spacing.xl, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}>

        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: spacing.md,
          backgroundColor: colors.secondaryContainer,
          borderWidth: 1,
          borderColor: colors.outlineVariant,
          borderRadius: 20,
          padding: spacing.md,
        }}>
          <Avatar name={user.name} uri={user.avatar} size={64} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: fontSize.lg, fontWeight: '700', color: colors.primary }}>
              {user.name}
            </Text>
            <Text style={{ fontSize: fontSize.sm, color: colors.onSurfaceVariant }}>
              {user.role}
            </Text>
            <TouchableOpacity onPress={handleEditProfile} style={{ marginTop: spacing.xs }}>
              <Text style={{ fontSize: fontSize.xs, fontWeight: '700', color: colors.primary, letterSpacing: 1, textTransform: 'uppercase' }}>
                Editar Perfil
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {groups.map(group => (
          <SettingsGroup key={group.id} group={group} />
        ))}

        <OutlineButton
          label="Cerrar Sesión"
          icon={<LogOut size={rs(16)} color={colors.error} />}
          color={colors.error}
          onPress={handleLogout}
        />

        <Text style={{
          textAlign: 'center',
          fontSize: fontSize.xs,
          fontWeight: '600',
          color: colors.onSurfaceVariant,
          letterSpacing: 2,
          textTransform: 'uppercase',
        }}>
          Versión 1.0.0 (Build 1)
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};