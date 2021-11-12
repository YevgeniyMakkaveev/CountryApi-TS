import { Flags } from "./CountrySmall";
 interface IBigCountry{
name: string;
nativeName: string;
flags: Flags;
region: string;
subregion: string;
capital: string;
population: number;
topLevelDomain: string[];
currencies: ICurrency[];
languages: ILanguage[];
borders: string[];

}
interface ICurrency{
 name: string;
 code: string;
  symbol: string;
}

interface ILanguage{
 iso639_1: string;
 iso639_2: string;
 name: string
}
export default IBigCountry