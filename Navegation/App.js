import React from 'react';
import { Link } from 'react-router-dom';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import App from '../Screens/screen1'
import Login from '../Screens/screen2'

const Stack = createStackNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="App">
                <Stack.Screen name='login' component={Login}/> 
                <Stack.Screen name='App' component={App}/>
            </Stack.Navigator>
        </NavigationContainer>
            );
        }
        