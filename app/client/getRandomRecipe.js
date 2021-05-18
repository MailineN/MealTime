import { useState } from 'react' ;
import getRecipe from './getRecipe'

function getRandomRecipe() {
    fetch('https://api.spoonacular.com/recipes/random?apiKey=e3d81105854e4678ae22642d2fa3878d')
        .then((response) => {console.log(response.json()); return(response.json()) })
        .then((responseJson) => {return (getRecipe(responseJson.id));})
        .catch((error) => {
            console.log(error);
          });
}

export default getRandomRecipe;