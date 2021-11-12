import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Controls from "../components/Controls";
import List from "../components/List";
import Card from "../components/Card";
import ICountry from "../types/CountrySmall";
import { All_Countries } from "../_const";

interface IHome {
  countries: [] | ICountry[];
  setCountries: React.Dispatch<React.SetStateAction<[] | ICountry[]>>;
}

const HomePage: React.FC<IHome> = ({ countries, setCountries }) => {
  const [filteredCountry, setFilteredCountries] = useState(countries);

  const handleSearch = (search?: string, region?: string) => {
    console.log(search, region);
    let data = [...countries];

    if (region) {
      data = data.filter((c) => c.region.includes(region));
    }

    if (search) {
      data = data.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredCountries(data);
  };

  let navigate = useNavigate();

  console.log(countries);
  useEffect(() => {
    if (!countries.length)
      axios.get(All_Countries).then(({ data }) => setCountries(data));
  }, []);
  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, [countries]);
  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filteredCountry &&
          filteredCountry.map((c) => {
            const countryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: "Population",
                  description: c.population.toLocaleString(),
                },
                {
                  title: "Region",
                  description: c.region,
                },
                {
                  title: "Capital",
                  description: c.capital,
                },
              ],
            };
            return (
              <Card
                key={c.name}
                {...countryInfo}
                onClick={() => navigate(`country/${c.name}`)}
              />
            );
          })}
      </List>
    </>
  );
};
export default HomePage;
