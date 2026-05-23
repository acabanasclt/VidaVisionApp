import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft } from 'lucide-react-native';
import { useTheme } from '../../theme/useTheme';
import { useDiagnosis } from '../../hooks/useDiagnosis';
import { DiagnosisHero } from '../../components/diagnosis/DiagnosisHero';
import { ConfidenceScore } from '../../components/diagnosis/ConfidenceScore';
import { DiagnosisBadges } from '../../components/diagnosis/DiagnosisBadges';
import { ActionPlanCard } from '../../components/diagnosis/ActionPlanCard';
import { SpecialistNote } from '../../components/diagnosis/SpecialistNote';
import { Button } from '../../components/common/Button';
import { OutlineButton } from '../../components/common/OutlineButton';
import { fontSize, rs, spacing } from '../../utils/responsive';
import { getIcon } from '../../utils/icons';

export const DiagnosisScreen = () => {
    const { colors } = useTheme();
    const {
        imageUri,
        confidence,
        severity,
        severityVariant,
        phase,
        name,
        scientificName,
        actionPlan,
        specialistNote,
        handleSave,
        handleBack,
    } = useDiagnosis();

    return (
        <View style={{ flex: 1, backgroundColor: colors.background }}>
            <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={{ paddingBottom: rs(40) }}
                showsVerticalScrollIndicator={false}>

                {/* Hero imagen */}
                <DiagnosisHero imageUri={imageUri} />

                {/* Header flotante */}
                <SafeAreaView
                    edges={['top']}
                    style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10 }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingHorizontal: spacing.lg,
                        paddingVertical: spacing.md,
                    }}>
                        <TouchableOpacity
                            onPress={handleBack}
                            style={{
                                width: rs(40),
                                height: rs(40),
                                borderRadius: rs(20),
                                backgroundColor: `${colors.surface}CC`,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <ArrowLeft size={rs(20)} color={colors.primary} />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>

                {/* Contenido */}
                <View style={{ paddingHorizontal: spacing.lg, gap: spacing.xl }}>

                    <ConfidenceScore score={confidence} />

                    <View style={{ alignItems: 'center', gap: spacing.md }}>
                        <DiagnosisBadges
                            severity={severity}
                            severityVariant={severityVariant}
                            phase={phase}
                        />
                        <Text style={{
                            fontSize: fontSize.xxl,
                            fontWeight: '700',
                            color: colors.onSurface,
                            textAlign: 'center',
                            letterSpacing: -0.3,
                        }}>
                            {name}
                        </Text>
                        <Text style={{
                            fontSize: fontSize.sm,
                            fontWeight: '300',
                            color: colors.onSurfaceVariant,
                            fontStyle: 'italic',
                        }}>
                            {scientificName}
                        </Text>
                    </View>

                    <View style={{ gap: spacing.md }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.md }}>
                            <View style={{ flex: 1, height: 1, backgroundColor: colors.outlineVariant }} />
                            <Text style={{
                                fontSize: fontSize.xs,
                                fontWeight: '600',
                                color: colors.outline,
                                letterSpacing: 2,
                                textTransform: 'uppercase',
                            }}>
                                Plan de Acción
                            </Text>
                            <View style={{ flex: 1, height: 1, backgroundColor: colors.outlineVariant }} />
                        </View>
                        {actionPlan.map(step => (
                            <ActionPlanCard
                                key={step.number}
                                number={step.number}
                                title={step.title}
                                description={step.description}
                            />
                        ))}
                    </View>

                    <SpecialistNote note={specialistNote} />

                    {/* Botones dentro del scroll */}
                    <View style={{ gap: spacing.sm, paddingBottom: spacing.xl, paddingHorizontal: spacing.xl }}>
                        <Button
                            title="GUARDAR EN HISTORIAL"
                            icon={getIcon('bookmark', rs(16), colors.onPrimary)}
                            onPress={handleSave}
                        />
                        <OutlineButton
                            label="DESCARGAR REPORTE PDF"
                            icon={getIcon('file-down', rs(16), colors.primary)}
                            onPress={() => { }}
                        />
                    </View>

                </View>
            </ScrollView>
        </View>
    );
};