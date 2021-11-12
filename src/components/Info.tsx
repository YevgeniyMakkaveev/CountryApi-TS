import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { NavLink } from "react-router-dom";
import IBigCountry from "../types/CountryBig";
import { filterByCode } from "../_const";
const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;
  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoTitle = styled.h1`
  margin: 0;
  font-weight: var(--fw-normal);
`;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  line-height: 1.8;
  & > b {
    font-weight: var(--fw-bold);
  }
`;

const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  & > b {
    font-weight: var(--fw-bold);
  }
  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`;

const TagGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Tag = styled(NavLink)`
  padding: 0 1rem;
   text-decoration: none;
   var(--colors-text);
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.5;
  cursor: pointer;
`;

const Info: React.FC<IBigCountry> = ({
  name,
  nativeName,
  flags,
  population,
  region,
  subregion,
  borders,
  capital,
  currencies,
  languages,
  topLevelDomain,
}) => {
  const [neighbors, setNeighbors] = useState<any>([]);
  useEffect(() => {
    if (borders && borders.length)
      axios.get(filterByCode(borders)).then(({ data }) => setNeighbors(data));
  }, [borders]);

  return (
    <Wrapper>
      <InfoImage src={flags.png} alt={name} />
      <div>
        <InfoTitle>{name}</InfoTitle>
      </div>
      <ListGroup>
        <List>
          <ListItem>
            <b>Native Name</b> {nativeName}
          </ListItem>
          <ListItem>
            <b>Population</b> {population}
          </ListItem>
          <ListItem>
            <b>Region</b> {region}
          </ListItem>
          <ListItem>
            <b>Sub Region</b> {subregion}
          </ListItem>
          <ListItem>
            <b>Capital</b> {capital}
          </ListItem>
        </List>
        <List>
          <ListItem>
            <b>Top Level Domain</b> {topLevelDomain.join(",")}
          </ListItem>
          <ListItem>
            <b>Currencies</b> {currencies.map((c) => c.name)}
          </ListItem>
          <ListItem>
            <b>Languages</b> {languages.map((l) => l.name)}
          </ListItem>
        </List>
      </ListGroup>
      <Meta>
        <b>Border Countries</b>
        {!borders || !borders.length ? (
          <span>There is no border countries</span>
        ) : (
          <TagGroup>
            {!neighbors.length ? (
              <span>Loading...</span>
            ) : (
              neighbors.map((b: any) => (
                <Tag to={`/country/${b.name}`} key={b.name}>
                  {b.name}
                </Tag>
              ))
            )}
          </TagGroup>
        )}
      </Meta>
    </Wrapper>
  );
};
export default Info;
