import { useState } from "react";

export const AddCategory = ( {onNewCategories} ) => {
    

    const [inputValue, setinputValue] = useState('') 

    const onInputChange = ( {target} ) => {
           //console.log(target.value)
            setinputValue( target.value );
    }

    const onSubmit = (textR) => {
            textR.preventDefault();
            console.log(inputValue);
        
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