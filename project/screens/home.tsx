import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, View,AsyncStorage } from 'react-native'
import React, { useEffect, useState } from 'react'
import NavOptions from '../components/NavOptions';
import { useNavigation } from '@react-navigation/native';
import * as axios from 'axios';
import { useRoute } from "@react-navigation/native";
import { Card } from 'react-native-elements';
// import Carousel from 'react-native-snap-carousel';
const data = [
  {
    id: 1,
    title: 'search',
    screen: 'ListScreen',
  }
]
interface icecream{
  price:number,
  image:Image
}
export default function HomeScreen(){
  const [search, setSearch] = useState('');
  const navigation = useNavigation();
  const[icecream, SetCream]=useState('');
async function viewHist(){
  try{
    const value= AsyncStorage.getItem(term);
    if(value!=null)
    console.log(value);
}catch(error){

}
return(
  <View>
        <Image source={{ uri: value.picture }} />
        <Text>Welcome { value.name}</Text>
        <Text>{value.email}</Text>
        <Text>{value.address}</Text>
      </View>
);
}
  useEffect(() => {
    Promise.all([
      axios.default.get(`http://192.168.1.6:3000/icecream/${search}`),
    ])
      .then(([{ data:searchresult }]) => {
        if (searchresult) SetCream(searchresult);
      });
  }, []);
  return (
    <SafeAreaView>
      <View style={styles.container}>
      <TextInput style={styles.searchInput}
          placeholder="Search..."
          onChangeText={(text: string) => setSearch(text)}
          value={search}
          autoCapitalize='none' 
          
        />
        <Button
        title='search'
        onPress={() =>navigation.navigate("ListScreen" as never, {
          term: search, 


        } as never)}/>
       {/* <NavOptions term={search} />  */}
       
         <Button
        title='view history'
        onPress={()=>viewHist()}/>
        {/* < NavOptions term={term} /> */}
        <Button
        title='checkout'
        onPress={() =>navigation.navigate("pay" as never) }/>
        
        {/* <NavOptions term={''} /> */}
        
        <Image
          style={styles.image}
          source={require('../assets/logo.webp')}
        />
      
      </View>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 450,
    height: 700,
    resizeMode: 'center'    
  },
  searchInput: {
    width: 300,
    height: 40,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 16,
  }
});

