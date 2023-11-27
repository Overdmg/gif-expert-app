import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'One Pieace', 'DBZ', ]);

    const onAddCategory = (newCategory) =>{        
                  setCategories([newCategory, ...categories])
    }
    
    return(
        <>
            {/* Titulo */}
            <h1>Gif Expert App</h1>
        
            {/* Input */}
            <AddCategory onNewCategories={ onAddCategory }/> 

            {/* Listado de Git */}

            <ol>
                {
                    categories.map( categories => {
                        return <li key={ categories }> {categories} </li>
                    })
                }
            </ol>
                {/* Gif Item */}
        </>
    )

}