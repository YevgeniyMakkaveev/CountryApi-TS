import React, { useState, useEffect } from "react";
import Search from "./Search";
import styled from "styled-components";
import CustomSelect from "./CustomSelect";

interface IControl{
  onSearch: (search: string, region: any) => void
}

const Controls: React.FC<IControl> = ({onSearch}) => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState<any>("");

      useEffect(() => {
    const regionValue = region?.value || '';
    onSearch(search, regionValue);

    // eslint-disable-next-line
  }, [search, region]);

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media (min-width: 767px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  `;

  interface Option {
    value: string;
    label: string;
  }

  const options: Option[] = [
    { value: "Africa", label: "Africa" },
    { value: "America", label: "America" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
  ];
  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </Wrapper>
  );
};
export default Controls;
