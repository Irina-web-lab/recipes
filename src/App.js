import './App.css';
import { useEffect, useState } from 'react';
import video from './food.mp4';
import search from './fried-egg.png';
import MyRecipesComponent from './MyRecipesComponent.js';


function App() {
  const MY_ID = "16bf27f9";
  const MY_KEY = "9236e7160903e48d114f5f6ca8eab450";

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('egg');

  const functionResponse = async () => {
    const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setMyRecipes(data.hits);
  }
  useEffect(()=> {
        functionResponse();

    }, [wordSubmitted]);

      const myRecipeSearch = (e) => {
          console.log(e.target.value);
        setMySearch(e.target.value);
      }

      const finalSearch = (e) => {
        e.preventDefault();
        setWordSubmitted(mySearch);
      }

      const response = (e) => {
        e.preventDefault();
        setWordSubmitted(mySearch);
      }

  return (
    <div className="App">
  <div className="container">
  <video autoPlay muted loop>
  <source src={video} type="video/mp4" />
</video>
  <h1>Find a Recipe</h1>
  </div>
  <div className='container'>
    <form onSubmit={finalSearch}>
      <input className='search' placeholder='Search...' onChange={myRecipeSearch} value = {mySearch}>
      </input>
    </form>
{/*     </div>
    <div className='container'> */}
      <button onSubmit={finalSearch} onClick={response}>
        <img className='icons' src={search} width='60px' height='60px' alt=''/>
      </button>
    </div>
<div className='items'>
 {myRecipes.map(element => (
  <MyRecipesComponent label={element.recipe.label} 
  image={element.recipe.image} 
  calories={element.recipe.calories} 
  ingredients={element.recipe.ingredientLines}
  cuisine={element.recipe.cuisineType}
  share={element.recipe.shareAs}
  />    
 ))}
</div>
  </div>
)
  } 

export default App;

