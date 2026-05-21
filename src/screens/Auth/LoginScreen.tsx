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
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { Divider } from '../../components/common/Divider';
import { SocialButton } from '../../components/common/SocialButton';
import { useLogin } from '../../hooks/useLogin';
import { colors } from '../../utils/colors';
import GoogleIcon from '../../assets/icons/google.svg';
import AppleIcon from '../../assets/icons/apple.svg';

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
        <SocialButton title="Google" icon={<GoogleIcon width={20} height={20} />} onPress={handleGoogleLogin} />
<SocialButton title="Apple" icon={<AppleIcon width={20} height={20} />} onPress={handleAppleLogin} />
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