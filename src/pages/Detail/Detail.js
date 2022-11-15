import React from "react";
import { SafeAreaView, Text, Image, View } from "react-native";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import useFetch from "../../hooks/useFetch";
import style from "./Detail.style";
export default function Detail({ route }) {
  // const { id } = route.params;
  // const { data, loading, error } = useFetch(process.env.API_URL + "/" + id);
  // if (loading) {
  //   return <Loading />;
  // }
  // if (error) {
  //   return <Error />;
  // }
  // return (
  //   <SafeAreaView style={style.container}>
  //     <Image style={style.image} source={{ uri: data.image }} />
  //     <View style={style.inner}>
  //       <Text style={style.title}>{data.title}</Text>
  //       <Text style={style.description}>{data.description}</Text>
  //       <Text style={style.price}>{data.price} TL</Text>
  //     </View>
  //   </SafeAreaView>
  // );

  ////      aslında verileri çekmeye gerek yok ama öğrenme aşamasındayım o yüzden yukarıdaki yeri de yazdım
  ////      actualy we don't need fetch datas but I am learning so I wrote above code

  const { product } = route.params;
  return (
    <SafeAreaView style={style.container}>
      <Image style={style.image} source={{ uri: product.image }} />
      <View style={style.inner}>
        <Text style={style.title}>{product.title}</Text>
        <Text style={style.description}>{product.description}</Text>
        <Text style={style.price}>{product.price} TL</Text>
      </View>
    </SafeAreaView>
  );
}
