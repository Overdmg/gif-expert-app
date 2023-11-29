
export const GifGreed = ({ category }) => {
  
  const getGifs = async() => {

    const url = `https://api.giphy.com/v1/gifs/trending?api_key=FHvdG3TRHUGn745JL1kooipL2MocGZOt&q=${ category }&limit=20`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map(  img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

    }));

    console.log(gifs);
  }

    getGifs();

    return (
            <>
                <h3> { category} </h3>
               
            </>
     )
}
