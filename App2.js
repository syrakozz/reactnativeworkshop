import React,{Component} from 'react';
import {View,SafeAreaView,Text} from 'react-native'
class App2 extends Component {

    render(){
        return (
            <SafeAreaView style={{
                backgroundColor:"pink",
              //  flex:1,
              //  flexDirection:"row",
                //  justifyContent:"center",
                // alignItems:"stretch"
            }}>

<Text style={{color:"red",textAlign:"center",fontSize:33,backgroundColor:"green",marginTop:100,paddingTop:230}}>
    hello word
</Text>

            </SafeAreaView>
        )
    }

}
export default App2;
