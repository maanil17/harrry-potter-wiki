import React from 'react'

const CharacterItem = ({ item }) => {
  return (
  <div className='card-info'>
   <img src={item.image} className='image' alt={item.name}/>
   <h1 className='names'>{item.name}</h1>
  <p>House: {item.house}</p>
  <p>Gender: {item.gender}</p>
  {item.hogwartsStudent ? <p>Student</p> : <p>Teacher</p>}
    
  

  </div>
  )
}

export default CharacterItem
