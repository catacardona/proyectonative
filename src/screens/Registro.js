import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'

export default class Registro extends Component {
    constructor(){
        super()
        this.state={
            email: '',
            username: '',
            password: ''
        }
    }
    render() {
        return (
            <View> 
                <TextInput onChangeText= {(text)=> this.setState({email:text})} placeholder="Ingresa tu email" keyboardType="email-address"/>
                <TextInput onChangeText= {(text)=> this.setState({username:text})} placeholder="Ingresa tu nombre de usuario" keyboardType="default"/>
                <TextInput onChangeText= {(text)=> this.setState({password:text})} placeholder="Ingresa tu contraseña" keyboardType="default" secureTextEntry={true}/>
                <TouchableOpacity onPress={()=>console.log("Registrado")}> 
                    <Text>Registrarse</Text>
                </TouchableOpacity>
            </View>
        )
    }
}