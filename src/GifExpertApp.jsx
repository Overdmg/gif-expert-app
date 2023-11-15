import { useState } from "react";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'One Pieace', 'DBZ' ]);

    console.log(categories);

    return(
        <>
            {/* Titulo */}
            <h1>Gif Expert App</h1>
        
            {/* Input */}

            {/* Listado de Git */}
            <ol>
                {
                    categories.map( categories => {
                        return <li key={ categories }>{categories} </li>
                    })
                }
            </ol>
                {/* Gif Item */}
        </>
    )

}