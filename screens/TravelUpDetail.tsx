import { Image, StyleSheet, Text, View } from "react-native"
import { AVATARS } from "../config/travel"
import { AntDesign } from '@expo/vector-icons'
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { height, SPACING, width } from "../config/theme"
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { RootStackParamList } from "../config/types"
import { Routes } from "../config/navigation"
import { SharedElement } from "react-navigation-shared-element"
import { LinearGradient } from "expo-linear-gradient"

import * as Animatable  from 'react-native-animatable'
import { useRef } from "react"


const Height = () => {
    return (
        <View>
            <Text style={styles.heading}>Height</Text>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                <Text style={styles.number}>{Math.floor(Math.random() * 2200) + 1000}</Text>
                <Text style={styles.numberType}>m</Text>
            </View>
        </View>
    )
}

const Distance = () => {
    return (
        <View>
            <Text style={styles.heading}>Distance</Text>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                <Text style={styles.number}>{Math.floor(Math.random() * 40) + 20}</Text>
                <Text style={styles.numberType}>km</Text>
            </View>
        </View>
    )
}

const Avatars = () => {
    return (
        <View>
            <Text style={styles.heading}>Your team</Text>
            <View style={{ flexDirection: 'row' }}>
                {AVATARS.map((item, index) => {
                    return (
                        <Image
                            key={item.id}
                            source={{ uri: item.uri }}
                            style={[
                                styles.avatar,
                                {
                                    zIndex: AVATARS.length - index, marginLeft: index === 0 ? 0 : - 20
                                }
                            ]}

                        />
                    )
                })}
            </View>
        </View>
    )
}

type TravelUpDetailRouteProps = RouteProp<RootStackParamList, Routes.TRAVEL_UP_DETAIL_SCREEN>

const TravelUpDetail = () => {
    const navigation = useNavigation()
    const { item } = useRoute<TravelUpDetailRouteProps>().params
    const { top, bottom } = useSafeAreaInsets()

    const topRef = useRef<Animatable.View & View>(null)
    const bottomRef = useRef<Animatable.View & View>(null)

    return (
        <View style={[styles.wrapper,]}>
            <SharedElement id={`item.${item.key}.image`}>
                <Image source={{ uri: item.image }} style={styles.image} />
            </SharedElement>
            <Animatable.View 
                style={[StyleSheet.absoluteFillObject, { paddingTop: top }]}
                animation = {'fadeIn'}
                ref = {topRef}
                duration = {500}
                delay = {400}
            >
                <AntDesign
                    name={'arrowleft'}
                    size={20}
                    style={
                        {
                            padding: SPACING,
                            position: 'absolute',
                            top: 40,
                            left: 20,
                            zIndex: 2
                        }
                    }
                    color={'#000'}
                    onPress={() => {
                        Promise.all([
                            topRef.current?.fadeOut && topRef.current?.fadeOut(100),
                            bottomRef.current?.fadeOut && bottomRef.current?.fadeOut(100)
                        ]).then(() => {

                            navigation.goBack()
                        })

                    }}
                />
                <LinearGradient
                    colors={['transparent', '#000', '#000', '#000',]}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: height / 2
                    }}
                >

                </LinearGradient>
            </Animatable.View>
            <View style={[styles.bottomWrapper]}>
                <View style ={{paddingHorizontal: 24, alignItems: 'flex-start'}}>
                    <SharedElement id={`item.${item.key}.name`}>
                        <Text style={styles.name} numberOfLines = {1} adjustsFontSizeToFit>{item.locations}</Text>
                    </SharedElement>
                </View>
                <Animatable.View 
                    style={styles.innerWrapper}
                    animation = {'fadeIn'}
                    duration = {500}
                    delay = {400}
                    ref = {bottomRef}
                >
                    <Avatars />
                    <Distance />
                    <Height />

                </Animatable.View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        // justifyContent: 'space-between',
        // paddingHorizontal: 24,
        backgroundColor: '#000f0f'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    bottomWrapper: {
        flex: 1,
        position: 'absolute',
        bottom: 70,
        justifyContent: 'flex-end',

    },
    innerWrapper: {
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    heading: {
        fontSize: 12,
        textAlign: 'left',
        color: '#fff'
    },
    number: {
        fontSize: 30,
        fontWeight: '800',
        color: '#fff'
    },
    numberType: {
        fontSize: 12,
        color: '#fff'
    },
    avatar: {
        width: 35,
        height: 35,
        borderRadius: 30,
        borderWidth: 2,
    },
    name: {
        textTransform: 'uppercase',
        color: '#fff',
        fontSize: 45,
        fontWeight: '800'
    },
})

export default TravelUpDetail