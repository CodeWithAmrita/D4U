import React from 'react';
import { StyleSheet, Text, View ,FlatList,ScrollView, TouchableOpacity, Image, TextInput} from 'react-native'; 

export default class Help extends React.Component {
  render() {
    return (
      <View>
         <Text style={{fontSize:30, fontFamily: 'broadway', alignSelf: 'center'}}> Help </Text> 

          <TouchableOpacity onPress ={() =>this.props.navigation.navigate('HomeScreen')} >      
            <Image
            style={styles.back}
            source={require('../assets/back.png')}
          />
          </TouchableOpacity>
   
            <Image
            style={styles.back2}
            source={require('../assets/QM.jpg')}
          />

          <Text style= {{marginBottom: 15}}> Need help? The languages or the types doesn't work for you?</Text>
          <Text> Write your query directly to the owner:           
          </Text>

             <Text style= {{alignSelf: 'center', marginTop: 15}}> Email: amritanag297@gmail.com </Text>
             
             <Text> We will try to get back to you as soon as we can. Thank you for your patience. </Text>
       

      </View>
    )}
}

const styles = StyleSheet.create({ 

  back: {
    width: 45,
    height:45,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 10
  },
  back2: {
    width: 150,
    height:150,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center'
  }
});