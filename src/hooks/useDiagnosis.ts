import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

type DiagnosisRouteProp = RouteProp<RootStackParamList, 'Diagnosis'>;
type NavigationProp = StackNavigationProp<RootStackParamList>;

export const useDiagnosis = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<DiagnosisRouteProp>();

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
    canSave = false,
  } = route.params;

  const handleSave = () => {
    // TODO: guardar en historial
    navigation.goBack();
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return {
    imageUri,
    confidence,
    severity,
    severityVariant,
    phase,
    name,
    scientificName,
    actionPlan,
    specialistNote,
    canSave,
    handleSave,
    handleBack,
  };
};