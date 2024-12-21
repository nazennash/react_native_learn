import { ActivityIndicator, Alert, Button, Image, ImageBackground, Modal, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import image from './assets/splash-icon.png';
import { useState } from "react";

export default function App(){

  const imageFromUrl = "https://picsum.photos/200/300"

  const [isModalViscible, setIsModalViscible] = useState(false)

  return (
    <View style={[styles.container, {padding:50}]}>
      <StatusBar backgroundColor="red" barStyle="light-content"  />
      <ScrollView>
      <Button title="press" onPress={()=> setIsModalViscible(true)} color="black" />

      <Button title="Alert" onPress={()=> Alert.alert("Nash","Invalid data", [
        {
          text:'Cancel',
          onPress: () => console.log("Cancel Pressed")
        },
        {
          text:'Ok',
          onPress: () => console.log("Ok Pressed")
        }
        ])} />
      {/* <View style={{width: 100, height: 100, backgroundColor:'lightgreen'}}></View>
      <View style={{width: 100, height: 100, backgroundColor:'skyblue'}}></View>
      
      <View style={{width: 100, height: 100, backgroundColor:'lightgreen'}}></View>
      <View style={{width: 100, height: 100, backgroundColor:'skyblue'}}></View>
      <Text style={{fontSize: 20, color: 'white'}}>Welcome Nash Oliver</Text> */}
      <Pressable onPress={()=> console.log("Image pressed")}>

      <ActivityIndicator size="large" />
      <ActivityIndicator size="large" color="red" animating={true}/>

      <Modal visible={isModalViscible} onRequestClose={() => setIsModalViscible(false)} animationType="fade" presentationStyle="pageSheet">
        <View>
          <Text>Modal Pressed</Text>
          <Button title="close" onPress={()=> setIsModalViscible(false)}/>
        </View>
      </Modal>


      <Image source={image} style={{width: 100, height: 100}} />
      </Pressable>
      <Image source={{uri: imageFromUrl}} style={{width: 100, height: 100, borderRadius: 50}} />
      <ImageBackground source={{uri: imageFromUrl}} style={{padding: 30, borderRadius: 50}}>
      <Text style={{fontSize: 20, color: 'white'}}>Welcome Nash</Text>
      </ImageBackground >
      <View style={{width: 100, height: 100, backgroundColor:'lightgreen'}}></View>
      <View style={{width: 100, height: 100, backgroundColor:'skyblue'}}></View>
      
      <View style={{width: 100, height: 100, backgroundColor:'lightgreen'}}></View>
      <View style={{width: 100, height: 100, backgroundColor:'skyblue'}}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgImage:{
    borderRadius:50
  }
});