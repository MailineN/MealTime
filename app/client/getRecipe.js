import { useState } from 'react' ;

function getRecipe(id) {
  const identifiant = id.toString()
  
  console.log("https://api.spoonacular.com/recipes/"+{identifiant}+"/information?includeNutrition=false&apiKey=5323d8a091244877b5e9332e144d9072")

  fetch("https://api.spoonacular.com/recipes/"+{identifiant}+"/information?includeNutrition=false&apiKey=e3d81105854e4678ae22642d2fa3878d")
    .then((response) => {response.json(); console.log(response.json())})
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
}

export default getRecipe;