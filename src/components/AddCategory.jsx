import { useState } from "react";

export const AddCategory = ({setCategories}) => {
    

    const [inputValue, setinputValue] = useState('Favor escribir el gif a buscar') 

    const onInputChange = ( {target} ) => {
           //console.log(target.value)
            setinputValue( target.value );
    }

    const onSubmit = (textR) => {
            textR.preventDefault();
            console.log(inputValue);
        
            // setear el valor del input
            setCategories([inputValue])
            
          

    } 

    return (
        <form onSubmit={ (textR) => onSubmit(textR) }>
            <input
                type="text"
                placeholder="Busqueda de Git"
                value={ inputValue }
                onChange={  onInputChange }
            />
        </form>
    )
}   