import React, {Component} from 'react';
import {Text,
        TouchableOpacity,
        View,
        StyleSheet,
        FlatList,
        TextInput } from 'react-native';
import Post from '../components/Post'
import {db} from '../firebase/config'

class Buscar extends Component{
    constructor(props){
        super(props)
        this.state={
        posts: [],
        buscar:'',
        loading:true
        }
    }
buscar(){
    db.collection('Posts').orderBy('createdAt', 'desc').where('owner', '==', this.state.buscar).onSnapshot(
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
                loading:false
            })
        }
    )
}
    render(){
        console.log(this.state.posts)
        console.log(this.props.usuario);
        return(
            <View>
                <TextInput onChangeText={(text)=>this.setState({buscar:text})} placeholder='Ingresa un usuario'/> 
          <TouchableOpacity style={styles.touchable} onPress={()=>this.buscar()}>
            <Text style={styles.touchableText}>Presiona el boton para buscar</Text>
          </TouchableOpacity>   
          {this.state.loading?
           <Text style={styles.touchableText}></Text>
           :
           this.state.posts.length>0 ? 
            <FlatList 
            data = {this.state.posts}
            keyExtractor = { post => post.id}
            renderItem= {({item})=><Post postData={item} />}
        />
        :
        <Text> No se encontraron resultados para tu busqueda</Text>
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

export default Buscar;