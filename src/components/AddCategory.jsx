import { useState } from "react";

export const AddCategory = ( {onNewCategories} ) => {    

    const [inputValue, setinputValue] = useState('') 

    const onInputChange = ( {target} ) => {
            setinputValue( target.value );
    }

    const onSubmit = (textR) => {
            textR.preventDefault();
        
            if ( inputValue.trim().length <= 1) return;

           onNewCategories(inputValue);

            setinputValue('');           
    } 

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Busqueda de Gifs"
                value={ inputValue }
                onChange={  onInputChange }
            />
        </form>
    )
}   