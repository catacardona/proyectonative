import React, {Component} from 'react';
import {Text,
        TouchableOpacity,
        View,
        StyleSheet,
        FlatList} from 'react-native';
import Post from '../components/Post'
import {db} from '../firebase/config'

class Perfil extends Component{
    constructor(props){
        super(props)
        this.state={
        posts: [] 
        }
    }
componentDidMount(){
    db.collection('Posts').orderBy('createdAt', 'desc').where('owner', '==', this.props.usuario.email).onSnapshot(
        docs => {
            let posteos = [];
            docs.forEach( doc => {
                posteos.push({
                    id: doc.id,
                    data: doc.data()
                })
            })
            
            this.setState({
                posts: posteos,
            })
        }
    )
}
    render(){
        console.log(this.props.usuario);
        return(
            <View>
                <Text style={styles.title}> Mi perfil </Text>
            <Text style={styles.welcome}> Bienvenido: {this.props.usuario.displayName}</Text>
          <Text style={styles.element}> Email: {this.props.usuario.email}</Text>
          <Text style={styles.element}> Usuario creado el: {this.props.usuario.metadata.creationTime}</Text>
          <Text style={styles.element}> Último login: {this.props.usuario.metadata.lastSignInTime}</Text>
          <TouchableOpacity style={styles.touchable} onPress={()=>this.props.logout()}>
            <Text style={styles.touchableText}>Logout</Text>
          </TouchableOpacity>   
          {this.state.posts.length>0 ? 
           <FlatList 
           data = {this.state.posts}
           keyExtractor = { post => post.id}
           renderItem= {({item})=><Post postData={item} />}
       />
       :
       <Text> </Text>
          }      
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