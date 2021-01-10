export const getGifs = async (categoria) =>{

    const apiKey = '8jfZDBe1e4BHxCcP1wXE5ngoE5I6sVLX'
    const limit = 10

    const fetchUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(categoria)}&limit=${limit}`


    const resp = await fetch(fetchUrl)
    const {data} = await resp.json();
    
    const gifs = data.map( img =>{
        return {
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url,

        }
    })
 
    return gifs;

}