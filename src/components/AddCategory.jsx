import { useState } from "react";

export const AddCategory = ( {setCategories} ) => {
    

    const [inputValue, setinputValue] = useState('') 

    const onInputChange = ( {target} ) => {
           //console.log(target.value)
            setinputValue( target.value );
    }

    const onSubmit = (textR) => {
            textR.preventDefault();
            console.log(inputValue);
        
            if ( inputValue.trim().length <= 1) return;

            // setear el valor del input
            setCategories( categories => [ inputValue, ...categories ] ); 
            
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