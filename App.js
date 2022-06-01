import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,ImageBackground} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./assets/bg2.jpg")}style={styles.bgImage}> 
      <View style={styles.titleContainer}>
      <Text style={styles.title}>BOOK-A-HOLICS </Text>
      </View>
      <View style={styles.button}> 
       < TouchableOpacity>
        <Text style={styles.buttonText}>HOPE YOU ENJOY YOUR BOOK</Text>
       </TouchableOpacity>
      </View>
      </ImageBackground>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  bgImage:{
    flex:1,
    resizeMode:"cover",
  },
  titleContainer:{
    flex:0.2,
    justifyContent:"center",
    alignItems:"center"
  },
  title:{
    fontSize:40,
    fontWeight:"bold",
    color:"white"
  },
  button:{
    flex:0.25,
    backgroundColor:"brown",
    marginTop:100,
    width:"30%",
    height:"15%",
    borderRadius:100,
    justifyContent:"center",
    alignItems:"center",
    marginLeft:"35%",

  },
  buttonText:{
    fontSize:25,
    fontWeight:"bold",
    color:"white"
  },
  
});
