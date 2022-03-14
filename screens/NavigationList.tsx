import { Button, SafeAreaView, TouchableOpacity, View } from "react-native"
import MarkettingSlider from "../components/MarkettingSlider"
import { DATA } from "../config/travel"
import { SPACING } from "../config/theme"
import Icon from "../components/Icon"
import { useNavigation } from "@react-navigation/native"
import { SharedElement } from "react-navigation-shared-element"
import { navigation } from "../config/navigation"
import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from "../config/types"

type NavigationListNavProps = StackNavigationProp<RootStackParamList>

function NavigationList() {

    const navigationRoute = useNavigation<NavigationListNavProps>()

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
           {navigation.map((item, index) => {
               return (
                   <View key = {index.toString()}>
                       
                       <Button title={item.label} onPress = {() => navigationRoute.navigate(item.name)}/>
                   </View>
               )
           })}
        </SafeAreaView>
    )
}

export default NavigationList