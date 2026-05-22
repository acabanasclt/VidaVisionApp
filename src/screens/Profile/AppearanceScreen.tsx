import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../theme/useTheme';
import { ThemeSelector } from '../../components/profile/ThemeSelector';
import { SectionTitle } from '../../components/common/SectionTitle';
import { fontSize, rs, spacing } from '../../utils/responsive';

export const AppearanceScreen = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={['top']}>
      {/* Header */}
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: colors.outlineVariant,
        gap: spacing.md,
      }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: spacing.xs }}>
          <ArrowLeft size={rs(22)} color={colors.primary} />
        </TouchableOpacity>
        <Text style={{ fontSize: fontSize.xl, fontWeight: '700', color: colors.primary, letterSpacing: -0.3 }}>
          Diseño
        </Text>
      </View>

      <View style={{ padding: spacing.lg, gap: spacing.xl }}>
        <SectionTitle title="Apariencia" />
        <ThemeSelector />
      </View>
    </SafeAreaView>
  );
};