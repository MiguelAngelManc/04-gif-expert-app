import { getGifs } from "../helpers/getGifs";

const { useState, useEffect } = require("react");

export const useFetchGifs = (categoria) =>{
    const [state, setstate] = useState({
        data: [],
        loading: true
    })

    useEffect(()=>{
        getGifs(categoria)
            .then( imgs =>{
                    setstate({
                        data: imgs,
                        loading:false,
                    })
            });
    },[])

    return state;

}

