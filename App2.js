import React,{Component} from 'react';
import {View,SafeAreaView,Text} from 'react-native'
class App2 extends Component {

    render(){
        return (
            <SafeAreaView style={{
                backgroundColor:"pink",
                flex:1,
              //  flexDirection:"row",
                //  justifyContent:"center",
                // alignItems:"stretch"
            }}>

<Text style={{color:"red",textAlign:"right",fontSize:33}}>
    hello word
</Text>

            </SafeAreaView>
        )
    }

}
export default App2;
