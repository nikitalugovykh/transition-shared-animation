import { Route, RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { FC, useEffect, useRef } from "react"
import { Animated, FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context"
import { SharedElement } from "react-navigation-shared-element"
import BackIcon from "../components/BackIcon"
import Icon from "../components/Icon"
import { Routes } from "../config/navigation"
import { ICON_SIZE, SPACING, width } from "../config/theme"
import { DATA } from "../config/travel"
import { RootStackParamList } from "../config/types"


type DetailRouteProps = RouteProp<RootStackParamList, Routes.DETAIL_SCREEN>

const Detail = () => {
    const navigation = useNavigation()
    const route = useRoute<DetailRouteProps>().params

    const item = route.item
    const ref = useRef<FlatList>(null)
    const selectedItemIndex = DATA.findIndex((i) => i.id === item.id)
    const mountedAnimated = useRef(new Animated.Value(0)).current
    const activeIndex = useRef(new Animated.Value(selectedItemIndex)).current
    const activeIndexAnimation = useRef(new Animated.Value(selectedItemIndex)).current

    const { top } = useSafeAreaInsets()

    const animation = (toValue: number, delay?: number) => (
        Animated.timing(mountedAnimated, {
            toValue,
            duration: 500,
            delay,
            useNativeDriver: true
        })
    )

    useEffect(() => {
        Animated.parallel([
            Animated.timing(activeIndexAnimation, {
                toValue: activeIndex,
                duration: 300,
                useNativeDriver: true
            }),
            animation(1, 500)
        ]).start()
    }, [])

    const translateY = mountedAnimated.interpolate({
        inputRange: [0, 1],
        outputRange: [50, 0]
    })

    const size = ICON_SIZE + SPACING * 2

    const translateX = activeIndexAnimation.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: [size, 0, -size]
    })

    return (
        // <View style={{ flex: 1 }}>
        <View style={{ flex: 1, marginTop: top }}>
            <BackIcon onPress={() => {
                animation(0).start(() => {
                    navigation.goBack()
                })
            }} />
            {/* <View style = {{height: 50}}>

            </View> */}
            <Animated.View
                style={{
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    marginVertical: 20,
                    marginLeft: width / 2 - ICON_SIZE / 2 - SPACING,
                    transform: [{ translateX }]
                }}
            >
                {
                    DATA.map((item, index) => {
                        const inputRange = [(index - 1), index, (index + 1)]

                        const opacity = activeIndexAnimation.interpolate({
                            inputRange,
                            outputRange: [0.3, 1, 0.3]
                        })

                        return (
                            <TouchableOpacity
                                style={{ padding: SPACING }}
                                key={item.id}
                                onPress = {() => {
                                    activeIndex.setValue(index)
                                    ref.current?.scrollToIndex({
                                        index,
                                        animated: true
                                    })
                                }}
                            >
                                <Animated.View style = {{alignItems: 'center', opacity}}>
                                    <SharedElement
                                        id={`item.${item.id}.icon`}
                                    >
                                        <Icon uri={item.imageUri} />
                                    </SharedElement>
                                    <Text style={{ fontSize: 10 }}>{item.title}</Text>

                                </Animated.View>
                            </TouchableOpacity>
                        )
                    })
                }
            </Animated.View>
            <Animated.FlatList
                style={{ opacity: mountedAnimated, transform: [{ translateY: translateY }] }}
                data={DATA}
                // style={{ flex: 1 }}
                ref={ref}
                keyExtractor={(item) => item.id}
                horizontal
                pagingEnabled
                initialScrollIndex={selectedItemIndex}
                nestedScrollEnabled
                getItemLayout={(data, index) => ({
                    length: width,
                    offset: width * index,
                    index
                })}
                onMomentumScrollEnd={(ev) => {
                    const newIndex = Math.floor(ev.nativeEvent.contentOffset.x / width)

                    activeIndex.setValue(newIndex)
                }}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <ScrollView
                            style={{
                                width: width - SPACING * 2,
                                margin: SPACING,
                                backgroundColor: 'rgba(0,0,0,0.05)',
                                borderRadius: 16
                            }}
                        >
                            <View style={{ padding: SPACING }}>
                                <Text style={{ fontSize: 16 }}>
                                    {Array(50).fill(`${item.title} inner text \n`)}
                                </Text>
                            </View>
                        </ScrollView>
                    )
                }}

            />


        </View>
    )
}


// Detail.sharedElements = (route: string, otherRoute: any, showing: any) => {
//     return DATA.map((item) => `item.${item.id}.icon`)
//   }

export default Detail