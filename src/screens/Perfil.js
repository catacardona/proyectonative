import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default class Perfil extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={()=>this.props.logout()}> 
                    <Text> Logout</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
