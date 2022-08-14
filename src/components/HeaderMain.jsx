import React from 'react'
import useFetch from '../hooks/useFetch';

import logo from '../img/logo rick and morty.svg'

const HeaderMain = ({ handleSubmit, location}) => {



  
  return (

 <div className='Contenedor_header'>
  <img src={logo} alt="" />
      <form onSubmit={handleSubmit}>

      <input placeholder="Search 🔍..." className="input" name="text" type="text" />
      </form>
 </div>





   
  )
}

export default HeaderMain