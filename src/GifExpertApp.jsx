import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGreed } from "./components/GifGreed";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);

    const onAddCategory = (newCategory) =>{     
        
        if( categories.includes(newCategory) ) return;

            setCategories([newCategory, ...categories])
    }
    
    return(
        <>
            <h1> Gif Expert App </h1>
            <AddCategory     
                onNewCategories={ onAddCategory }  
            /> 

               { categories.map( (categories) => (
                  <GifGreed 
                         key={ categories } 
                         category={ categories }
                    />                    
                  )) 
                }
        </>
    )

}