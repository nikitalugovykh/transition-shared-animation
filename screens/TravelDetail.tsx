import { FlatList, Image, StyleSheet, Text, View } from "react-native"
import { AntDesign } from '@expo/vector-icons'
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context"
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { RootStackParamList } from "../config/types"
import { Routes } from "../config/navigation"

import { Travel2Spec, width } from './../config/theme'
import { SharedElement } from "react-navigation-shared-element"
import * as Animatable from 'react-native-animatable'
import { useRef } from "react"

const { ITEM_WIDTH, ITEM_HEIGHT, RADIUS, SPACING, FULL_SIZE } = Travel2Spec

type TravelDetailRouteProps = RouteProp<RootStackParamList, Routes.TRAVEL_DETAIL_SCREEN>

const TravelDetail = () => {

    const navigation = useNavigation()
    const { item } = useRoute<TravelDetailRouteProps>().params
    const { top } = useSafeAreaInsets()

    const refView = useRef<Animatable.View & View>(null)


    const zoomIn = {
        0: {
            opacity: 0,
            scale: 0
        },
        1: {
            opacity: 1,
            scale: 1
        }
    }

    return (
        <View style={{ flex: 1, paddingTop: top }}>
            <AntDesign
                name={'arrowleft'}
                size={20}
                color={'#000'}
                style={{ padding: SPACING, zIndex: 2 }}
                onPress={() => {


                        navigation.goBack()

                }}
            />
            <SharedElement id={`item.${item.key}.photo`} style={StyleSheet.absoluteFillObject}>
                <View style={styles.wrapper}>
                    <Image source={{ uri: item.image }} style={[styles.image]} />
                </View>
            </SharedElement>
            <SharedElement id={`item.${item.key}.location`}>
                <Text style={[styles.locationsText]}>{item.locations}</Text>
            </SharedElement>
            <View style={{ position: 'absolute', bottom: 120, left: SPACING * 2, right: SPACING * 2 }}>
                <Text style={[{ fontSize: 16, width: '100%', color: '#fff', fontWeight: '800', textTransform: 'uppercase' }]}>Activities</Text>
                <FlatList
                    data={[...Array(8).keys()]}
                    keyExtractor={(item) => String(item)}
                    horizontal
                    // contentContainerStyle={{ padding: SPACING }}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <Animatable.View
                                ref={refView}
                                style={{ backgroundColor: '#fff', padding: SPACING, width: width * .35, height: width * 0.48, marginRight: SPACING }}
                                duration={800}
                                animation={zoomIn}
                                delay={500 + (index * 100)}
                            >
                                <Image
                                    source={{ uri: 'https://images.unsplash.com/photo-1478860409698-8707f313ee8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' }}
                                    style={{ width: '100%', height: '70%', resizeMode: 'cover' }}
                                />
                                <Text>Activity #{item + 1}</Text>
                            </Animatable.View>
                        )
                    }}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        ...StyleSheet.absoluteFillObject,

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
        // left: SPACING * 2
        paddingLeft: SPACING * 2,
        textShadowColor: '#00000030',
        textShadowOffset: {
            width: 0,
            height: 2
        },
        textShadowRadius: 8
    }
})

export default TravelDetail