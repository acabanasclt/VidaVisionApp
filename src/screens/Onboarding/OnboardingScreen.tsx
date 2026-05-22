import React, { useRef } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    Dimensions,
    ListRenderItem,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ArrowRight } from 'lucide-react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useOnboarding } from '../../hooks/useOnboarding';
import { ScannerOverlay } from '../../components/scanner/ScannerOverlay';
import { ScreenWrapper } from '../../components/layout/ScreenWrapper';
import { colors } from '../../utils/colors';
import { RootStackParamList } from '../../navigation/types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const { width } = Dimensions.get('window');

interface Slide {
    id: string;
    title: string;
    description: string;
    image: string | number;
    scanner: boolean;
}

export const OnboardingScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const { slides, currentIndex, isLast, handleNext, handleSkip } = useOnboarding(navigation);
    const flatListRef = useRef<FlatList>(null);
    const insets = useSafeAreaInsets();

    const handleNextPress = () => {
        if (!isLast) {
            flatListRef.current?.scrollToIndex({ index: currentIndex + 1, animated: true });
        }
        handleNext();
    };

    const renderSlide: ListRenderItem<Slide> = ({ item }) => (
        <View style={{ width, flex: 1 }}>
            <View style={{
                height: 530,
                width,
                overflow: 'hidden',
                borderBottomLeftRadius: 24,
                borderBottomRightRadius: 24,
            }}>
                {item.image ? (
                    <Image
                        source={typeof item.image === 'string' ? { uri: item.image } : item.image}
                        style={{ width: '100%', height: '100%' }}
                        resizeMode="cover"
                    />
                ) : (
                    <View style={{ flex: 1, backgroundColor: colors.surfaceContainerLow }} />
                )}

                {item.scanner && (
                    <View style={{
                        position: 'absolute',
                        top: 0, bottom: 0, left: 0, right: 0,
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingBottom: 80,
                        paddingLeft: 20,
                    }}>
                        <ScannerOverlay />
                    </View>
                )}

                <LinearGradient
                    colors={['transparent', 'rgba(247,250,243,0.4)', '#f7faf3']}
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 300,
                    }}
                />
            </View>

            <View style={{ paddingHorizontal: 24, paddingTop: 24, flex: 1 }}>
                <Text style={{
                    fontSize: 28,
                    fontWeight: '700',
                    color: colors.onBackground,
                    letterSpacing: -0.3,
                    lineHeight: 34,
                    marginBottom: 12,
                }}>
                    {item.title}
                </Text>
                <Text style={{
                    fontSize: 16,
                    fontWeight: '300',
                    color: colors.onSurfaceVariant,
                    lineHeight: 26,
                }}>
                    {item.description}
                </Text>
            </View>
        </View>
    );

    return (
        <ScreenWrapper>
            <TouchableOpacity
                onPress={handleSkip}
                style={{
                    position: 'absolute',
                    top: insets.top + 8,
                    right: 24,
                    zIndex: 10,
                    padding: 8,
                }}>
                <Text style={{ fontSize: 14, fontWeight: '600', color: colors.outline }}>
                    Saltar
                </Text>
            </TouchableOpacity>

            <FlatList
                ref={flatListRef}
                data={slides}
                renderItem={renderSlide}
                keyExtractor={item => item.id}
                horizontal
                pagingEnabled
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                style={{ flex: 1 }}
            />

            <View style={{ paddingHorizontal: 24, paddingBottom: 48 }}>
                <TouchableOpacity
                    activeOpacity={0.85}
                    onPress={handleNextPress}
                    style={{
                        backgroundColor: colors.primary,
                        borderRadius: 20,
                        height: 50,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingHorizontal: 24,
                    }}>
                    <Text style={{
                        fontSize: 12,
                        fontWeight: '600',
                        color: colors.onPrimary,
                        letterSpacing: 1.5,
                        textTransform: 'uppercase',
                    }}>
                        {isLast ? 'Comenzar' : 'Empezar'}
                    </Text>
                    <ArrowRight size={20} color={colors.onPrimary} />
                </TouchableOpacity>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: 8,
                    marginTop: 24,
                }}>
                    {slides.map((_, index) => (
                        <View
                            key={index}
                            style={{
                                height: 4,
                                width: index === currentIndex ? 32 : 8,
                                borderRadius: 4,
                                backgroundColor: index === currentIndex
                                    ? colors.primary
                                    : colors.outlineVariant,
                            }}
                        />
                    ))}
                </View>
            </View>
        </ScreenWrapper>
    );
};