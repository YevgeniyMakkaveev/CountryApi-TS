import React from 'react';
import Controls from './Controls';
import Header from './Header'
import Main from './Main';



const App:React.FC=()=> {
  return (
    <>
     <Header />
     <Main>
      <Controls/>
     </Main>
    </>
  );
}

export default App;
