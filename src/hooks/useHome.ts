export const useHome = () => {
  const user = { name: 'Rebeca' };

  const stats = [
    { id: '1', value: 12, label: 'Diagnósticos', sublabel: 'Últimos 7 días', type: 'diagnosis' },
    { id: '2', value: 3, label: 'Alertas', sublabel: 'Requieren atención', type: 'alert' },
    { id: '3', value: 2, label: 'Parcelas', sublabel: 'Monitoreadas activamente', type: 'parcel' },
  ];

  const recentActivity = [
    {
      id: '1',
      title: 'Soja Lote A',
      description: 'Revisión automática completada',
      status: 'success' as const,
      statusLabel: 'Sano',
      type: 'healthy',
    },
    {
      id: '2',
      title: 'Maíz Norte',
      description: 'Roya detectada 85%',
      status: 'error' as const,
      statusLabel: 'Alerta',
      type: 'disease',
    },
  ];

  const handleNotifications = () => {};
  const handleStatPress = (type: string) => {};
  const handleActivityPress = (id: string) => {};

  return {
    user,
    stats,
    recentActivity,
    handleNotifications,
    handleStatPress,
    handleActivityPress,
  };
};