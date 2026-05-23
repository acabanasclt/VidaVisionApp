import React from 'react';
import { View, Text } from 'react-native';
import { Info } from 'lucide-react-native';
import { useTheme } from '../../theme/useTheme';
import { fontSize, radius, rs, spacing } from '../../utils/responsive';

interface SpecialistNoteProps {
  note: string;
}

export const SpecialistNote = ({ note }: SpecialistNoteProps) => {
  const { colors } = useTheme();

  return (
    <View style={{
      backgroundColor: `${colors.primary}08`,
      borderWidth: 1,
      borderColor: `${colors.primary}15`,
      borderRadius: radius.xl,
      padding: spacing.md,
      gap: spacing.sm,
    }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.sm }}>
        <Info size={rs(18)} color={colors.primary} />
        <Text style={{ fontSize: fontSize.md, fontWeight: '700', color: colors.primary }}>
          Nota del Especialista
        </Text>
      </View>
      <Text style={{ fontSize: fontSize.sm, fontWeight: '300', color: `${colors.primary}CC`, lineHeight: spacing.xl }}>
        {note}
      </Text>
    </View>
  );
};