import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import AddCategory from './AddCategory'
import GifGrid from './GifGrid'

const GifExpertApp = ( {defaultCategorias=[]} ) =>{

    //const categorias = ['One Punch','Samurai X','Dragon Ball']
    const [categorias, setCategorias] = useState(defaultCategorias)

    // const handleAdd = () =>{
    //     const newCategorias = [...categorias, 'TEST']
    //     setCateorias(newCategorias)
    // }



    return <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategorias={setCategorias} />
        <hr />

        <ul>
        {
            categorias.map(x =>
                (<GifGrid 
                    key={x}
                    categoria={x}/>)
            )
        }
        </ul>
    </>
}


export default GifExpertApp;

