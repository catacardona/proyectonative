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
import {auth} from '../firebase/config'
export default class Menu extends Component {
    constructor(){
        super()
        this.state={
            logedIn: false,
            usuario: '',
        }
    }
    componentDidMount(){
        auth.onAuthStateChanged(usuario=>{
            if(usuario){
                this.setState({
                    logedIn: true,
                    usuario: usuario
                })
            }
        })
    }
    register(email, password){
        auth.createUserWithEmailAndPassword(email, password)
        .then(()=> { 
            console.log('Registrado');
            Response.usuario.updateProfile({
                displayName: username
            })
        })
    }
    login(email,password){
        auth.signInWithEmailAndPassword(email, password)
        .then((usuario)=>{
            console.log('Logueado')
            this.setState({
                logedIn: true,
                usuario: usuario.user
            })
        })
    }
    logout(){
        auth.signOut()
        .then(()=>{
            this.setState({
                logedIn: false,
                usuario: ''
            })
        })
    }
    render() {
        return (
           <NavigationContainer>
{               this.state.logedIn? (
    <Drawer.Navigator>
    <Drawer.Screen name="Home" component={()=> <Home/>}/>
    <Drawer.Screen name="Posts" component={()=> <Posts/>}/>
    <Drawer.Screen name="Perfil" component={()=> <Perfil logout={()=>this.logout()} usuario={this.state.usuario}/>}/>
</Drawer.Navigator>
):(
    <Drawer.Navigator>
                   <Drawer.Screen name="Login" component={()=> <Login login={(email, password)=>this.login(email,password)} />}/>
                   <Drawer.Screen name="Registro" component={()=> <Registro register={(email, password)=>this.register(email,password)}/>}/>
               </Drawer.Navigator>
)}
              
           </NavigationContainer>
        )
    }
}
