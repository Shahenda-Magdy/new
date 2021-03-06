import React, { useState } from "react";
import { useEffect } from "react";
import * as axios from 'axios';
import { Button, Dimensions, View, FlatList, Image, SafeAreaView, StyleSheet, Text ,ScrollView,} from "react-native";
import { useRoute } from "@react-navigation/native";
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';
import CarouselClass from "../components/CarouselClass";
import NavOptions from '../components/NavOptions';


// const icecream= ({name,price, image }) => (
//     <View>
//         <Card containerStyle={{ justifyContent: "center" }}>
       
//             <Carousel
//               data={image}
//               sliderWidth={327}
//               itemWidth={300}
//             />
//             <Card.Divider />
//             <Card.Title>{icecream.name}</Card.Title>
//             <Card.Divider />
//         </Card>
//     </View>
// );

// const slideshow = ({item, index}) => {
    
//     return (

//         <View style={{
//             borderRadius: 5,
//             height: 300,
//             width: 300,
//             justifyContent: 'center',
//         }}>
//             {/* <Image
//                 style={{ resizeMode: "contain", height: 300,
//                 width: 300}}
//                 source={item ? { uri: item } : require('../assets/google_logo.png')}
            
                
                
//             /> */}
//         </View>
//     );
// }

export default function ListScreen(props: NavProps){
    const route = useRoute<RouteProps>();
    const { term } = route.params;
    const[icecream, SetCream]=useState<icecream>();
    const navigation = useNavigation();

    useEffect(() => {
        Promise.all([
          axios.default.get(`http://192.168.1.6:3000/icecream/${term}`),
        ])
          .then(([{ data:searchresult }]) => {
            if (searchresult) SetCream(searchresult);
            console.log(icecream)
          });
      }, []);

    // const renderItem = ({ icecream }) => (
    //     <Item name={icecream.name} price={icecream.price} image={icecream.image} />
    // );


    return (
        <SafeAreaView>
        <View >
        <ScrollView>
          {term &&
            icecream?.map((Icecream, index: number) => (
              <Card
                key={index}
                containerStyle={{
                  borderRadius: 20,
                  borderColor: "transparent",
                }}
              >
                   <Card.Title style={{ fontWeight: "bold", fontSize: 17 }}>
                    {Icecream.name}
                    {"\n"}
                    <Text
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        color: "purple",
                      }}
                    >
                    </Text>{" "}
                  </Card.Title>
                  <Card.Title style={{ fontWeight: "bold", fontSize: 17 }}>
                    {Icecream.price}
                    {"\n"}
                    <Text
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        color: "purple",
                      }}
                    >
                    </Text>{" "}
                  </Card.Title>
                  <Card.Title style={{ fontWeight: "bold", fontSize: 17 }}>
                  <Image  style={{width: 50, height: 50}}
       source={require(Icecream.image)}/>

                    {"\n"}
                    {/* <Text
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        color: "purple",
                      }}
                    >
                    </Text>{" "} */}
                  </Card.Title>
                  <Card.Divider />
                  <Text style={{ marginBottom: 10, fontSize: 16 }}>
                  </Text>
                  </Card>))}
                </ScrollView>
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
    name: string;
    price: number;
    image:Image;
  };
