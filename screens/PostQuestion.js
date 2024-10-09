import React, { Component } from 'react';  
import { AppRegistry, SectionList, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';  
  
export default class PostQuestion extends Component {  
    render() {  
        return (  
            <View style={styles.container}>  

              <TouchableOpacity onPress ={() =>this.props.navigation.navigate('HomeScreen')} >      
            <Image
            style={styles.back2}
            source={require('../assets/back.png')}
          />
          </TouchableOpacity>

                <SectionList   
                    sections={[  
                        {title: 'Html', data: ['Html/Html5', 'Html/CSS']},  
                        {title: 'ReactNative', data: ['ReactNative/Expo', 'ReactNative/Npm packages']},  
                        {title: 'JavaSript', data: ['JavaScript/Three.js', 'JavaScript/Angular.js']}, 
                        {title: 'Python', data: ['Python/Machine Learning', 'Python/Automation']}, 
                    ]}  
                    renderItem={({item}) => <TouchableOpacity onPress = {() => {this.props.navigation.navigate('PostQuestion2', {car: item})}}>
                    <Text style={styles.item}>{item}</Text>
                    </TouchableOpacity>}   
                    
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}  
                    keyExtractor={(item, index) => index}  
                />  
            </View>  
        );  
    }  
}  
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        backgroundColor: "#FFD662FF ",
      
    },  
    sectionHeader: {  
        paddingTop: 2,  
        paddingLeft: 10,  
        paddingRight: 10,  
        paddingBottom: 2,  
        fontSize: 20,  
        fontFamily: 'broadway',
        fontWeight: 'bold',  
        color: "#fff",  
        backgroundColor: '#00539CFF',  
    },  
    item: {  
        padding: 10,  
        fontSize: 18,  
        height: 44,  
    },
     back2: {
    width: 45,
    height:45,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10
  },
})  