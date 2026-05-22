import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { Mail, Lock, Eye, EyeOff, Leaf } from 'lucide-react-native';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { Divider } from '../../components/common/Divider';
import { SocialButton } from '../../components/common/SocialButton';
import { useLogin } from '../../hooks/useLogin';
import { useTheme } from '../../theme/useTheme';
import { fontSize, spacing, rs } from '../../utils/responsive';
import GoogleIcon from '../../assets/icons/google.svg';
import AppleIcon from '../../assets/icons/apple.svg';

export const LoginScreen = () => {
  const { colors } = useTheme();
  const { form, errors, loading, showPassword, setField, toggleShowPassword, handleLogin, handleForgotPassword, handleGoogleLogin, handleAppleLogin, handleRegister } = useLogin();

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: colors.background }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingHorizontal: spacing.lg, paddingTop: spacing.xxl + spacing.md, paddingBottom: spacing.xxl, flexGrow: 1 }}
        keyboardShouldPersistTaps="handled">

        <View style={{ alignItems: 'center', marginBottom: spacing.xxl }}>
          <Leaf size={rs(36)} color={colors.primary} />
          <Text style={{ fontSize: fontSize.xl, fontWeight: '700', color: colors.primary, letterSpacing: -0.3, marginTop: spacing.sm }}>
            VidaVision
          </Text>
        </View>

        <View style={{ marginBottom: spacing.xxl }}>
          <Text style={{ fontSize: fontSize.xxxl, fontWeight: '700', color: colors.primary, letterSpacing: -1, lineHeight: rs(40), marginBottom: spacing.sm }}>
            Iniciar Sesión
          </Text>
          <Text style={{ fontSize: fontSize.md, fontWeight: '300', color: colors.onSurfaceVariant, lineHeight: spacing.xl + spacing.xs }}>
            Inteligencia agrícola de precisión
          </Text>
        </View>

        <Input
          label="Correo Electrónico"
          placeholder="tu@email.com"
          keyboardType="email-address"
          autoCapitalize="none"
          value={form.email}
          onChangeText={v => setField('email', v)}
          error={errors.email}
          leftIcon={<Mail size={rs(16)} color={colors.outline} />}
        />

        <Input
          label="Contraseña"
          placeholder="••••••••"
          secureTextEntry={!showPassword}
          value={form.password}
          onChangeText={v => setField('password', v)}
          error={errors.password}
          leftIcon={<Lock size={rs(16)} color={colors.outline} />}
          rightIcon={showPassword ? <EyeOff size={rs(16)} color={colors.outline} /> : <Eye size={rs(16)} color={colors.outline} />}
          onRightIconPress={toggleShowPassword}
          rightLabel={
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={{ fontSize: fontSize.xs, fontWeight: '600', color: colors.primary, letterSpacing: 0.8 }}>
                Olvidé mi contraseña
              </Text>
            </TouchableOpacity>
          }
        />

        <Button title="Iniciar Sesión" loading={loading} onPress={handleLogin} style={{ marginTop: spacing.sm }} />

        <Divider label="O CONTINUAR CON" />

        <View style={{ flexDirection: 'row', gap: spacing.sm }}>
          <SocialButton title="Google" icon={<GoogleIcon width={rs(18)} height={rs(18)} />} onPress={handleGoogleLogin} />
          <SocialButton title="Apple" icon={<AppleIcon width={rs(18)} height={rs(18)} />} onPress={handleAppleLogin} />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: spacing.xxl }}>
          <Text style={{ fontSize: fontSize.sm, fontWeight: '300', color: colors.onSurfaceVariant }}>
            ¿No tienes una cuenta?{' '}
          </Text>
          <TouchableOpacity onPress={handleRegister}>
            <Text style={{ fontSize: fontSize.sm, fontWeight: '700', color: colors.primary }}>
              Regístrate
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
};