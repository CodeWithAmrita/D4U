import React from 'react';
import { StyleSheet, Text, View ,FlatList,ScrollView, TouchableOpacity, Image, TextInput, Linking} from 'react-native';

export default class Html extends React.Component {

   render() { 
    return (
      <View>

        <TouchableOpacity onPress ={() =>this.props.navigation.navigate('Learn')} >      
            <Image
            style={styles.back2}
            source={require('../assets/back.png')}
          />
          </TouchableOpacity>

       <Text style={{fontSize:30, fontFamily: 'broadway', alignSelf: 'center', marginBottom: 30, marginTop: -30}}> Html</Text>

       <Text style={{backgroundColor: 'pink'}}> HTML (Hypertext Markup Language) is the code that is used to structure a web page and its content. It is mainly used to create your own website. It is not very hard to learn. </Text>

       <Text style = {{marginTop: 20, backgroundColor: "#BFFFCF"}}> Here are the links of some useful sites to learn basic HTML code:</Text>


       <Text style = {{marginTop: 20}}> 1. W3 Schools:</Text>
 <Text style = {{marginTop: -18, textDecorationLine: 'underline', marginLeft: 95, color: 'blue' }}> https://www.w3schools.com/html/default.asp </Text>

<Text style = {{marginTop: 20,}}> 2. Tutorials Point:</Text>

 <Text style = {{marginTop: -18, marginLeft: 110, textDecorationLine: 'underline', color: 'blue' }}> https://www.tutorialspoint.com/html/index.htm </Text>

<Text style = {{marginTop: 20, backgroundColor: "#8EFFFF"}}> Best HTML and coding learning courses are introduced by (Click on the following names to visit the sites): </Text>



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
              Linking.openURL('https://www.codecademy.com/learn/learn-html');
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