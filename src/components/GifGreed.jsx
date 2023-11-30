import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGreed = ({ category }) => {

    const [images, setImages] = useState([]);

    //console.log(images[6].title)
    const listItems = images.map()
    
      const getImages = async () => {
            const newImages = await getGifs( category );
            setImages(newImages);
    }

    useEffect( () => { 

        getImages();

    }, [])

    return (
            <>
                <h3> { category } </h3>
                <ol>
                    {/* images.map ...*/}
                   
                    <li>Titulo:</li>

                </ol>
            </>
     )
}
