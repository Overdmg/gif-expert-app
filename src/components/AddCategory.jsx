import { useState } from "react";

export const AddCategory = () => {

    const [inputValue, setinputValue] = useState('Favor escribir el gif a buscar') 

    const onInputChange = (write) => {

        console.log(write.target.value)

        setinputValue( write.target.value )
    }

    return (
        <input
            type="text"
            placeholder="Busqueda de Git"
            value={ inputValue }
            onChange={ (write) => onInputChange(write) }
        />
    )
}   