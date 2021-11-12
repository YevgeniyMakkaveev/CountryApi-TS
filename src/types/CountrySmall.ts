interface ICountry {
name: string;
borders: string[]
capital: string;
flags: Flags;
population: number;
region: string;
}

export interface Flags{
 svg: string;
 png: string;

}
export default ICountry