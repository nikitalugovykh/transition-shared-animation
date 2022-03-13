import { StatusBar } from 'expo-status-bar';
import { Easing, StyleSheet, Text, View } from 'react-native';

import { enableScreens } from 'react-native-screens'
import { NavigationContainer } from '@react-navigation/native'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import List from './screens/List';
import Detail from './screens/Detail';
import { DATA } from './config/travel';
import { CardStyleInterpolators } from '@react-navigation/stack';

// enableScreens()

const Stack = createSharedElementStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='List'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='List' component={List} />
        <Stack.Screen
          name='Detail'
          component={Detail}
          sharedElements={(route, otherRoute, showing) => {
            // const { item } = route.params;
            return  DATA.map((item) => `item.${item.id}.icon`)
            
          }}
          options={() => ({
            gestureEnabled: false,
            transitionSpec: {
              open: {animation: 'timing', config: {duration: 500, easing: Easing.inOut(Easing.ease)}},
              close: {animation: 'timing', config: {duration: 500, easing: Easing.inOut(Easing.ease)}}
            },
            cardStyleInterpolator: ({current: {progress}}) => {
              return {
                cardStyle: {
                  opacity: progress
                }
              }
            }

          })}
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
