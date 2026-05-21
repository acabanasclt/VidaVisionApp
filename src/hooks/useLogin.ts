import { useState } from 'react';

interface LoginForm {
    email: string;
    password: string;
}

interface LoginErrors {
    email?: string;
    password?: string;
}

export const useLogin = () => {
    const [form, setForm] = useState<LoginForm>({ email: '', password: '' });
    const [errors, setErrors] = useState<LoginErrors>({});
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const setField = (field: keyof LoginForm, value: string) => {
        setForm(prev => ({ ...prev, [field]: value }));
        if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
    };

    const validate = (): boolean => {
        const e: LoginErrors = {};
        if (!form.email) e.email = 'El correo es requerido';
        else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'El correo no es válido';
        if (!form.password) e.password = 'La contraseña es requerida';
        else if (form.password.length < 6) e.password = 'Mínimo 6 caracteres';
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleLogin = async () => {
        if (!validate()) return;
        setLoading(true);
        try {
            await new Promise<void>(resolve => setTimeout(resolve, 2000));
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleForgotPassword = () => {
        // TODO: navegación a forgot password
    };

    const handleGoogleLogin = () => {
        // TODO: google auth
    };

    const handleAppleLogin = () => {
        // TODO: apple auth
    };

    const handleRegister = () => {
        // TODO: navegación a registro
    };

    return {
        form,
        errors,
        loading,
        showPassword,
        setField,
        toggleShowPassword: () => setShowPassword(prev => !prev),
        handleLogin,
        handleForgotPassword,
        handleGoogleLogin,
        handleAppleLogin,
        handleRegister,
    };
};