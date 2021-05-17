import { useState } from 'react' ;

function getRecipe({ id }) {
    const [data, setData] = useState('')

    fetch('https://api.spoonacular.com/recipes/'+id.toString()+'/information?includeNutrition=false&apiKey=5323d8a091244877b5e9332e144d9072')
      .then((response) => {
          return response.json()
        })
      .then((result) => {
        setData(result['0'])});

    return data
}

export default getRecipe;