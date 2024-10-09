import React from 'react';
import { StyleSheet, Text, View ,FlatList, ScrollView, TouchableOpacity, Image, TextInput} from 'react-native';
import {SearchBar,Header} from 'react-native-elements';
import db from '../Config'

export default class QA extends React.Component {
 constructor(){
    super();
    this.state ={
      language: '',
      question: '',
      questionNo: 0
    }  
  }
  componentDidMount(){
    var token=this.props.navigation.getParam('car')
    this.fillstates(token)
    this.retrieveStories(token)
  }
  
  fillstates=async(bowl1)=>{
      await this.setState({language:bowl1})
            
}

updateFirestore1=()=>{
   var id = '1abc' + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9)  

   db.collection("Wings/" + this.state.language).doc(id).set({
        'language': this.state.language,
        'question': this.state.question,       
        'id' :  id
       })

        alert("Question successfully submitted.") 
}

retrieveStories=(bowl1)=>{ 
    try {
      var allData= []
      var document = []
      var stories = db.collection("Wings/" + bowl1)
        .get().then((querySnapshot)=> {
          querySnapshot.forEach((doc)=> {
              // doc.data() is never undefined for query doc snapshots
         document.push(doc)
              allData.push(doc.data())
             
          }) 
          
          this.setState({questionNo: allData.length})
          console.log("Error" + this.state.questionNo)
        })
    }
    catch (error) {
      console.log(error);
    }
  };


   render() {  
    return (
      <View>
      <Text style={{fontSize:30, fontFamily: 'broadway', alignSelf: 'center', marginBottom: 55}}> Ask a new question </Text>

<TouchableOpacity onPress ={() =>this.props.navigation.navigate('HomeScreen')} >      
            <Image
            style={styles.back2}
            source={require('../assets/back.png')}
          />
          </TouchableOpacity>
          
       <Text style = {{ fontSize:20, color: 'black', alignSelf: 'center', marginBottom: 30}}> Question: </Text>

             <TextInput 
	                    placeholder="Enter your query"
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