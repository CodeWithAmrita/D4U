import * as React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import QA from './screens/QA';
import Type from './screens/Type';
import PostQuestion from './screens/PostQuestion'; 
import PostQuestion2 from './screens/PostQuestion2';
import PostAnswer from './screens/PostAnswer'; 
import Help from './screens/Help';

import Learn from './screens/Learn';

import FirstPage from './Pages/FirstPage'; 
import SecondPage from './Pages/SecondPage'; 

import Html from './Learn/Html'; 
import JavaScript from './Learn/JavaScript'; 
import Python from './Learn/Python'; 
import ReactNative from './Learn/ReactNative'; 

import {createBottomTabNavigator} from 'react-navigation-tabs' 
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 
 
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      
        <AppContainer/>
     

      </View>  
    );
  }
}
const TabNavigator = createBottomTabNavigator({   
  QA: QA,
  PostQuestion:  PostQuestion
}, 
{
  defaultNavigationOptions: ({navigation})=>({ 
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "QA"){
        return(
          <Image
          source={require("./assets/QA.png")} 
          style={{width:55, height:45}}
        />
        )
        
      }
      else if(routeName === "PostQuestion"){
        return(
          <Image
          source={require("./assets/Q.png")}
          style={{width:40, height:40}}
        />)
        
      }
    }  
  })
}
  )

var AppNavigator = createSwitchNavigator({ 

  
  FirstPage: FirstPage,
  SecondPage: SecondPage,
     
 
  HomeScreen: HomeScreen,
  Type: Type,
  QA : QA,
  TabNavigator: TabNavigator,
  PostQuestion:  PostQuestion, 
  PostQuestion2: PostQuestion2,
  PostAnswer: PostAnswer,
  Help: Help,

  Learn: Learn,
  Html: Html,
  JavaScript: JavaScript,
  Python: Python,
  ReactNative: ReactNative,
  
})



const AppContainer = createAppContainer(AppNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD662FF',
    
   
  },
});