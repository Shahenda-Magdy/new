import React, { useState } from "react";
import { useEffect } from "react";
import * as axios from 'axios';
import { Button, Dimensions, View, FlatList, Image, SafeAreaView, StyleSheet, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';
import NavOptions from './components/NavOptions';


const item= ({name,price, image }) => (
    <View>
        <Card containerStyle={{ justifyContent: "center" }}>
       
            <Carousel
              data={image}
              renderItem={slideshow}
              sliderWidth={327}
              itemWidth={300}
            />
            <Card.Divider />
            <Card.Title>{name}</Card.Title>
            <Card.Divider />
        </Card>
    </View>
);

const slideshow = ({item, index}) => {
    
    return (

        <View style={{
            borderRadius: 5,
            height: 300,
            width: 300,
            justifyContent: 'center',
        }}>
            {/* <Image
                style={{ resizeMode: "contain", height: 300,
                width: 300}}
                source={item ? { uri: item } : require('../assets/google_logo.png')}
            
                
                
            /> */}
        </View>
    );
}

export default function ListScreen(props: NavProps){
    const route = useRoute<RouteProps>();
    const { term } = route.params;
    const[icecream, SetCream]=useState<icecream[]>();
    const navigation = useNavigation();

    useEffect(() => {
        Promise.all([
          axios.default.get(`http://192.168.1.6:19000/icecream/${term}`),
        ])
          .then(([{ data:searchresult }]) => {
            if (searchresult) SetCream(searchresult);
          });
      }, []);

    const renderItem = ({ item }) => (
        <Item name={item.name} price={item.price} image={item.image} />
    );


    return (
        <SafeAreaView>
            <View>
                <FlatList
                    data={item}
                    renderItem={renderItem}
                    keyExtractor={item => item.name}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

type RouteParams = {
    term: string;
};

type RouteProps = {
    params: RouteParams
    name: string;
    key: string;
};
type NavProps = {
    term: string;
  };

type icecream = {
   price:number;
    image: Array<string>;
}
