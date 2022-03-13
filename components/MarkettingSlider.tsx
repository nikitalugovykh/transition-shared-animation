import { FlatList, StyleSheet, Text, View } from "react-native"
import {ITEM_WIDTH, width, SPACING} from './../config/theme'
import {SLIDER_DATA} from './../config/travel'

const MarkettingSlider = () => {
    return (  
        <FlatList
            data = {SLIDER_DATA}
            keyExtractor = {(item) => item.color}
            horizontal
            snapToInterval={ITEM_WIDTH + SPACING +2}
            contentContainerStyle ={{
                paddingRight: width - ITEM_WIDTH - SPACING * 2
            }}
            decelerationRate = {'fast'}
            renderItem = {({item}) => {
                return (
                    <View style ={[styles.itemContainer, {backgroundColor: item.color}]}>
                        <Text style = {styles.itemText}>{item.title}</Text>
                    </View>
                )
            }}
        />
    )
}

const styles = StyleSheet.create({
    itemContainer: {

    },
    itemText: {

    }
})

export default MarkettingSlider