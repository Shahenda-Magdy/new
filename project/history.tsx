import { StyleSheet, View, Text, Image, Button, AsyncStorage, AccessibilityInfo } from 'react-native';
const history = () => (
try{
    const value= await AsyncStorage.getItem(info);
    if(value!=null)
    console.log(value);
}catch(error){

})
export default history;