import { useState } from "react";

export const AddCategory = () => {

    const [inputValue, setinputValue] = useState('Favor escribir el gif a buscar') 

    const onInputChange = ( {target} ) => {
           //console.log(target.value)
            setinputValue( target.value )
    }

    const onSubmit = (target) => {
            target.preventDefault();
            // console.log(inputValue);
    } 

    return (
        <form onSubmit={ (target) => onsubmit(target) }>
            <input
                type="text"
                placeholder="Busqueda de Git"
                value={ inputValue }
                onChange={  onInputChange }
            />
        </form>
    )
}   