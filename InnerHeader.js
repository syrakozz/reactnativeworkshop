import React,{Component} from 'react';
import {View, SafeAreaView, Text, Image} from 'react-native'
class InnerHeader extends Component {

    render(){
        return (
                <View style={{
                    backgroundColor:"red",
                }}>
                    <Text style={{color:"black",textAlign:"center",fontSize:33,backgroundColor:"green"}}>
                         {this.props.headername}
                    </Text>
                </View>
        )
    }

}
export default InnerHeader;
