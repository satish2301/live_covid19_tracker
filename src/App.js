
import { useEffect, useState } from 'react';
import './App.css';
import Image from './live.png';
const App=()=> {
  const[detail,setDetail]=useState([]);
  const getCovidData=async () =>{

    try{
      const res=await  fetch('https://data.covid19india.org/data.json');
      const data=await res.json();
      // console.log(data.statewise[35]);
      setDetail(data.statewise[35]);
    }catch(error){
        console.log(error);
    }
  
  
  }
  useEffect(()=>{
    getCovidData();
    
  },[])
  return (
    <>
   
    <div className="App">
      <div className='top-main-heading'>
         <h1><img src={Image} alt=""/> LIVE</h1>
         <h2>COVID-19 CORONAVIRUS TRACKER</h2>
      </div>
    </div>
    <div className='wraper'>
    <div className='wraper-card'>
    <div className='card'>
         <span className='inner-card-first'>OUR</span><span className='inner-card-country'>COUNTRY</span>
         <h2>{detail.state}</h2>
    </div>
     
    <div className='card'>
         <span>TOTTAL</span><span className='inner-card-country'>RECOVERED</span>
         <h2>{detail.recovered}</h2>
    </div>
    <div className='card'>
         <span>TOTTAL</span><span className='inner-card-country'>CONFIRMED</span>
         <h2>{detail.confirmed}</h2>
    </div>
    
       
    <div className='card'>
         <span>OUR</span><span className='inner-card-country'>UPDATE</span>
         <h2>{detail.lastupdatedtime}</h2>
    </div>
     
    <div className='card'>
         <span>TOTTAL</span><span className='inner-card-country'>DEATH</span>
         <h2>{detail.deaths}</h2>
    </div>
    <div className='card'>
         <span>TOTTAL</span><span className='inner-card-country'>ACTIVE</span>
         <h2>{detail.active}</h2>
    </div>
    </div>
    </div>
    
</>
  );
}

export default App;
