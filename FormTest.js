import React,{Component} from 'react';
import {View, SafeAreaView,Text,TextInput,Button,TouchableOpacity} from 'react-native'
import CustomBtn from "./CustomBtn";

class FormTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title:"123",
            subtitle:"456",


            email:"",
            password:""
        };
    }
    render(){
        return (
            <SafeAreaView style={{
                backgroundColor:"pink",
              //  flex:1,
               // alignItems:"stretch"
            }}>

             <CustomBtn valuex={1}/>
                <CustomBtn valuex={2}/>
                <CustomBtn valuex={3}/>
                <CustomBtn valuex={4}/>
                <CustomBtn valuex={5}/>
                <CustomBtn valuex={6}/>


                <TextInput value={this.state.email} onChangeText={text => {

                    this.setState({
                        email:text
                    })

                }} style={{backgroundColor:"yellow",padding:30,margin:10}}/>


                <TextInput secureTextEntry={true} value={this.state.password} onChangeText={text => {

                    this.setState({
                        password:text
                    })

                }} style={{backgroundColor:"yellow",padding:30,margin:10}}/>
                <Button title={"Press me"}  onPress={()=>{
                    let email = this.state.email
                    let password = this.state.password


                    alert("pressed "+email+password)
                }} />
            </SafeAreaView>
        )
    }

}
export default FormTest;
