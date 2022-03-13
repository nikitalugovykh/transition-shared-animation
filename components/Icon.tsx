import { FC } from "react";
import { Image, StyleSheet, View } from "react-native";

import { ICON_SIZE } from './../config/theme'

type Props = {
    uri: string
}

const Icon: FC<Props> = ({uri}) => {
    return (
        <View style = {styles.imageContainer}>
            <Image source={{uri}} style = {styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: ICON_SIZE,
        height: ICON_SIZE,
        borderRadius: ICON_SIZE / 2,
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: ICON_SIZE * .6,
        height: ICON_SIZE * .6,
        resizeMode: 'contain'
    }
})

export default Icon;