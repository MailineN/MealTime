const getRandomRecipe = async () => {
    return fetch('https://api.spoonacular.com/recipes/random?apiKey=5323d8a091244877b5e9332e144d9072', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'},
        })
        .then((response) => response.json())
        .then((json) => {return json.recipes;})
    ;
}