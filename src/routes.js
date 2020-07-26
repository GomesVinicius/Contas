import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import Graphics from './pages/Graphics'

const Routes = () => {

    const Stack = createStackNavigator()

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'Contas'
                    }}
                >    
                </Stack.Screen>
                <Stack.Screen
                    name="Graphics"
                    component={Graphics}
                    options={{
                        title: 'Gráfico'
                    }}>
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes
