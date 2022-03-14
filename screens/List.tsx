import { SafeAreaView, TouchableOpacity, View } from "react-native"
import MarkettingSlider from "../components/MarkettingSlider"
import { DATA } from "../config/travel"
import { SPACING } from "../config/theme"
import Icon from "../components/Icon"
import { useNavigation } from "@react-navigation/native"
import { AntDesign } from '@expo/vector-icons'
import { SharedElement } from "react-navigation-shared-element"
import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from "../config/types"
import { Routes } from "../config/navigation"


type ListNavProps = StackNavigationProp<RootStackParamList>

function List() {

    const navigation = useNavigation<ListNavProps>()

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AntDesign name={'arrowleft'} size = {20} onPress = {() => navigation.goBack()} style = {{paddingLeft: SPACING}}/>
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
                            onPress={() => navigation.navigate(Routes.DETAIL_SCREEN, { item })}
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