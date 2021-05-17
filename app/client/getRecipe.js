import { useState } from 'react' ;

function getRecipe(id) {
  const [Id, setId] = useState('')
  const [data, setData] = useState('')

  setId(id.toString())
  console.log(Id)

  fetch("https://api.spoonacular.com/recipes/"+{Id}+"/information?includeNutrition=false&apiKey=5323d8a091244877b5e9332e144d9072")
    .then((response) => {return response.json()})
    .then((result) => {setData(result['0'])});

  console.log(data.title)

  return data
}

export default getRecipe;