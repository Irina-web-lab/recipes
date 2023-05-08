import recipebook from './recipebook.png';

function MyRecipesComponent({label, cuisine, image, calories, ingredients, share}) {
    return (<div className="recipe">
    <div  className="container">
            <h2>{label}<span>({cuisine} recipe)</span></h2>
            </div>
             
            <div  className="container">
            <img className="tasty" src={image} alt=""/>
            </div>           
             
            <div className="container-ingredients">  
            <h2>Ingredients:</h2> 
            <ul className="list"> 
                {ingredients.map(ingredient => (
                    <li><img className="icon" src='https://img.icons8.com/?size=2x&id=JDRMIJAGHmIX&format=png' alt=''/>{ingredient}</li>
                ))}          
            </ul>
            </div>
             
            <div  className="container"> 
            <p className="par">{calories.toFixed()} calories</p>
            </div>

            <div className="container">
                <a className="searchRecipe" href={share}>Instruction <img className='recipebook' src={recipebook} width='30px' alt="Recipebook"/></a>
            </div>
             
        </div>
    )
}

export default MyRecipesComponent;