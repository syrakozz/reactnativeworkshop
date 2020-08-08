import React,{Component} from 'react';
import {View, SafeAreaView,Text,TouchableOpacity, TouchableWithoutFeedback, Image,Button} from 'react-native'
import InnerHeader from "./InnerHeader";

class TestButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title:"123",
            subtitle:"456"
        };
    }
    render(){
        return (
            <SafeAreaView style={{
                backgroundColor:"pink",
                flex:1,
                alignItems:"stretch"
            }}>
                <Text style={{fontSize:20,textAlign:"center"}}>{this.state.title}</Text>

<InnerHeader headername={this.state.subtitle} />
                <Button title={"Press me"}  onPress={()=>{
                   let titlevalue = this.state.title
                    this.setState({
                        subtitle:titlevalue
                    })
                }} />
            </SafeAreaView>
        )
    }

}
export default TestButton;
