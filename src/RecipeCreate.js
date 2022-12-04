import React, { useState } from "react";


function RecipeCreate({createRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  const initialFormState = {
        name: "",
        cuisine: "",
        photo:"",
        ingredients:"",
        preparation: "",
  }
  const [formData, setFormData] = useState({...initialFormState});
 
  const changeHandler = ({target}) => {
    setFormData({...formData, [target.name]: target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData)
    setFormData({...initialFormState})
  }
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td><input 
                  type="text"
                  name="name"
                  id="name" 
                  placeholder="Name"
                  onChange={changeHandler}
                  value={formData.name}/></td>
            <td><input type="text"
                  name="cuisine"
                  id="cuisine"
                  placeholder="Cuisine"
                  onChange={changeHandler}
                  value={formData.cuisine}/></td>
             <td><input type="text"
                   name="photo"
                   id="photo"
                   placeholder="URL"
                   onChange={changeHandler}
                   value={formData.photo} /> </td>
             <td><textarea
                   type="text"
                   name="ingredients"
                   id="ingredients"
                   placeholder="Ingredients"
                   onChange={changeHandler}
                   value={formData.ingredients}/></td>
            <td><textarea
                  type="text"
                  name="preparation"
                  id="preparation"
                  placeholder="Preparation"
                  onChange={changeHandler}
                  value={formData.preparation}/></td>
            <td>
              <button type="submit" >Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
