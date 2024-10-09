import React from 'react';
import { StyleSheet, Text, View ,FlatList,ScrollView, TouchableOpacity, Image, TextInput} from 'react-native';
import * as firebase from 'firebase'
import db from '../Config'

export default class Type extends React.Component {
constructor(){
  super();
  this.state={
    types: [],
    language: ''
  }
}

componentDidMount (){ 
 var token = this.props.navigation.getParam('car')  
 this.fillstates(token)
}

  fillstates=async(bowl1)=>{
      await this.setState({language:bowl1}) 
      this.retreivefirestore2(bowl1)        
}

retreivefirestore2=(cycle)=>{
  var docRef = db.collection("Wings").doc(cycle);

docRef.get().then((doc) => {
    if (doc.exists) {
      console.log("Document data:", doc.data().Types);
    this.setState({
      types: doc.data().Types
    })
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error); 
});

} 

  render() { 
    return (
    <View>
    <Text style={{fontSize:30, fontFamily: 'broadway', alignSelf: 'center',}}> Choose the type:</Text> 

      <TouchableOpacity onPress ={() =>this.props.navigation.navigate('HomeScreen')} >      
            <Image
            style={styles.back2}
            source={require('../assets/back.png')}
          />
          </TouchableOpacity>

          {this.state.types.map(item => { 
            return (
              <TouchableOpacity style={styles.button} onPress ={() => {this.props.navigation.navigate('QA', {car: item, bike: this.state.language})}}>
              <Text style={styles.textStyle}>{item}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
    );
  } 
} 
 
const styles = StyleSheet.create({
  button: { 
    alignSelf:'center',
    alignText: 'center',
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: '#00539CFF', 
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    borderRadius: 60,
    marginTop: 50,

  },

  back2: {
    width: 45,
    height:45,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 10
  },

  textStyle: {
    fontSize: 20,
    fontFamily: 'sans-serif',
    color: "white"
    },
});