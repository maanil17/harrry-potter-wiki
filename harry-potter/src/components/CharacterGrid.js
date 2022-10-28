
import { useState } from 'react'
import CharacterItem from '../components/CharacterItem'
const CharacterGrid = ({ result }) => {


  return (
    <section className='cards'>
      {result.map((val) => (
             <CharacterItem 
             item={val}
             />                                            
      ))}
    </section>
  )
}

export default CharacterGrid