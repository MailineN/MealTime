import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, Text, ScrollView, View } from 'react-native';

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
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Section title={this.state.post.title}/>
          <Section title="Recipe" description={this.state.post.summary}>
          </Section>
        </ScrollView>
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
})

export default RandomRecipe;