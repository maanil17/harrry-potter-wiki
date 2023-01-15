
import './App.css';
import Header from './components/Header.js'
import Search from './components/Search.js'
import CharacterGrid from './components/CharacterGrid'
import React,{useState,useEffect} from 'react';
import axios from 'axios'

import bgmvideo from './components/bgmvideo.mp4'


function App() {

   const [result,setresult]= useState([]);
   const [resultcopy,setresultcopy]= useState([]);
   const [resultcopy2,setresultcopy2]= useState([]);

 


   useEffect(() => {
  const fetchData=()=>
  {
     axios.get("https://hp-api.onrender.com/api/characters").then((res)=>{
     setresult(res.data);
     setresultcopy(res.data)
     setresultcopy2(res.data);
     
  })
}
  fetchData();

},[])

const handlefilter= (e)=>{

  if(e.target.value=='')
  {setresult(resultcopy);}

  else {
    const filterresult= resultcopy.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
     setresult(filterresult);
    
  }



}


const showquery=(e) =>{

 
 const filterresultnew= resultcopy.filter(item => item.house==e.target.value)
 setresult(filterresultnew);
 setresultcopy2(filterresultnew)
}


const showGender=(e) =>{

 
  const filterresultnew2= resultcopy2.filter(item => item.gender==e.target.value)
  setresult(filterresultnew2);
 }
 


 




  return (
    <div className="App">


      

      <Header/>
 
     <Search getquery={handlefilter} showquery={showquery} showGender={showGender}/>
  
     <CharacterGrid result={result} />
  
      
 
  
  
 
  









   
   

    <video src={bgmvideo} autoPlay loop muted/>
  
    </div>
  );
}

export default App;
