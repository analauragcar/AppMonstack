import React from 'react';
import { Link } from 'react-router-dom';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import App from './App'
import login from './Telas'

const Stack = createStackNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="login">
                <Stack.Screen name='login' component={login}/> 
                <Stack.Screen name='App' component={App}/>
               
            </Stack.Navigator>
        </NavigationContainer>
    );
}
