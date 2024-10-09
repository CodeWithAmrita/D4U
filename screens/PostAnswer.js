import React from 'react';
import { StyleSheet, Text, View ,FlatList, ScrollView, TouchableOpacity, Image, TextInput} from 'react-native';
import {SearchBar,Header} from 'react-native-elements';
import db from '../Config'

export default class PostAnswer extends React.Component {
 constructor(){
    super();
    this.state ={
     collection: '',
     document: '',
     question: ''
    }  
  }
  componentDidMount(){
    var token=this.props.navigation.getParam('car')
    var token2=this.props.navigation.getParam('bike')
    this.fillstates(token, token2)
  }
  
  fillstates=async(bowl1, bowl2)=>{
      await this.setState({collection:bowl1})
      await this.setState({document:bowl2})
}

updateFirestore1=()=>{
   console.log(this.state.collection)
   console.log(this.state.document)
   db.collection("Wings/" + this.state.collection).doc(this.state.document).update({
        'answer': this.state.question,
        
      })
         alert("Answer successfully submitted") 
}

   render() {   
    return (
      <View>

       <Text style={{fontSize:30, fontFamily: 'broadway', alignSelf: 'center', marginBottom: 55}}> Give an answer </Text>

      
       <Text style = {{ fontSize:20, color: 'black', alignSelf: 'center', marginBottom: 30}}> Answer: </Text>

      
             <TextInput 
	                    placeholder="Enter the answer"
	                    onChangeText= {(text)=>{
	                        this.setState({
	                           question: text
	                        })
	                    }}
	                    placeholderTextColor='grey'
	                    value={this.state.question}  
	                    style={styles.inputBox}/>

          <TouchableOpacity onPress ={this.updateFirestore1} style ={styles.button}>
                <Text  style ={styles.textStyle}> Submit </Text>

            </TouchableOpacity>

             <TouchableOpacity onPress ={() =>this.props.navigation.navigate('HomeScreen')} > 
                <Text  style ={{color: '#00539CFF', alignSelf: 'center', fontSize: 20, marginTop: 10, fontFamily: 'sans-serif' }}>Cancel </Text>
            </TouchableOpacity>

      </View>
    )}
}

const styles = StyleSheet.create({ 
  inputBox: {
    borderColor: 'black',
    borderWidth: 2,
    width: '65%',
    height: 40,
    borderRadius: 10, 
    marginTop: -18,
    alignSelf: 'center'
    
  },
   button: { 
    alignSelf:'center',
    alignText: 'center',
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: '#00539CFF', 
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
    height: 50,
    borderRadius: 60,
    marginTop: 60,
    marginBottom: 10
    
  },

   textStyle: {
    fontSize: 20,   
    fontFamily: 'sans-serif',
    color: "white"
    },

     back2: {
    width: 45,
    height:45,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10
  },

})