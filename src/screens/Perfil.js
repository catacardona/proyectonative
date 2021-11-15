import React, {Component} from 'react';
import {Text,
        TouchableOpacity,
        View,
        StyleSheet,
        Image,
        ActivityIndicator,
        FlatList,
        TextInput } from 'react-native';


class Perfil extends Component{
    constructor(){
        super()
        this.state={
            
        }
    }

    render(){
        console.log(this.props.usuario);
        return(
            <View>
                <Text style={styles.title}> Mi perfil </Text>
          <Text style={styles.welcome}> Bienvenido: {this.props.usuario.email}</Text>
          <Text style={styles.element}> Usuario creado el: {this.props.usuario.metadata.creationTime}</Text>
          <Text style={styles.element}> Último login: {this.props.usuario.metadata.lastSignInTime}</Text>
          <TouchableOpacity style={styles.touchable} onPress={()=>this.props.logout()}>
            <Text style={styles.touchableText}>Logout</Text>
          </TouchableOpacity>         
      </View>       
    )
  }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textDecoration: 'underline',
        textAlign: 'center',
    },
    imagen:{
        height:250,
    }
})

export default Perfil;