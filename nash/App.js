import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import image from './assets/splash-icon.png';

export default function App(){

  const imageFromUrl = "https://picsum.photos/200/300"

  return (
    <View style={styles.container}>
      <View style={{width: 100, height: 100, backgroundColor:'lightgreen'}}></View>
      <View style={{width: 100, height: 100, backgroundColor:'skyblue'}}></View>
      <Text style={{fontSize: 20, color: 'white'}}>Welcome Nash</Text>
      <Image source={image} style={{width: 100, height: 100}} />
      <Image source={{uri: imageFromUrl}} style={{width: 100, height: 100, borderRadius: 50}} />
      <ImageBackground source={{uri: imageFromUrl}} style={{padding: 20}}>
      <Text style={{fontSize: 20, color: 'white'}}>Welcome Nash</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
});