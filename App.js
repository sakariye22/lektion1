import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, Alert} from 'react-native';
import Custom1 from './Customer';

const theAlert=()=>{
  return Alert.alert(
    'Hello'
  )
};
const Pressed = ()=>{
  return 
}

export default function App() {
  return (
    <View style={{...styles.container,  backgroundColor:'white'} } >
     <View style={{... styles.top, backgroundColor: 'blue'}}> 
     <Text>Second </Text>
     </View>
     <View>
      <Text>
        <Button title='The title' onPress={theAlert}></Button>
        </Text>
        </View>
     <Text style={{backgroundColor:'yellow'}}>Hello world </Text> 
      <StatusBar style="auto" />
      <Custom1></Custom1>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    fontSize:'60px',
    justifyContent: 'center',
    padding:'10%',
    margin :'75px'
  },
  top:{
    flex:0.3,
    backgroundColor:'brown'
  }
  
});
