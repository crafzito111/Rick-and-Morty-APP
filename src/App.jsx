import { useEffect, useState } from 'react';
import './App.css';
import CardCharacters from './components/CardCharacters';
import axios from 'axios';
import HeaderMain from './components/HeaderMain';
import LocationInfo from './components/LocationInfo';
import Footer from './components/Footer';

function App() {
   const [location, setlocation] = useState();
   const [searchInput, setsearchInput] = useState('');
   

   useEffect(() => {
   
      let numberLocation;
      if (searchInput === '') {
         numberLocation = Math.floor(Math.random() * (126 - 1) + 1);
      } else {
         numberLocation = searchInput;
      }

     const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`;
      axios.get(URL)
         .then((res) => setlocation(res.data))
         .catch((err) => console.log(err));
   }, [searchInput]);

  



 
   // Busqueda por input

   const handleSubmit = (e) => {
      e.preventDefaul();
      setsearchInput(e.target.search.value);
   };
  //  



  if (location?.residents.length === 0){
    window.location.reload()
} else {
  return (
    <div className="App">
      <HeaderMain className="contenedor_carousel" location={location} handleSubmit={handleSubmit}/>

      <LocationInfo location={location} />
      <div className="card_containerr">
        <div className="cards">
          {location?.residents.map((url) => (
            <CardCharacters key={url} url={url} />
          ))}
        </div>
       < Footer/>
      </div>
    </div>
  );
}

  
}

export default App;
