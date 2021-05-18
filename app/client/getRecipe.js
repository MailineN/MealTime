import { useState } from 'react' ;

function getRecipe(id) {
  const [identifiant, setIdentifiant] = useState('')
  setIdentifiant(id.toString())
  const [data, setData] = useState({})
  
  console.log("https://api.spoonacular.com/recipes/"+{identifiant}.identifiant+"/information?includeNutrition=false&apiKey=5323d8a091244877b5e9332e144d9072")

  fetch("https://api.spoonacular.com/recipes/"+{identifiant}.identifiant+"/information?includeNutrition=false&apiKey=5323d8a091244877b5e9332e144d9072")
    .then((response) => {return response.json()})
    .then((result) => {setData(result)});

  console.log(data.title)

  return data
}

export default getRecipe;