import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import { useTheme } from '../../theme/useTheme';
import { Button } from './Button';
import { OutlineButton } from './OutlineButton';
import { fontSize, radius, rs, spacing } from '../../utils/responsive';

interface ConfirmDialogProps {
  visible: boolean;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  confirmVariant?: 'primary' | 'error';
  icon?: React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmDialog = ({
  visible,
  title,
  message,
  confirmLabel = 'Confirmar',
  cancelLabel = 'Cancelar',
  confirmVariant = 'primary',
  icon,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) => {
  const { colors } = useTheme();

  const confirmColor = confirmVariant === 'error' ? colors.error : colors.primary;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent>

      <TouchableWithoutFeedback onPress={onCancel}>
        <View style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.5)',
          alignItems: 'center',
          justifyContent: 'center',
          padding: spacing.lg,
        }}>
          <TouchableWithoutFeedback>
            <View style={{
              width: '100%',
              backgroundColor: colors.surfaceContainerLowest,
              borderRadius: radius.xl,
              overflow: 'hidden',
              borderWidth: 1,
              borderColor: colors.outlineVariant,
            }}>

              {/* Ícono + título + mensaje */}
              <View style={{
                padding: spacing.xl,
                alignItems: 'center',
                gap: spacing.md,
              }}>
                {icon && (
                  <View style={{
                    width: rs(56),
                    height: rs(56),
                    borderRadius: rs(28),
                    backgroundColor: `${confirmColor}15`,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {icon}
                  </View>
                )}
                <Text style={{
                  fontSize: fontSize.lg,
                  fontWeight: '700',
                  color: colors.onSurface,
                  textAlign: 'center',
                  letterSpacing: -0.3,
                }}>
                  {title}
                </Text>
                <Text style={{
                  fontSize: fontSize.sm,
                  fontWeight: '300',
                  color: colors.onSurfaceVariant,
                  textAlign: 'center',
                  lineHeight: spacing.xl,
                }}>
                  {message}
                </Text>
              </View>

              {/* Botones reutilizados */}
              <View style={{
                padding: spacing.lg,
                paddingTop: 0,
                gap: spacing.sm,
              }}>
                <OutlineButton
                  label={confirmLabel}
                  color={confirmColor}
                  onPress={onConfirm}
                />
                <Button
                  title={cancelLabel}
                  variant="secondary"
                  onPress={onCancel}
                />
              </View>

            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};