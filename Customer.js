import { StyleSheet, Text, View,Button, Alert,TouchableOpacity} from 'react-native';

 const Custom1 =()=> {

    return   <TouchableOpacity style={{...styles.container}}>
<Button title='sign in'> </Button>
   <Button title ="goodbye"></Button>

  </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: '#CE2CDB',
    },
  });

export  default Custom1;