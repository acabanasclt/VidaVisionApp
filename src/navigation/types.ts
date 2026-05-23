export type RootStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  Main: undefined;
  Appearance: undefined;
  Settings: undefined;
  Diagnosis: {
    id?: string;
    imageUri?: string;
    confidence: number;
    severity: string;
    severityVariant: 'error' | 'warning' | 'info';
    phase: string;
    name: string;
    scientificName: string;
    actionPlan: { number: number; title: string; description: string }[];
    specialistNote: string;
    canSave?: boolean;
  };
};

export type MainTabParamList = {
  Home: undefined;
  Scanner: undefined;
  Map: undefined;
  History: undefined;
  Profile: undefined;
};