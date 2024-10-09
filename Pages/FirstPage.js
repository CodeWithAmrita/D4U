import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput, Image} from 'react-native';
import * as firebase from 'firebase'
import db from '../Config'

export default class LogInScreen extends React.Component {
  constructor(){
    super() 
    this.state ={
      email: '',
      password: '',
      temp:'',
    }
  }

  goToMyAccountScreen=()=> {
    this.props.navigation.navigate('HomeScreen',{aeroplane: this.state.temp})
  }

  goToRegisterScreen=()=> { 
    this.props.navigation.navigate('SecondPage')
  }
  
  clearAndGo=async()=>{
    await this.setState({temp:this.state.email})
   await this.setState({email:""})
   await this.setState({password:""})
    this.goToMyAccountScreen() 
  }
  retreivefirestore1=()=>{
  var docRef = db.collection("users").doc(this.state.email); 
 
docRef.get().then((doc) => {
    if (doc.exists) {
      this.state.password == doc.data().password? this.clearAndGo(): alert("The entered password is incorrect")
        
            } else {
        // doc.data() will be undefined in this case
    alert("You entered the wrong email Id")
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

}

  signIn=()=>{
    console.log("I am working.")
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
  
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
      console.log("User credential.")

    this.props.navigation.navigate('HomeScreen')
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
  }


  render() {
    return (
      <View style= {{ flex: 1, backgroundColor: '#FFD662FF'}}>

      <View style={styles.viewStyle}>
        <Text style={styles.textStyle2}>D4U</Text>
      </View>

 
        <Image
	          source={require("../assets/Programming.jpg")}
	          style={{alignSelf: 'center', width:'100%', height:150, marginTop: -10, marginBottom: 40}}
	        />
 

           
        <TextInput 
	                    placeholder="Enter email Id"
	                    onChangeText= {(text)=>{
	                        this.setState({
	                            email: text
	                        })
	                    }}
	                    placeholderTextColor='grey'
	                    value={this.state.email}
	                    style={styles.inputBox}/>


      
            <TextInput 
	                   placeholder="Enter password"
	                    onChangeText= {(text)=>{
	                        this.setState({
	                            password: text
	                        })
	                    }}
	                    placeholderTextColor='grey'
	                    value={this.state.password}
	                    style={styles.inputBox}/> 

            <TouchableOpacity onPress ={this.signIn} style ={styles.button}>
                <Text style ={styles.textStyle}> Sign In </Text>

            </TouchableOpacity>

             <TouchableOpacity onPress ={this.goToRegisterScreen} style ={styles.button2}> 
                <Text  style ={styles.textStyle}> Sign Up </Text>
            </TouchableOpacity>

         




      </View>
    );
  }
}
 
const styles = StyleSheet.create({ 
  inputBox: {
    borderColor: 'black',
    borderWidth: 2,
    width: '65%',
    height: 40,
    borderRadius: 10, 
    marginTop: 18,
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
    marginTop: 50,
    //marginBottom: 10
    
  },

   button2: { 
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
    marginTop: 20,
    marginBottom: 20
    
  },

  textStyle: {
    fontSize: 20,   
    fontFamily: 'sans-serif',
    color: "white"
    },

    viewStyle: {
    //flex: 2,
    backgroundColor: '#00539CFF',
    alignItems: 'center',
    marginBottom: 10,
    width: 316,
    borderBottomWidth: 20,
    borderBottomColor: 'white',  
    
  },

  textStyle2: {
    fontSize: 35,   
    fontFamily: 'Broadway',
    color: "white"
    },
})