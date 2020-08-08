import React,{Component} from 'react';
import {View,SafeAreaView,Image} from 'react-native'
class TestImage extends Component {

    render(){
        return (
            <SafeAreaView style={{
                backgroundColor:"pink",
                //  flex:1,
                //  flexDirection:"row",
                //  justifyContent:"center",
                // alignItems:"stretch"
            }}>

               <Image source={{uri:"https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png"}}
               style={{width:200,height:50,resizeMode: 'stretch'}}
               />

                <Image source={{uri:"https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png"}}
                       style={{width:200,height:50,resizeMode: 'contain'}}
                />

                <Image source={{uri:"https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png"}}
                       style={{width:200,height:50,resizeMode: 'cover'}}
                />

                <Image source={require("./image/logo.png")}
                       style={{width:200,height:50,resizeMode: 'cover'}}
                />
            </SafeAreaView>
        )
    }

}
export default TestImage;
