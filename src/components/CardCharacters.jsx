import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';

import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './Loading';

const CardCharacters = ({ url }) => {
   const resident = useFetch(url);
   const [IsLoading, setIsLoading] = useState(true)

setTimeout(() => {
   setIsLoading(false)
}, 2650);
   




if(IsLoading){

   return (<Loading />)
 
} else {
return (
      <div className="card">
         <img src={resident?.image} className="card-img-top" alt="..." />
        
           <div className='status'>
           <div className="sta">
            <span className={resident?.status}></span>
            <h4>{resident?.status}</h4>
           </div>
          
         </div>
         <div className="card-body">
            <h3 className="card-title">{resident?.name}</h3>
         </div>
         <ul className="list-group list-group-flush">
            <li className="list-group-item">
            
               <span>Species: </span> {resident?.species}
            </li>
            <li className="list-group-item">
            
               <span>Origin: </span>
               {resident?.origin.name}
            </li>
            <li className="list-group-item">
            
               <span>Episodes where appear: </span>
               {resident?.episode.length}
            </li>
         </ul>
      </div>
)}
   
};
export default CardCharacters;
