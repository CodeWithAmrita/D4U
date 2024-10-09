import * as React from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';
import * as firebase from 'firebase';
import db from '../Config';

export default class RegisterScreen extends React.Component {
  constructor(){
    super()
    this.state ={
      email: '',
      password: '',
      name: '',
      phone: ''
    }
  }
 
  goToLogInScreen=()=> {
    this.props.navigation.navigate('FirstPage')
  }

   updateFirestore1=()=>{
   
   db.collection("users").doc(this.state.email).set({
        'name': this.state.name,
        'email': this.state.email,
        'phone': this.state.phone,
        'password': this.state.password,
       
      })
      alert("Account successfully registered.") 
}

    signIn=()=>{
      console.log("Working")
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
  .then((userCredential) => {
    // Signed in 
     console.log(userCredential)
     this.updateFirestore1()
     this.props.navigation.navigate("HomeScreen")
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });

}

  render() {
    return (
      <View>
      
      <Text style={{fontSize:30, fontFamily: 'broadway', alignSelf: 'center', marginBottom: 20,}}> SIGN UP</Text> 
       <Text style = {{marginTop:25, color: '#808080'}}> Name</Text>
            <TextInput  
	                   placeholder=""
	                    onChangeText= {(text)=>{
	                        this.setState({
	                            name: text 
	                        })
	                    }}
	                    placeholderTextColor='maroon'
	                    value={this.state.name}
	                    style={styles.inputBox}/> 

           <Text style = {{marginTop:15, color: '#808080'}}> Phone Number</Text>
             <TextInput 
	                    placeholder=""
	                    onChangeText= {(text)=>{
	                        this.setState({
	                           phone: text
	                        })
	                    }}
	                    placeholderTextColor='maroon'
	                    value={this.state.phone} 
	                    style={styles.inputBox}/>


        <Text style = {{marginTop:15, color: '#808080'}}> Enter email Id </Text>
        <TextInput 
	                    placeholder=""
	                    onChangeText= {(text)=>{
	                        this.setState({
	                            email: text
	                        })
	                    }}
	                    placeholderTextColor='maroon'
	                    value={this.state.email}
	                    style={styles.inputBox}/>

     

         <Text style = {{marginTop:15, color: '#808080'}}> Enter password</Text>
            <TextInput 
	                   placeholder=""
	                    onChangeText= {(text)=>{
	                        this.setState({
	                            password: text 
	                        })
	                    }}
	                    placeholderTextColor='maroon'
	                    value={this.state.password}
	                    style={styles.inputBox}/> 

        

            <TouchableOpacity onPress ={this.signIn} style ={styles.button}>
                <Text  style ={styles.textStyle}> Register </Text>

            </TouchableOpacity>

             <TouchableOpacity onPress ={this.goToLogInScreen} style ={styles.button2}> 
                <Text style ={styles.textStyle2}>Cancel </Text>
            </TouchableOpacity>




      </View>
    );
  }
}

const styles = StyleSheet.create({ 
   inputBox: {
    borderColor: 'black',
    borderWidth: 2,
    width: '55%',
    height: 30,
    borderRadius: 10, 
    marginTop: -20,
    alignSelf: 'center',
    marginLeft: 65
    
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
    backgroundColor: 'white', 
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 30,
    marginTop: 25,
    //marginBottom: 10
    
  },

   
  textStyle: {
    fontSize: 20,   
    fontFamily: 'sans-serif',
    color: "white"
    },

  textStyle2: {
    fontSize: 20,   
    fontFamily: 'sans-serif',
    color: "#00539CFF"
    },

})
