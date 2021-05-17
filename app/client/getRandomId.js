import { useState } from 'react' ;

function getRandomId(tag) {
    const [data, setData] = useState('')
    const [index, setIndex] = useState('')
    const [id, setId] = useState('')

    fetch('https://api.spoonacular.com/recipes/complexSearch?tags='+tag+'&apiKey=5323d8a091244877b5e9332e144d9072')
      .then((response) => {
          return response.json()
        })
      .then((result) => {
        setData(result)});

    setIndex(Math.floor(Math.random() * 10))
    setId(data[index.toString()].id)
    
    return id
}

export default getRandomId;