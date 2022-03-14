import { StatusBar } from 'expo-status-bar';
import { Easing, StyleSheet, Text, View } from 'react-native';

import { enableScreens } from 'react-native-screens'
import { NavigationContainer } from '@react-navigation/native'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import List from './screens/List';
import Detail from './screens/Detail';
import { DATA } from './config/travel';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { navigation, Routes } from './config/navigation';
import NavigationList from './screens/NavigationList';
import TravelList from './screens/TravelList';
import TravelDetail from './screens/TravelDetail';

// enableScreens()

const Stack = createSharedElementStackNavigator()

export default function App() {


    const options = () => ({
        gestureEnabled: false,
        transitionSpec: {
            open: { animation: 'timing', config: { duration: 500, easing: Easing.inOut(Easing.ease) } },
            close: { animation: 'timing', config: { duration: 500, easing: Easing.inOut(Easing.ease) } }
        },

        cardStyleInterpolator: ({ current: { progress } }: any) => {
            return {
                cardStyle: {
                    opacity: progress
                }
            }
        }
    })


    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={Routes.NAVIGATIONS_LIST_SCREEN}
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name={Routes.NAVIGATIONS_LIST_SCREEN} component={NavigationList} />

                {navigation.map((item) => {
                    return (
                        <Stack.Screen name={item.name} component={item.component} />
                    )
                })}

                {/* <Stack.Screen name='List' component={List} /> */}
                <Stack.Screen
                    name={Routes.DETAIL_SCREEN}
                    component={Detail}
                    sharedElements={(route, otherRoute, showing) => {
                        // const { item } = route.params;
                        return DATA.map((item) => `item.${item.id}.icon`)

                    }}
                    // @ts-ignore
                    options={options}
                />
                <Stack.Screen
                    name={Routes.TRAVEL_DETAIL_SCREEN}
                    component={TravelDetail}
                    sharedElements={(route, otherRoute, showing) => {
                        const { item } = route.params
                        // return DATA.map((item) => `item.${item.id}.photo`)

                        return [
                            {
                                id: `item.${item.key}.photo`
                            },
                            {
                                id: `item.${item.key}.location`
                            },
                        ]

                    }}
                    // @ts-ignore
                    options={options}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
