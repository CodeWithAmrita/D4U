import React from 'react';
import { StyleSheet, Text, View ,FlatList,ScrollView, TouchableOpacity, Image, TextInput, Linking} from 'react-native';


export default class Python extends React.Component {

   render() { 
    return (
      <View>

        <TouchableOpacity onPress ={() =>this.props.navigation.navigate('Learn')} >      
            <Image
            style={styles.back2}
            source={require('../assets/back.png')}
          />
          </TouchableOpacity>

       <Text style={{fontSize:30, fontFamily: 'broadway', alignSelf: 'center', marginBottom: 30, marginTop: -30}}>Python</Text>


       <Text style={{backgroundColor: 'pink'}}> Python is an interpreted high-level general-purpose programming language. It is a general-purpose programming language, so it can be used for many things. Python is used for web development, AI, machine learning, operating systems, mobile application development, and video games.</Text>

       <Text style={{backgroundColor: '#C5B8FF', marginTop: 20}}> To learn python it is necessary to download a software to run it. One alternative to Visual studio code is 'Python' </Text>
        <Text style = {{ textDecorationLine: 'underline', color: 'blue', marginLeft: 10 }}> https://www.python.org/ </Text>

       <Text style = {{marginTop: 20, backgroundColor: "#BFFFCF"}}> Here are the links of some useful sites to learn basic Python code:</Text>
      


<Text style = {{marginTop: 20,}}> 1. Tutorialspoint:</Text>

 <Text style = {{marginTop: -18, marginLeft: 110, textDecorationLine: 'underline', color: 'blue' }}> https://www.tutorialspoint.com/python/index.htm </Text>

       <Text style = {{marginTop: 20}}> 2. W3 Schools:</Text>
 <Text style = {{marginTop: -18, textDecorationLine: 'underline', marginLeft: 95, color: 'blue' }}> https://www.w3schools.com/python/ </Text>


<Text style = {{marginTop: 20, backgroundColor: "#8EFFFF"}}> Best Python and coding learning courses are introduced by (Click on the following names to visit the sites): </Text>

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
              Linking.openURL('https://www.codecademy.com/learn/learn-python');
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