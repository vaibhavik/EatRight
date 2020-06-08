import React,{useState} from 'react';
import "./App.css";
import Axios from "axios";  // for API call - can replace with GO snippet?
import Recipe from "./components/Recipe"
import {v4 as uuidv4} from 'uuid';
import ErrorHandling from "./components/ErrorHandling"

const App = () =>{

  const [query,setQuery] = useState("");
  const [recipes,setRecipes] = useState([]);
  const [alert,setAlert] = useState("");

  const APP_ID = "be08a156";
  const APP_KEY = "7972836326245a7e6aed1e847cefcf6d";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
  const getData = async() => {
    if(query !== ""){
      const result = await Axios.get(url);
      if(!result.data.more){
        return setAlert("Invalid Entry")
      }
      setRecipes(result.data.hits)
      console.log(result);
      setAlert("");
      setQuery("");
    }
    else{
      setAlert("Please enter atleast one available ingredient!")
    }
    
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  
  // to update query dynamically
  const onChange = (e) => {
    setQuery(e.target.value)
  }

  return(
    <div className="App">
      <h1> Eat Right</h1>
      <form className ="search-form" onSubmit={onSubmit}>
        { alert !== "" && <ErrorHandling alert = {alert}/>}
        <input type = "text" placeholder ="Search recipes" 
        autoComplete="off"
        onChange={onChange} 
        value = {query}/>
      <input type ="submit" value="Search" />
      </form>
      <div className="recipes">
        {recipes!==[] && recipes.map(recipe => 
          <Recipe key = {uuidv4()}
          recipe = {recipe} />
          )}
      </div>
    </div>
  );
};

export default App;
