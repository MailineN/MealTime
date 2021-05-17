import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, Text, ScrollView, View, Image, FlatList } from 'react-native';

class RandomRecipe extends Component {
  state = {
      data: {},
  }

  componentDidMount() {
    fetch('https://api.spoonacular.com/recipes/random?apiKey=5323d8a091244877b5e9332e144d9072')
      .then((response) => {return response.json()})
      .then((result) => {this.setState({ data: result.recipes['0'] });})
  }

  render() {
    return (
      <SafeAreaView>
        <View contentInsetAdjustmentBehavior="automatic">
          <Section title={this.state.data.title}/>
          <Section title={"For "+{this:this.state.data.servings}.toString()+" people :"}/>
          {/*<Image source={{uri: {this:this.state.data.image}}}/>*/}
          {/*<FlatList 
            data={{this:this.state.data.extendedIngredients}}
            renderItem={({ingredient}) => <Text>{ingredient.name}</Text>}/>*/}
          <Section title="Instructions :" description={this.state.data.instructions}/>
        </View>
      </SafeAreaView>
    );
  }
};

const Section = ({description, title}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={[styles.sectionTitle]}>{title}</Text>
      <Text style={[styles.sectionDescription]}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 40,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    alignContent: "center",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
})

export default RandomRecipe;