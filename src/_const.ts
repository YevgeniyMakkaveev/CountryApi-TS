const _url = 'https://restcountries.com/v2/';
export const All_Countries=_url+'all?fields=name,capital,flags,population,region';
export const searchByName=(name:string)=>_url+`name/${name}`;

export const filterByCode = (codes:string[]) => _url + 'alpha?codes=' + codes.join(',');