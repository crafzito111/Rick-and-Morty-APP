import React from 'react'
import useFetch from '../hooks/useFetch';

import logo from '../img/logo rick and morty.svg'

const HeaderMain = ({ handleSubmit, location, handleFilter }) => {



  
  return (

 <div className='Contenedor_header'>
  <img src={logo} alt="" />
      <form onSubmit={handleSubmit}>

        <input id='search' placeholder="Search 🔍..." className="input" onChange={handleFilter} name="text" type="text" />
      </form>
 </div>





   
  )
}

export default HeaderMain