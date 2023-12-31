export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=FHvdG3TRHUGn745JL1kooipL2MocGZOt&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map(  (img, key) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

    }));

    return gifs;

  }
