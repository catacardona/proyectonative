import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer' //traigo lo que importe
import Home from '../screens/Home'
import Login from '../screens/Login'
import Registro from '../screens/Registro'
import Perfil from '../screens/Perfil'
import Posts from '../screens/Posts'

const Drawer= createDrawerNavigator() //funcion que le devuelve cosas a drawer, para que funcione en el render

export default class Menu extends Component {
    constructor(){
        super()
        this.state={}
    }
    render() {
        return (
           <NavigationContainer>
               <Drawer.Navigator>
                   <Drawer.Screen name="Home" component={()=> <Home/>}/>
                   <Drawer.Screen name="Login" component={()=> <Login/>}/>
                   <Drawer.Screen name="Registro" component={()=> <Registro/>}/>
                   <Drawer.Screen name="Posts" component={()=> <Posts/>}/>
                   <Drawer.Screen name="Perfil" component={()=> <Perfil/>}/>
               </Drawer.Navigator>
           </NavigationContainer>
        )
    }
}
