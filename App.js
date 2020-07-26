import React,{Component} from 'react';
import {View,SafeAreaView} from 'react-native'
class HelloWorldApp extends Component {

  render(){
    return (
    <SafeAreaView style={{
        backgroundColor:"pink",
        flex:1,
        flexDirection:"row",
      //  justifyContent:"center",
       // alignItems:"stretch"
    }}>

        <View style={{
            backgroundColor:"black",
            height:50,
            width:50
        }}>

        </View>

        <View style={{
            backgroundColor:"green",
            height:50,
            width:50
        }}>

        </View>

        <View style={{
            backgroundColor:"blue",
           height:50,
            width:50
            //width:50
        }}>

        </View>

    </SafeAreaView>
    )
  }

}
export default HelloWorldApp;
