import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, Button, TextInput,AsyncStorage } from 'react-native';


interface User{
    loginData:any
    payment:any
    Address:String
  }

interface card {
    number: string;
    cvv:string
    ExpireDate:Date
  }
  export default function address() {
    const[method, setMethod]=useState('')
    const[cardno, setCard]=useState('')
    const[cvv, setcvv]=useState('')
    const[cardexpire, setexDate]=useState<Date>()
const getMethod = async () => {
    if(method=='Visa'){
        try{
        await AsyncStorage.setItem(cardno,cvv,cardexpire);}
        catch(error){
        }
        if(method!='Visa'){
        setMethod('cash');
    }
    }
}
return(
<View style={styles.container}>
    <TextInput 
    autoCapitalize='none'
          placeholder='Enter your address'
          onChangeText={(text: string) => setMethod(text)}
/>
<TextInput 
    autoCapitalize='none'
          placeholder='Enter your payment phone number'
          onChangeText={(text: string) => setCard(text)}
         
/>
{/* <TextInput 
    autoCapitalize='none'
          placeholder='Enter your payment card cvv'
          onChangeText={(text: string) => setcvv(text)}
/>
<TextInput 
    autoCapitalize='none'
          placeholder='Enter your card expiry date'
          onChangeText={(text: string) => setMethod(Date)}
/> */}
<Button
title='Confirm'
onPress={()=>alert("Order placed sucessfully")}></Button>
</View>
);
}
const styles = StyleSheet.create({
    container: {
      padding: 35,
      alignItems: 'center'
  }  });