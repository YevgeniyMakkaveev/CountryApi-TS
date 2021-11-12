import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header'
import Main from './Main';
import HomePage from '../pages/HomePage';
import NotFound from '../pages/404';
import Details from '../pages/Details';
import ICountry from '../types/CountrySmall';




const App:React.FC=()=> {
 const [countries, setCountries] = useState<ICountry[] | []>([]);

  return (
    <>
     <Header />
     <Main>
      <Routes>
        <Route path="/" element={<HomePage countries={countries} setCountries={setCountries} /> } >
          
        </Route>
        <Route path="/country/:name" element={<Details/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
     </Main>
    </>
  );
}

export default App;
