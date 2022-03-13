import { SafeAreaView, TouchableOpacity, View } from "react-native"
import MarkettingSlider from "../components/MarkettingSlider"
import { DATA } from "../config/travel"
import { SPACING } from "../config/theme"
import Icon from "../components/Icon"
import { useNavigation } from "@react-navigation/native"
import { SharedElement } from "react-navigation-shared-element"

function List() {

    const navigation: any = useNavigation()

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
                            onPress={() => navigation.navigate('Detail', { item })}
                        >
                            <SharedElement
                                id={`item.${item.id}.icon`}
                            >
                                <Icon uri={item.imageUri} />

                            </SharedElement>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </SafeAreaView>
    )
}

export default List