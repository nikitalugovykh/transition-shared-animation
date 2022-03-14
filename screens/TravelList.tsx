import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { useRef } from "react"
import { Animated, Button, FlatList, Image, StyleSheet, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"
import { SharedElement } from "react-navigation-shared-element"
import { Routes } from "../config/navigation"
import { LOCATIONS } from "../config/travel"
import { RootStackParamList } from "../config/types"
import { AntDesign } from '@expo/vector-icons'

import { Travel2Spec, width } from './../config/theme'

const { ITEM_WIDTH, ITEM_HEIGHT, RADIUS, SPACING, FULL_SIZE } = Travel2Spec

type TravelListNavProps = StackNavigationProp<RootStackParamList>

const TravelList = () => {

    const navigation = useNavigation<TravelListNavProps>()

    const scrollX = useRef(new Animated.Value(0)).current


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AntDesign name={'arrowleft'} size = {20} onPress = {() => navigation.goBack()} style = {{paddingLeft: SPACING}}/>
            <Animated.FlatList
                data={LOCATIONS}
                keyExtractor={(item) => item.key}
                horizontal
                // contentContainerStyle = {{height: ITEM_HEIGHT}}
                showsHorizontalScrollIndicator={false}
                snapToInterval={FULL_SIZE}
                decelerationRate={'fast'}
                renderItem={({ item, index }) => {

                    const inputRange = [
                        (index - 1) * FULL_SIZE,
                        index * FULL_SIZE,
                        (index + 1) * FULL_SIZE
                    ]

                    const translateX = scrollX.interpolate({
                        inputRange,
                        outputRange: [ITEM_WIDTH, 0, -ITEM_WIDTH]
                    })

                    const scale = scrollX.interpolate({
                        inputRange,
                        outputRange: [1, 1.1, 1]
                    })

                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate(Routes.TRAVEL_DETAIL_SCREEN, { item })}
                            style={[styles.itemContainer, index === LOCATIONS.length - 1 ? { marginRight: width - FULL_SIZE + SPACING } : null]}
                        >
                            <SharedElement id={`item.${item.key}.photo`} style={StyleSheet.absoluteFillObject}>
                                <View style={[StyleSheet.absoluteFillObject, { overflow: 'hidden', borderRadius: RADIUS }]}>
                                    <Animated.Image source={{ uri: item.image }} style={[styles.image, { transform: [{ scale }] }]} />
                                </View>

                            </SharedElement>
                            <SharedElement id = {`item.${item.key}.location`}>
                                <Animated.Text style={[styles.locationsText, { transform: [{ translateX: translateX }] }]}>{item.locations}</Animated.Text>
                            </SharedElement>
                            <View style={styles.numberOfDaysContainer}>
                                <Text style={styles.numberOfDaysValue}>{item.numberOfDays}</Text>
                                <Text style={styles.numberOfDaysLabel}>days</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
            />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    itemContainer: {

        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        margin: SPACING
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
    locationsText: {
        fontSize: 30,
        color: '#fff',
        fontWeight: '800',
        width: ITEM_WIDTH * 0.8,
        textTransform: 'uppercase',
        position: 'absolute',
        top: SPACING * 2,
        // left: SPACING * 2,
        paddingLeft: SPACING * 2,
        textShadowColor: '#00000030',
        textShadowOffset: {
            width: 0,
            height: 2
        },
        textShadowRadius: 8

    },
    numberOfDaysContainer: {
        position: 'absolute',
        bottom: SPACING,
        left: SPACING,
        width: 52,
        height: 52,
        borderRadius: 26,
        backgroundColor: 'tomato',
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberOfDaysValue: {
        fontWeight: '800',
        fontSize: 18,
        color: '#fff'
    },
    numberOfDaysLabel: {
        fontSize: 10,
        color: '#fff'
    }
})

export default TravelList