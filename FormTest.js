import React,{Component} from 'react';
import {View, SafeAreaView,ScrollView,TextInput,Button,TouchableOpacity} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomBtn from "./CustomBtn";
import ScrollViewCommands from "react-native/Libraries/Components/ScrollView/ScrollViewCommands";

class FormTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title:"123",
            subtitle:"456",


            a:"",
            b:""
        };
    }
    render(){
        return (
            <SafeAreaView style={{
                backgroundColor:"pink",

              //  flex:1,
               // alignItems:"stretch"
            }}>


                <TextInput value={this.state.a} onChangeText={text => {

                    this.setState({
                        a:text
                    })

                }} style={{backgroundColor:"yellow",padding:30,margin:10}}/>


                <TextInput  value={this.state.b} onChangeText={text => {

                    this.setState({
                        b:text
                    })

                }} style={{backgroundColor:"yellow",padding:30,margin:10}}/>
                <Button title={"Press me"}  onPress={()=>{


                    let a = parseInt(this.state.a)
                    let b = parseInt(this.state.b)

                    let c = (a+b)
                    let d = c*5
debugger
                    alert("pressed "+d)
                }} />

            </SafeAreaView>
        )
    }

}
export default FormTest;
