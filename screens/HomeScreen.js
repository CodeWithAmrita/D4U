import React from 'react';
import { StyleSheet, Text, View , Image, FlatList,ScrollView, TouchableOpacity} from 'react-native';
import {SearchBar,Header} from 'react-native-elements';

//import db from '../config'


export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:"Html", likes:12, image:"https://cdn0.iconfinder.com/data/icons/social-network-7/50/22-512.png"},
        {id:"ReactNative", likes:11, image:"https://www.filepicker.io/api/file/4C6yPDywSUeWYLyg1h9G"} ,
        {id: 'JavaScript', likes:25, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrmEdACKxI99On-XLsJArLX_XpH8WftBI70CJBkU91Pd023VAnwQohjWhUCO0j04W3VPY&usqp=CAU"}, 
        {id:"Python", likes:12, image:"https://idroot.us/wp-content/uploads/2015/09/python-logo.jpg"}, 
        
      ]
    };
  } 

 
    render(){ 
      return(     

            <ScrollView style ={styles.container}>  

             <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>D4U</Text>
      </View>

                                            
          <FlatList
                data={this.state.data} 
                renderItem={({ item }) => (
                  <View style={styles.itemContainer}>
                 <TouchableOpacity  onPress = {() => {this.props.navigation.navigate('Type', {car: item.id})}}>
                <Image style={{width: 110, height: 110, borderRadius: 10, marginLeft: 15}} source={{uri:item.image}}/>
                <Text style={styles.textStyle2}>{item.id}</Text>
                 </TouchableOpacity>          
                  </View>
                )}
                 numColumns={2}
                keyExtractor={(item, index) => index.toString()}
                />        

        <TouchableOpacity style={styles.button} onPress = {() => {this.props.navigation.navigate('Help')}}>
        <Text style={{color: 'white', fontSize: 20, fontFamily: "sans-serif-medium"}}> Help </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2} onPress = {() => {this.props.navigation.navigate('Learn')}}>
         <Text style={{color: 'black', fontSize: 20, fontFamily: "sans-serif-medium"}}> Learn programming for beginners </Text>
        </TouchableOpacity>

       

                    
        </ScrollView>  

     
      );      
    }
}


const styles = StyleSheet.create({
  container: {
   
     alignItems: 'center' 
    
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
    marginTop: 40,
    marginBottom: 10
    
  },

   button2: { 
    alignSelf:'center',
    alignText: 'center',
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#49E9FF', 
    alignItems: 'center',
    justifyContent: 'center',
 
    height: 50,
    borderRadius: 60,
    marginTop: 20,
    marginBottom: 10
    
  },

  item: {
    backgroundColor: 'pink',
    padding:10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  textStyle: {
    fontSize: 35,   
    fontFamily: 'Broadway',
    color: "white"
    },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    flexBasis: '47%',
  },

  viewStyle: {
    //flex: 2,
    backgroundColor: '#00539CFF',
    alignItems: 'center',
    marginBottom: 10,
    width: 333,
     
     
  },

   textStyle2: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
     alignText: 'center',
    fontfamily: 'sans-serif-medium',
    marginLeft:15
    
  },
});

