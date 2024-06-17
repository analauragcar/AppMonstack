import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Inicio from './screen1'
import Login from './screen2'
import Cadastro from './screen3'

const Stack = createStackNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Inicio">

                <Stack.Screen name='Inicio' component={Inicio}/>
                <Stack.Screen name='Login' component={Login}/> 
                <Stack.Screen name='Cadastro' component={Cadastro}/> 
                
            </Stack.Navigator>
        </NavigationContainer>
            );
        }
        