import React,{useState} from 'react'

const Search = ({getquery,showquery,showGender}) => {





  return (
    <>
    

    <input type='text'  placeholder='Search Characters'  onInput={(e)=>getquery(e)} />

   
   <div className='filterTag'>

    <div className='housefilter filter'>
    <label for="house">Filter all by house:</label>
    <select name="house" id="house" onChange={(e)=>showquery(e)}>
    <option value="Gryffindor">Gryffindor</option>
    <option value="Ravenclaw">Ravenclaw</option>
    <option value="Slytherin">Slytherin</option>
    <option value="Hufflepuff">Hufflepuff</option>
     </select>
     </div>


     <div className='genderfilter filter'>
    <label for="gender">Filter all by gender:</label>
    <select name="gender" id="gender" onChange={(e)=>showGender(e)}>
    <option value="male">Male</option>
    <option value="female">Female</option>
  
     </select>
     </div>







    </div>



    </>
  )
}

export default Search