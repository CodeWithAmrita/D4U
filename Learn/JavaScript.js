import React from 'react';
import { StyleSheet, Text, View ,FlatList,ScrollView, TouchableOpacity, Image, TextInput, Linking} from 'react-native';


export default class JavaScript extends React.Component {

   render() { 
    return (
      <View>

        <TouchableOpacity onPress ={() =>this.props.navigation.navigate('Learn')} >      
            <Image
            style={styles.back2}
            source={require('../assets/back.png')}
          />
          </TouchableOpacity>

       <Text style={{fontSize:30, fontFamily: 'broadway', alignSelf: 'center', marginBottom: 30, marginTop: -30}}>JavaScript</Text>

       <Text style={{backgroundColor: 'pink'}}> JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions</Text>

       <Text style = {{marginTop: 20, backgroundColor: "#BFFFCF"}}> Here are the links of some useful sites to learn basic JavaScript code:</Text>

<Text style = {{marginTop: 20,}}> 1. JavaScript:</Text>

 <Text style = {{marginTop: -18, marginLeft: 90, textDecorationLine: 'underline', color: 'blue' }}> https://www.javascript.com/ </Text>

       <Text style = {{marginTop: 20}}> 2. W3 Schools:</Text>
 <Text style = {{marginTop: -18, textDecorationLine: 'underline', marginLeft: 95, color: 'blue' }}> https://www.w3schools.com/js/default.asp </Text>


<Text style = {{marginTop: 20, backgroundColor: "#8EFFFF"}}> Best JavaScript and coding learning courses are introduced by (Click on the following names to visit the sites): </Text>

        <Text
            style={{marginTop: 20, alignSelf: 'center', color: 'blue'}}
            onPress={() => {
              Linking.openURL('https://www.whitehatjr.com/');
            }}>
            Whitehat Jr 
          </Text>

          <Text
            style={{marginTop: 20, alignSelf: 'center', color: 'blue'}}
            onPress={() => {
              Linking.openURL('https://www.codecademy.com/catalog/language/javascript');
            }}>
            Codecademy
          </Text>

         

 <Text style = {{marginTop: 20, backgroundColor: "#FFF28E", marginBottom: 20,}}> There are other courses brought up by Udemy, Coursera, CodeCamp, Pluralsight and many others. </Text>


      </View>

    )}
}


const styles = StyleSheet.create({
   
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