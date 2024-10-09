import React from 'react';
import { StyleSheet, Text, View ,FlatList,ScrollView, TouchableOpacity, Image, TextInput} from 'react-native';
import * as firebase from 'firebase'
import db from '../Config'

export default class Learn extends React.Component {

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

  <Text style = {{marginTop: 20}}> To learn programming, it is necessary to install a platform to write and run the code. Visual Studio Code is a source-code editor made by Microsoft for Windows, Linux and macOS. It supports most languages like: Html, CSS, React-native, JavaScript, Python, JSON, TypeScript. You can install it here: </Text>
   
   <Text style = {{ marginLeft: 10, textDecorationLine: 'underline', color: 'blue' }}> https://code.visualstudio.com/ </Text>

  
      <TouchableOpacity style={styles.button} onPress ={() => this.props.navigation.navigate('Html')} >
      <Text style={styles.textStyle}> Html </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress ={() => this.props.navigation.navigate('ReactNative')}>
      <Text style={styles.textStyle}> React Native </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress ={() => this.props.navigation.navigate('JavaScript')}>
      <Text style={styles.textStyle}> JavaScript </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress ={() => this.props.navigation.navigate('Python')}>
      <Text style={styles.textStyle}> Python </Text>
      </TouchableOpacity>
      
      </View>

    )}
}

const styles = StyleSheet.create({
  button: { 
    alignSelf:'center',
    alignText: 'center',
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: '#00B6A0', 
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    borderRadius: 60,
    marginTop: 40,

  },

  back2: {
    width: 45,
    height:45,
    marginTop: 20,
    marginLeft: 10
  },

  textStyle: {
    fontSize: 20,
    fontFamily: 'sans-serif',
    color: "white"
    },
});