(async function () {
    'use strict';

    const Recipeselector = document.querySelector('#recipeselec');
    const recipeName = document.querySelector('#recipename');
    const image = document.querySelector('#picofrec');
    const ingredient = document.querySelector('#ingredient');
    const headerIngredient = document.querySelector('#headeringredient');
    try {
        const jsonFile = await fetch('recipes.json');
        if (!jsonFile.ok) {
            throw new Error(`${jsonFile.status}-${jsonFile.statusText}}`);
        }
        const ListOfRecipe = await jsonFile.json();

        ListOfRecipe.forEach(element => {
            const button = document.createElement('button');
            button.innerText = element.recipe;

            button.addEventListener('click', async () => {
                try {
                    const myJsonRecipe = await fetch(element.url);
                    if (!myJsonRecipe.ok) {
                        throw new Error(` ${myJsonRecipe.status}-${myJsonRecipe.statusText}}`);
                    }
                    const myRecipe = await myJsonRecipe.json();

                    recipeName.innerText = myRecipe.name;
                    image.src = myRecipe.picture;
                    headerIngredient.innerText = 'Ingredients';

                    let count = 1;
                    ingredient.innerText='';
                    myRecipe.ingredients.forEach((i) => {
                        ingredient.innerText += `${count++}. ${i}\n`;
                    });

                }
                catch (e) {
                    recipeName.innerText = `${e}`;
                    headerIngredient.innerText = '';
                    image.src = '';
                    ingredient.innerText = '';
                }

            });
            Recipeselector.appendChild(button);
        });
    }
    catch (e) {
        recipeName.innerText = `${e}`;
    }
}());
