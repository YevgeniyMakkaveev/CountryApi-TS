import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import axios, {AxiosResponse} from "axios";
import IBigCountry from "../types/CountryBig";

import {searchByName} from '../_const';
import Info from "../components/Info";
import Button from "../components/Button";

const Details: React.FC = () => {
  const { name } = useParams();
    const [country, setCountry] = useState<IBigCountry|null>(null);


  useEffect(() => {
    if(!name) return
    axios.get(searchByName(name)).then(({ data }:AxiosResponse) => setCountry(data[0]));
  }, [name]);

  return (
    <div>
      <Button onClick={() => window.history.back()}>
        <IoArrowBack /> Back
      </Button>
      {country&&<Info {...country} />}
    </div>
  );
};
export default Details;
