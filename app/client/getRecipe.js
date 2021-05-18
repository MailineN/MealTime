import { useState } from 'react' ;

function getRecipe(id) {
  const [identifiant, setIdentifiant] = useState('')
  setIdentifiant(id.toString())
  const [data, setData] = useState({})
  
  console.log("https://api.spoonacular.com/recipes/"+{identifiant}.identifiant+"/information?includeNutrition=false&apiKey=5323d8a091244877b5e9332e144d9072/")

  fetch("https://api.spoonacular.com/recipes/"+{identifiant}.identifiant+"/information?includeNutrition=false&apiKey=e3d81105854e4678ae22642d2fa3878d/")
    .then((response) => {return response.json()})
    .then((result) => {setData(result)});

  console.log(data.title)

  return data
}

export default getRecipe;