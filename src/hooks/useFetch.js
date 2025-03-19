import { useState, useEffect } from "react";
import axios from "axios";
import useLocalStorage from "./useLocalStorage";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [token, setToken] = useLocalStorage("authToken", "");

  const fetchData = async () => {
    try {
      const response = await axios.get(`${endpoint}`);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, reFetch: fetchData };
};

export default useFetch;
