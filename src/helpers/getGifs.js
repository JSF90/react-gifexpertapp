
export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=21OrpGmkALxkujKgZL9feKQWHfSRuoKg`
    const res = await fetch(url);
    const {data} = await res.json();
    
    // extraer de la data lo que interesa
    const gifsData = data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url,  // ? si hay image tomalas
        }
    });
    return gifsData;
}