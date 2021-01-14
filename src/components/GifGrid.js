import React from 'react'
import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

const GifGrid = ({categoria}) => {

    const { data:imagenes, loading } = useFetchGifs(categoria);


    return ( 
        <>
            <h3>{categoria}</h3>

            {loading && <p className="animate__animated animate__flash">Cargando... </p>}

            <div className="card-grid ">
                {imagenes.map(x=><GifGridItem {...x} />)}
            </div>
        </>
    )
}

GifGrid.propTypes = {
    categoria:PropTypes.string.isRequired,
}

export default GifGrid
