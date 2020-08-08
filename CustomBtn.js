import React,{Component} from 'react';
import {View, SafeAreaView, Text, TouchableOpacity} from 'react-native'
class CustomBtn extends Component {

    render(){
        return (
            <TouchableOpacity onPress={()=>{
                alert("you pressed 9")
            }}>
                <View style={{
                    backgroundColor:"black",
                    height:70,width:70,
                    margin:30,borderRadius:70/2}}>
                    <Text style={{textAlign:"center",color:"white",paddingTop:22,fontSize:22,fontWeight:"bold"}} >{this.props.valuex}</Text>
                </View>
            </TouchableOpacity>
        )
    }

}
export default CustomBtn;
