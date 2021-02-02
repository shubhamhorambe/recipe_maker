import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";
const App = () => {
  const APP_ID = "65f2c189";
  const APP_KEY = "7bb6f1decd307557e6791e4962e7fc51";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("banana");
 
  
  
  
  useEffect(() => {
    const getRecipes = async () => {
  
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
    
    };
    getRecipes();
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
   
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  };
 

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="button">
          search
        </button>
      </form>
      <div className="recipes">

      
      {recipes.map(rec => (
        <Recipe
          key={rec.recipe.label}
          title={rec.recipe.label}
          calories={rec.recipe.calories}
          img={rec.recipe.image}
          ingredients={rec.recipe.ingredients}
        />
      ))}
      </div>
       </div>
    
  );
};

export default App;
