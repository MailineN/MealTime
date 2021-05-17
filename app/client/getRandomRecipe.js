import { useState } from 'react' ;
import getRecipe from './getRecipe'

function getRandomRecipe() {
    const [id, setId] = useState('')
    const [data, setData] = useState('')

    fetch('https://api.spoonacular.com/recipes/random?apiKey=5323d8a091244877b5e9332e144d9072')
        .then((response) => {return response.json()})
        .then((result) => {setId(result['0'].id)});

    setData(getRecipe({ id }))

    return data
}

export default getRandomRecipe;