import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            email: '',
            password: '',
        }
    }
    render() {
        return (
            <View> 
            <TextInput onChangeText= {(text)=> this.setState({email:text})} placeholder="Ingresa tu email" keyboardType="email-address" value={this.state.email}/>
            <TextInput onChangeText= {(text)=> this.setState({password:text})} placeholder="Ingresa tu contraseña" keyboardType="default" secureTextEntry={true} value={this.state.password}/>
            <TouchableOpacity onPress={()=>this.props.login(this.state.email, this.state.password)}> 
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
        )
    }
}
