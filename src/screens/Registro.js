import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'

export default class Registro extends Component {
    constructor(props){
        super(props)
        this.state={
            email: '',
            username: '',
            password: ''
        }
    }
    render() {
        return (
            <View> 
                <TextInput onChangeText= {(text)=> this.setState({email:text})} placeholder="Ingresa tu email" keyboardType="email-address" value={this.state.email}/>
                <TextInput onChangeText= {(text)=> this.setState({username:text})} placeholder="Ingresa tu nombre de usuario" keyboardType="default" value={this.state.username}/>
                <TextInput onChangeText= {(text)=> this.setState({password:text})} placeholder="Ingresa tu contraseña" keyboardType="default" secureTextEntry={true} value={this.state.password}/>
                <TouchableOpacity onPress={()=>this.props.register(this.state.email, this.state.password)}> 
                    <Text>Registrarse</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
