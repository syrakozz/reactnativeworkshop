import React,{Component} from 'react';
import {View, SafeAreaView, Text, Image} from 'react-native'
import InnerHeader from "./InnerHeader";
class HelloWorldApp extends Component {

  render(){
    return (
    <SafeAreaView style={{
        backgroundColor:"pink",
        flex:1,
       // flexDirection:"row",
       // justifyContent:"center",
        alignItems:"stretch"
    }}>



        <InnerHeader />
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
