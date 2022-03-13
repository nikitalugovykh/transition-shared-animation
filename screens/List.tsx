import { SafeAreaView, TouchableOpacity, View } from "react-native"
import MarkettingSlider from "../components/MarkettingSlider"
import { DATA } from "../config/travel"
import { SPACING } from "../config/theme"
import Icon from "../components/Icon"

function List() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MarkettingSlider />
            <View style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 20
            }}>
                {DATA.map((item) => {
                    return (
                        <TouchableOpacity
                            key={item.id}
                            style={{
                                padding: SPACING
                            }}
                        >
                            <Icon uri={item.imageUri} />
                        </TouchableOpacity>
                    )
                })}
            </View>
        </SafeAreaView>
    )
}

export default List