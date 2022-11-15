import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import style from "./ProductCard.style";
export default function ProductCard({ product, select }) {
  return (
    <TouchableWithoutFeedback onPress={select}>
      <View style={style.container}>
        <Image style={style.image} source={{ uri: product.image }} />
        <View style={style.body_container}>
          <Text style={style.title}>{product.title}</Text>
          <Text style={style.price}>{product.price}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
