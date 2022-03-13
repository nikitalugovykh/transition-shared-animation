import { FlatList, StyleSheet, Text, View } from "react-native"
import {ITEM_WIDTH, width, SPACING} from './../config/theme'
import {SLIDER_DATA} from './../config/travel'

const MarkettingSlider = () => {
    return (  
        <FlatList
            data = {SLIDER_DATA}
            keyExtractor = {(item) => item.color}
            horizontal
            showsHorizontalScrollIndicator = {false}
            snapToInterval={ITEM_WIDTH + SPACING +2}
            contentContainerStyle ={{
                paddingRight: width - ITEM_WIDTH - SPACING * 2
            }}
            decelerationRate = {'fast'}
            renderItem = {({item, index}) => {
                return (
                    <View style ={[styles.itemContainer, {backgroundColor: item.color, marginLeft: index === 0 ? 36 : 16}]}>
                        <Text style = {styles.itemText}>{item.title}</Text>
                    </View>
                )
            }}
        />
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        width: width * 0.6,
        height: 150,
        borderRadius: 15
    },
    itemText: {
        fontWeight: '700',
        fontSize: 30,
        color: '#000',
        paddingLeft: 15,
        paddingTop: 15
    }
})

export default MarkettingSlider