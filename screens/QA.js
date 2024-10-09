import React from 'react';
import { StyleSheet, Text, View ,FlatList, ScrollView, TouchableOpacity, Image} from 'react-native';
import {SearchBar,Header} from 'react-native-elements';
import db from '../Config'
 

export default class QA extends React.Component {
  constructor(){
    super();
    this.state ={
      allData:[],
      dataSource:[], 
      search : '',
      language: '',
      field: ''
    } 
  }
  componentDidMount(){
    var token=this.props.navigation.getParam('car')
    var token2 =this.props.navigation.getParam('bike')
    this.fillstates(token, token2)
  }
  

  fillstates=async(bowl1,bowl2)=>{
      await this.setState({language:bowl1})
      await this.setState({field: bowl2})
      this.retrieveStories(bowl1, bowl2)        
}

updateSearch = search => { 
    this.setState({ search });
  };
 
  retrieveStories=(bowl1, bowl2)=>{   
    try {
      var allData= []
      var document = []
      var stories = db.collection("Wings/" + bowl2 + '/'+ bowl1)
        .get().then((querySnapshot)=> {
          querySnapshot.forEach((doc)=> {
              // doc.data() is never undefined for query doc snapshots
         document.push(doc)
              allData.push(doc.data())
             
          }) 
          console.log("Hi" + document)
          this.setState({allData})
          console.log(this.state.allData)
        })
    }
    catch (error) {
      console.log(error);
    }
  };

  


  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.state.allData.filter((item)=> {
      //applying filter for the inserted text in search bar
     const itemData = item.status ? item.status.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      search: text,
    });
  }

    render(){ 
      return(
        <ScrollView style ={styles.container}>
           
          <View styles ={{height:20,width:'100%'}}>
              <SearchBar 
              placeholder="Search"
              onChangeText={text => this.SearchFilterFunction(text)}
              onClear={text => this.SearchFilterFunction('')}
              value={this.state.search}
            />
          </View>

          
        <TouchableOpacity onPress ={() =>this.props.navigation.navigate('HomeScreen')} >      
            <Image
            style={styles.back2}
            source={require('../assets/back.png')}
          />
          </TouchableOpacity>
          
          <FlatList
                data={this.state.search === "" ?  this.state.allData: this.state.dataSource}
                renderItem={({ item }) => (
                  <View style={styles.itemContainer}>
                  <Text> Q : {item.question}</Text>
                    <Text> A : {item.answer}</Text>

            <TouchableOpacity >      
            <Image
            style={styles.back}
            source={require('../assets/like.png')}
          />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress ={() => this.props.navigation.navigate('PostAnswer', {car: item.language, bike: item.id})}>
          <Text style={styles.textStyle2}> Answer </Text>
          </TouchableOpacity>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                /> 

        <TouchableOpacity style={styles.button} onPress ={() => this.props.navigation.navigate('PostQuestion')}>      
        <Text style={styles.textStyle}> Ask a Question </Text>
        </TouchableOpacity>       
        </ScrollView>  
      );      
    }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFD662FF',
  },
  item: {
    backgroundColor: '#00539CFF',
    padding:10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  itemContainer: {   
    width:'100%',
    borderWidth: 2,
    borderColor: '#00539CFF',
    justifyContent:'center',
    alignSelf: 'center',
  },
  hi3: {
    height: 50,
    width:'50%',
    
  },
  back: {
    width: 32,
    height: 32,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10
  },

  back2: {
    width: 45,
    height:45,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10
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
    marginTop: 20,
    marginBottom: 10
    
  },

   textStyle: {
    fontSize: 15,
   
    fontFamily: 'sans-serif',
    color: "white"
    },

    textStyle2: {
    fontSize: 15,
    fontFamily: 'sans-serif',
    color: "white",
   
    
    },
});

