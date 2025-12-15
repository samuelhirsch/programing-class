import { useState } from "react"

export default function AddRecipe(props) {
    const [inputs, setInput] = useState({
        ingName: "",
        picture: "",
        ingredients: [],
        directions: []
    })
    const { ingName, picture, ingredients, directions } = inputs;
    const [directionInput, setDirectionInput] = useState("");
    const [ingredientsInput, setIngredientsInput] = useState("");
    function HandleInput(e) {

        if (e.target.name === 'ingredients') {
            setIngredientsInput(e.target.value)
        }
        else if (e.target.name === 'directions') {
            setDirectionInput(e.target.value)
        }
        else {
            setInput({
                ...inputs, [e.target.name]: e.target.value
            })
        }
    }
    function handleSubmit(e) {
        e.preventDefault()
        props.hideForm();
        //console.log(ingName, picture, ingredients, directions)
        props.addRecipe(ingName, picture, ingredients, directions)
        setInput({
            ingName: "",
            picture: "",
            ingredients: [],
            directions: []
        })
    }
    function addIngredients() {
        setInput({ ...inputs, ingredients: [...inputs.ingredients, ingredientsInput] });
        setIngredientsInput("")
    }
    function addDirections() {
        setInput({ ...inputs, directions: [...directions, directionInput] });
        setDirectionInput("")
    }
    return (
        <>
            <div id="add-recipe-div">
                <h1>Add A Recipe</h1>
                <form id="add-recipe-form" onSubmit={handleSubmit}>
                    Name: <input value={ingName} name="ingName" onChange={HandleInput} />
                    Picture(url):<input value={picture} name="picture" onChange={HandleInput} />
                    ingredients:<input value={ingredientsInput} name="ingredients" onChange={HandleInput} />
                    <input type="button" className="span-2" value="Press to add this ingredient to the list" onClick={addIngredients} />
                    directions:<input value={directionInput} name="directions" onChange={HandleInput} />
                    <input type="button" className="span-2" value="Press to add this direction to the list" onClick={addDirections} />
                    <button >Add</button> <input type="button" value="Cancel" onClick={props.hideForm}/>
                    
                </form>
            </div>

        </>
    )
}