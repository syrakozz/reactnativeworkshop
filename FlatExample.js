import React,{Component} from 'react';
import axios from "axios/index";
import {View, SafeAreaView, FlatList, Text, Button, TouchableOpacity, Image} from 'react-native'
import CustomBtn from "./CustomBtn";

class FlatExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title:"123",
            subtitle:"456",
data:[],

            email:"",
            password:""
        };
    }

    renderItemView(item){

        return (
            <View style={{flexDirection:"row",}}>
                <Text style={{color:"red",textAlign:"center",fontSize:30,margin:10}}>{item.name}</Text>
                <Text style={{color:"red",textAlign:"center",fontSize:30,margin:10}}>{item.description}</Text>
            </View>
        )
    }
    render(){
        return (
            <SafeAreaView style={{
                backgroundColor:"pink",

                  flex:1,
                // alignItems:"stretch"
            }}>

                <Button title={"Press me"}  onPress={()=>{


                    // Make a request for a user with a given ID
                    axios.get('http://localhost:3061/api/home/frontend')
                        .then( (response) =>{
                            // handle success

                            console.log("here ....");
                            console.log(response);

                            this.setState({
                                data:response.data.data.banner
                            })

                        })
                        .catch(function (error) {
                            // handle error
                            console.log(error);
                        })
                        .finally(function () {
                            // always executed
                        });

                    alert("pressed ")
                }} />

                <FlatList
                    data={this.state.data}

                    renderItem={({item})=>this.renderItemView(item)}

                />


            </SafeAreaView>
        )
    }

}
export default FlatExample;
