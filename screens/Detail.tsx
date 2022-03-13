import { useRef } from "react"
import { FlatList, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native"
import BackIcon from "../components/BackIcon"
import Icon from "../components/Icon"
import { SPACING, width } from "../config/theme"
import { DATA } from "../config/travel"

function Detail() {
    const item = DATA[0]
    const ref = useRef<FlatList>(null)
    const selectedItemIndex = DATA.findIndex((i) => i.id === item.id)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <BackIcon onPress={() => { }} />
            <View
                style={{
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    marginVertical: 20
                }}
            >
                {
                    DATA.map((item) => {
                        return (
                            <TouchableOpacity
                                style={{ padding: SPACING }}
                                key={item.id}
                            >
                                <Icon uri={item.imageUri} />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
            <FlatList
                data={DATA}
                style={{ flex: 1 }}
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


        </SafeAreaView>
    )
}

export default Detail