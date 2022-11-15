import React from "react";
import { SafeAreaView, FlatList } from "react-native";

import ProductCard from "../../components/ProductCard";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const Products = ({ navigation }) => {
  const { data, loading, error } = useFetch(process.env.API_URL);

  const renderFunction = ({ item }) => (
    <ProductCard product={item} select={() => handleClick(item.id, item)} />
  );

  const handleClick = (id, product) => {
    navigation.navigate("detail", { id, product });
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderFunction}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
export default Products;
