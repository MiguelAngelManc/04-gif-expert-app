import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategorias}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = e =>{
        setInputValue(e.target.value)
    }

    const handleInputSubmit = e =>{
        e.preventDefault();

        if(inputValue.trim().length>2)
            setCategorias( cats => [inputValue, ...cats])
    }

    return (
        <form onSubmit={handleInputSubmit}>
            <h2>Add category</h2>  
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
          </form>
        
    )
}

AddCategory.propTypes = {
    setCategorias:PropTypes.func.isRequired,

}

export default AddCategory
