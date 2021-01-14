import { getGifs } from "../../helpers/getGifs";

describe('Pruebas en getGifs',()=>{

    test('Debe traer diez elementos', async()=>{
        const gifs = await getGifs('One punch');
        expect(gifs.length).toBe(10)
    })

    test('Mandar sin categoria', async()=>{
        const gifs = await getGifs()
        expect(gifs.length).toBe(10)
    })

})