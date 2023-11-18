import { useState } from "react";

export const AddCategory = () => {

    const [inputValue, setinputValue] = useState('One Punch') 

    const onInputChange = () => {

        setinputValue('Hola Elyn Taveras')
    }

    return (
        <input
            type="text"
            placeholder="Busqueda de Git"
            value={ inputValue }
            onChange={ onInputChange }
        />
    )
}   