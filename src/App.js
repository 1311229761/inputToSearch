import logo from './logo.svg';
import './App.css';
// import { useEffect, useEffect } from 'react/cjs/react.production.min';
import { useState, useEffect } from 'react';

function App() {
 
  
  const [search, setSearch] = useState('')
  const [meal, setMeal ] = useState([])


  function handle(e) {
    setSearch(e.target.value) 
     
   }

  useEffect( () => {
    //
   

  // fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
  fetch( `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
  .then(response => response.json())
  .then(data => setMeal(data.meals))
// console.log(meal?.idMeal);
     
  },[search])
  return (
    <div className="App">
    
      <input onChange={handle} type="text" />
      <p>search {search} </p>
      <p> length {meal?.length || 0} </p>
      {
        meal?.map(mea =><li>{mea.strMeal}</li>)
      }
     

        
    </div>
  );
}

export default App;
