import { useState, useEffect } from "react";
import axios from "axios";

const useData = () => {
  const [Data, setData] = useState([]);
  const getData = async () => {
    const { data } = await axios.get("http://api.simplus.kiubix.biz/api/gaday");
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return Data;
};

export default useData;
