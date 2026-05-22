import React from 'react';
import { View, TextInput } from 'react-native';
import { Search } from 'lucide-react-native';
import { useTheme } from '../../theme/useTheme';
import { fontSize, radius, rs, spacing } from '../../utils/responsive';

interface SearchBarProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

export const SearchBar = ({ placeholder, value, onChangeText }: SearchBarProps) => {
  const { colors } = useTheme();

  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.surface,
      borderWidth: 1,
      borderColor: colors.outlineVariant,
      borderRadius: radius.lg,
      paddingHorizontal: spacing.md,
      height: rs(52),
      gap: spacing.sm,
    }}>
      <Search size={rs(18)} color={colors.outline} />
      <TextInput
        style={{
          flex: 1,
          fontSize: fontSize.md,
          color: colors.onSurface,
          fontWeight: '300',
        }}
        placeholder={placeholder}
        placeholderTextColor={colors.onSurfaceVariant}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};