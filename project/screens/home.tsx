import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import NavOptions from '../components/NavOptions';
import { useNavigation } from '@react-navigation/native';
import * as axios from 'axios';
import { useRoute } from "@react-navigation/native";
import { Card } from 'react-native-elements';
// import Carousel from 'react-native-snap-carousel';

interface icecream{
  price:number,
  image:Image
}
const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const navigation = useNavigation();
  const[icecream, SetCream]=useState<icecream[]>();

  useEffect(() => {
    Promise.all([
      axios.default.get(`http://192.168.56.1:3000/icecream/${search}`),
    ])
      .then(([{ data:searchresult }]) => {
        if (searchresult) SetCream(searchresult);
      });
  }, [icecream]);
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
        title='pay'
        onPress={() =>navigation.navigate("pay" as never)}/>
        <NavOptions term={''} />
        {/* <NavOptions term={search} /> */}
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

export default HomeScreen
