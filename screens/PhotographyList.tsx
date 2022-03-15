import { StyleSheet, Text, View } from "react-native"
import { AntDesign } from '@expo/vector-icons'
import { SPACING } from "../config/theme"
import { useNavigation } from "@react-navigation/native"




const PhotographyList = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, backgroundColor: '#000' }}>
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
                color={'#fff'}
                onPress={() => navigation.goBack()}
            />
            <Text>PhotographyList.tsx</Text>
        </View>)
}

const styles = StyleSheet.create({
    
})

export default PhotographyList