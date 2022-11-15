import React, { useEffect, useState } from "react";
import { View } from "react-native";
import axios from "axios";

export default function useFetch(url) {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data: responseData } = await axios.get(url);
      setData(responseData);
      setLoading(false);
    } catch (err) {
      seterror(err.message);
      setLoading(false);
    }
  };
  return { data, loading, error };
}
