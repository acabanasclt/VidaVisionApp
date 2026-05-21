import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Mail, Lock, Eye, EyeOff, Leaf } from 'lucide-react-native';
import Svg, { Path } from 'react-native-svg';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { Divider } from '../../components/common/Divider';
import { SocialButton } from '../../components/common/SocialButton';
import { useLogin } from '../../hooks/useLogin';
import { colors } from '../../utils/colors';

const GoogleIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 24 24">
    <Path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <Path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <Path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <Path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </Svg>
);

const AppleIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 24 24">
    <Path fill="#1A1A1A" d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.89-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.75-1.51.05-2.008-.92-3.696-.92-1.688 0-2.225.88-3.668.96-1.493.08-2.615-1.45-3.565-2.83-1.96-2.85-3.475-8.05-1.474-11.53 1-1.74 2.78-2.85 4.708-2.87 1.458-.02 2.835 1.01 3.738 1.01.903 0 2.585-1.25 4.34-1.06 1.83.2 3.197.98 4.025 2.2-3.454 2.13-2.96 6.78.36 8.16-.07.24-.654 2.22-.82 2.73z" />
  </Svg>
);

export const LoginScreen = () => {
  const {
    form,
    errors,
    loading,
    showPassword,
    setField,
    toggleShowPassword,
    handleLogin,
    handleForgotPassword,
    handleGoogleLogin,
    handleAppleLogin,
    handleRegister,
  } = useLogin();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: colors.background }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 48, paddingBottom: 40 }}
        keyboardShouldPersistTaps="handled">

        <View style={{ alignItems: 'center', marginBottom: 32 }}>
          <Leaf size={44} color={colors.primary} />
          <Text style={{ fontSize: 24, fontWeight: '700', color: colors.primary, letterSpacing: -0.3, marginTop: 8 }}>
            VidaVision
          </Text>
        </View>

        <View style={{ marginBottom: 32 }}>
          <Text style={{ fontSize: 48, fontWeight: '700', color: colors.primary, letterSpacing: -1, lineHeight: 52, marginBottom: 8 }}>
            Iniciar Sesión
          </Text>
          <Text style={{ fontSize: 18, fontWeight: '300', color: colors.onSurfaceVariant, lineHeight: 28 }}>
            Inteligencia agrícola de precisión
          </Text>
        </View>

        {/* Email */}
        <Input
          label="Correo Electrónico"
          placeholder="tu@email.com"
          keyboardType="email-address"
          autoCapitalize="none"
          value={form.email}
          onChangeText={v => setField('email', v)}
          error={errors.email}
          leftIcon={<Mail size={18} color={colors.outline} />}
        />

        <Input
          label="Contraseña"
          placeholder="••••••••"
          secureTextEntry={!showPassword}
          value={form.password}
          onChangeText={v => setField('password', v)}
          error={errors.password}
          leftIcon={<Lock size={18} color={colors.outline} />}
          rightIcon={showPassword
            ? <EyeOff size={18} color={colors.outline} />
            : <Eye size={18} color={colors.outline} />}
          onRightIconPress={toggleShowPassword}
          rightLabel={
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={{ fontSize: 12, fontWeight: '600', color: colors.primary, letterSpacing: 1 }}>
                Olvidé mi contraseña
              </Text>
            </TouchableOpacity>
          }
        />

        <Button
          title="Iniciar Sesión"
          loading={loading}
          onPress={handleLogin}
          style={{ marginTop: 8 }}
        />

        <Divider label="O CONTINUAR CON" />

        <View style={{ flexDirection: 'row', gap: 12 }}>
          <SocialButton title="Google" icon={<GoogleIcon />} onPress={handleGoogleLogin} />
          <SocialButton title="Apple" icon={<AppleIcon />} onPress={handleAppleLogin} />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 40 }}>
          <Text style={{ fontSize: 16, fontWeight: '300', color: colors.onSurfaceVariant }}>
            ¿No tienes una cuenta?{' '}
          </Text>
          <TouchableOpacity onPress={handleRegister}>
            <Text style={{ fontSize: 16, fontWeight: '700', color: colors.primary }}>
              Regístrate
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
};