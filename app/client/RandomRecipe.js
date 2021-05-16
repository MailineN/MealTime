import React, { Component } from 'react';
import { Button, SafeAreaView, Text } from 'react-native';

class RandomRecipe extends Component {
  state = {
      post: {}
  }

  componentDidMount() {
    fetch('https://api.spoonacular.com/recipes/random?apiKey=5323d8a091244877b5e9332e144d9072')
      .then((response) => {
          return response.json()
        })
      .then((result) => {
        this.setState({ post: result.recipes['0'] });
      })
  }

  render() {
    return (
      <SafeAreaView>
          <Text>
            {this.state.post.title}
          </Text>
      </SafeAreaView>
    );
  }
};

export default RandomRecipe;