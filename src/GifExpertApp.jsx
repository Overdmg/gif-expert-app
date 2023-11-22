import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'One Pieace', 'DBZ', ]);


    const onAddCategory = () =>{        
          setCategories(['Elyn', ...categories])
    }

   //  console.log(categories);
    

//   esto es una [prueba]

    return(
        <>
            {/* Titulo */}
            <h1>Gif Expert App</h1>
        
            {/* Input */}
            <AddCategory setCategories={ setCategories }/>

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