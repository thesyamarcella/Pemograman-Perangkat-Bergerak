import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View, SafeAreaView, Image} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"


export function ProfileScreen() {
 return(
   <SafeAreaView style={{flex: 1, backgroundColor: "#eee"}}>
      <ScrollView vertical={true}>

        <View style = {{paddingVertical: 15,backgroundColor: "#7a4988", borderBottomLeftRadius:10,borderBottomRightRadius:10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 20, marginHorizontal: 15}}>
          <Ionicons name='arrow-back' size={30} color={"#fff"} />
          <Text style= {{fontSize: 20, fontWeight: "bold", color: "#fff"}}>Profile</Text>
          <Ionicons name='create' size={30} color={"#fff"} />
        </View>
        <View style = {{height:200, marginHorizontal: 15, marginTop: -20, backgroundColor: "#fff", borderRadius: 15, justifyContent:  "center", marginBottom: 20,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,
          elevation: 15,}}>
          {/* position: absoulte */}
          <Image style = {{height:60, width:60, justifyContent:"center", alignItems:"center"}}  
            source={require("../../assets/ava-girl.png")}
          />
          <Text style={{fontWeight: 'bold', textAlign:"center"}}>Thesya Marcella</Text>
          <Text style={{textAlign:"center", marginTop:8}}>202310020</Text>
          <View style = {{flexDirection: "row", justifyContent: "space-between", marginTop: 30, marginHorizontal:30}}>
            <Text>Semester : 4</Text>
            <Text>Gender : Female</Text>
          </View>
        </View>
        <View style = {{marginHorizontal: 15, padding:15, marginBottom:20, backgroundColor:"#fff", borderRadius: 15 }}>
          <View style = {{flexDirection: "row"}}>
              <Ionicons name='call' size={15} color={"#000"} />
              <Text style={{marginLeft: 15}}>0816840394</Text>
          </View>
            <View style = {{flexDirection: "row"}}>
              <Ionicons name='mail' size={15} color={"#000"} />
              <Text style = {{marginLeft: 15}}>thesyamarcella@gmail.com</Text>
          </View>
        </View>
        <TouchableOpacity>
        <View style = {{height:50, backgroundColor: "#f1f2f3", borderRadius: "7", marginHorizontal: 15, marginVertical:8, flexDirection: "row", justifyContent: "space-between"}}>
          <Text style={{marginLeft: 15, paddingVertical:10}}>Personal Detail</Text>
          <Ionicons name='arrow-forward' size={30} color={"#c5a6dd"}  />
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style = {{height:50, flexDirection: "row",backgroundColor: "#f1f2f3", borderRadius: "15", marginHorizontal: 15, marginVertical:8, justifyContent: "space-between"}}>
          <Text style={{marginLeft: 15, paddingVertical:10}}>Friends List</Text>
          <Ionicons name='arrow-forward' size={30} color={"#c5a6dd"} />
        </View>
        </TouchableOpacity>
        {/* <View>
          <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
              <Ionicons name="person-circle" size={60} color={"blue"} />
            <Text style={{textAlign:'justify', fontWeight:'bold'}}>Nicholas Fico</Text>
            <Text style={{textAlign:'justify'}}>NPM : 202310077</Text>
            <Text style={{textAlign:'justify'}}>Semester : 4</Text>
            <Text style={{textAlign:'justify'}}>Gender : Male</Text>
          </View> 
        </View>

        <View style={{flex : 1, justifyContent:'left'}}>
          <View style={{flexDirection:'row'}}>
            <Ionicons name="call" size={20}/>
            <Text style={{fontWeight:'bold'}}>  +62 87874544493</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Ionicons name="mail" size={20} />
            <Text style={{fontWeight:'bold'}}>  202310077@student.ibik.ac.id</Text>
          </View>
        </View>

        <View style={{flexDirection:'row'}}>
          <Text style={{color:"blue"}}>Personal Detail</Text>
          <View style={{flex:1,justifyContent:'flex-start', alignItems:'flex-end'}}>
            <Ionicons name="arrow-forward" size={20} color={"blue"} />
          </View>
        </View>

        <View style={{flexDirection:'row'}}>
          <Text style={{color:"blue"}}>Friend List</Text>
          <View style={{flex:1,justifyContent:'flex-start', alignItems:'flex-end'}}>
            <Ionicons name="arrow-forward" size={20} color={"blue"} />
          </View>
        </View>  */}

      </ScrollView>
   </SafeAreaView>
 )
}


export default ProfileScreen