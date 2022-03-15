import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { Animated, Button, FlatList, Image, Pressable, StyleSheet, Text, Touchable, TouchableWithoutFeedback, View } from "react-native"
import { Directions, FlingGestureHandler, State, TouchableOpacity } from "react-native-gesture-handler"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Routes } from "../config/navigation"
import { ITEM_WIDTH, SPACING, width } from "../config/theme"
import { AntDesign } from '@expo/vector-icons'
import { LOCATIONS } from "../config/travel"
import { RootStackParamList } from "../config/types"
import { useCallback, useEffect, useRef, useState } from "react"
import { SharedElement } from "react-navigation-shared-element"

const IMAGE_WIDTH = width * 0.86
const IMAGE_HEIGHT = width * 1.5
const VISIBLE_ITEMS = 4


type TravelUpListNavProps = StackNavigationProp<RootStackParamList>

const TravelUpList = () => {
    const navigation = useNavigation<TravelUpListNavProps>()

    const { top } = useSafeAreaInsets()

    const [activeIndex, setActiveIndex] = useState(0)

    const animatedValue = useRef(new Animated.Value(0)).current
    const reactiveAnimated = useRef(new Animated.Value(0)).current


    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: reactiveAnimated,
            duration: 300,
            useNativeDriver: true
        }).start()
    }, [])

    const setActiveSlide = useCallback((newIndex) => {
        setActiveIndex(newIndex)
        reactiveAnimated.setValue(newIndex)
    }, [])

    return (
        <FlingGestureHandler
            key='UP'
            direction={Directions.UP}
            onHandlerStateChange={
                ev => {
                    if (ev.nativeEvent.state === State.END) {
                        // increment index

                        if (activeIndex === LOCATIONS.length - 1) {
                            return
                        }
                        setActiveSlide(activeIndex + 1)
                    }
                }}
        >
            <FlingGestureHandler
                key='DOWN'
                direction={Directions.DOWN}
                onHandlerStateChange={
                    ev => {
                        if (ev.nativeEvent.state === State.END) {
                            // increment index

                            if (activeIndex === 0) {
                                return
                            }
                            setActiveSlide(activeIndex - 1)
                        }
                    }}
            >
                <View style={{ paddingTop: top, backgroundColor: '#000', flex: 1 }}>
                    <AntDesign
                        name={'arrowleft'}
                        size={20}
                        style={{ padding: SPACING }}
                        color={'#fff'}
                        onPress={() => navigation.goBack()}
                    />
                    {/* <Button title="to Detail" onPress={() => navigation.navigate(Routes.TRAVEL_UP_DETAIL_SCREEN)}/> */}
                    <FlatList
                        data={LOCATIONS}
                        keyExtractor={(item) => item.key}
                        contentContainerStyle={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        scrollEnabled={false}
                        CellRendererComponent={({ index, item, children, style, ...props }) => {
                            const newStyle = [
                                style,
                                {
                                    zIndex: LOCATIONS.length - index,
                                    left: -IMAGE_WIDTH / 2,
                                    top: -IMAGE_HEIGHT / 2 - top
                                }
                            ]

                            return (
                                <View index={index} {...props} style={newStyle}>
                                    {children}
                                </View>
                            )
                        }}
                        renderItem={({ item, index }) => {
                            const inputRange = [index - 1, index, index + 1]

                            const translateY = animatedValue.interpolate({
                                inputRange,
                                outputRange: [-30, 0, 30]
                            })

                            const opacity = animatedValue.interpolate({
                                inputRange,
                                outputRange: [(1 - 1 / VISIBLE_ITEMS), 1, 0],


                            })
                            const scale = animatedValue.interpolate({
                                inputRange,
                                outputRange: [0.92, 1, 1.2]
                            })

                            return (
                                <Animated.View style={[{ position: 'absolute', transform: [{ translateY }, { scale }], opacity }]}>
                                    <Pressable
                                        // onPress={() => navigation.navigate(Routes.TRAVEL_UP_DETAIL_SCREEN, {item: LOCATIONS[activeIndex]})}
                                    >
                                        <View>
                                            <SharedElement id={`item.${item.key}.image`}>
                                                <Image source={{ uri: item.image }} style={styles.images} />
                                            </SharedElement>
                                            <View style={{ position: 'absolute', bottom: 20, left: 20, }}>
                                                <SharedElement id={`item.${item.key}.name`}>
                                                    <Text style={styles.name} numberOfLines = {1} adjustsFontSizeToFit>{item.locations}</Text>
                                                </SharedElement>
                                            </View>
                                        </View>
                                    </Pressable>
                                </Animated.View>
                            )
                        }}
                    />
                </View>
            </FlingGestureHandler>
        </FlingGestureHandler>
    )
}

const styles = StyleSheet.create({
    images: {
        width: IMAGE_WIDTH,
        height: IMAGE_HEIGHT,
        borderRadius: 16,
        resizeMode: 'cover',
    },
    name: {
        textTransform: 'uppercase',
        color: '#fff',
        fontSize: 25,
        fontWeight: '800'
    },
})


export default TravelUpList