import { Component } from 'react';
import './App.css';
import Header from './Header';
import Recipe from './Recipe';
import NoRecipe from './NoRecipe';
import RecipeList from './RecipeList';
import AddRecipe from './AddRecipe';

class App extends Component {
  state = {
    recipes: [],
    selectedRecipe: 1,
    addRecipe: false
  }

  constructor() {
    super();

    this.selectRecipe = this.selectRecipe.bind(this);
  }

  async componentDidMount() {
    try {
      const response = await fetch('recipes.json');
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
      const recipes = await response.json();
      console.log(recipes);

      this.setState({
        recipes
      });

    } catch (e) {
      console.error(e);
    }

  }

  selectRecipe = e => {
    this.setState({
      selectedRecipe: e.target.value
    });
  }
  addRecipe = (name, picture, ingredients, directions) => {
    const recipes = this.state.recipes
    const last = recipes.pop()
    const myId = last.id + 1
    recipes.push(last)
    recipes.push({
      id: myId,
      name,
      picture,
      ingredients,
      directions
    })
    this.setState({
      recipes
    })
  }
  showAddrecipes = () => {
    this.setState({
      addRecipe: !this.state.addRecipe
    })
  }
  render() {
    const { recipes, selectedRecipe } = this.state;

    const recipe = !recipes.length
      ? <NoRecipe />
      : <Recipe recipe={recipes[selectedRecipe]} />
    const addRecipe = this.state.addRecipe ? <AddRecipe addRecipe={this.addRecipe} hideForm={this.showAddrecipes} /> : null
    return (
      <>
        <Header />
        {addRecipe}
        <button onClick={this.showAddrecipes}>Add recipe</button>
        <RecipeList recipes={recipes} selectedRecipe={selectedRecipe} selectRecipe={this.selectRecipe} />

        {recipe}
      </>
    );
  }
}

export default App
