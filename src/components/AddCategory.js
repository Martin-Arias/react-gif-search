import React, { useState } from 'react'

import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    //State
    const [inputValue , setInputValue] = useState('');


    //Set input value
    const handleInputChange = (event) => {
       setInputValue(event.target.value);
    }

    //Set value on submit
    const handleSubmit = (event) => {
        event.preventDefault();


        if (inputValue.trim().length >2 ) {   
        
            //Añade una categoria 

            setCategories( categories => [ inputValue,...categories]);
           setInputValue('')
        }
    }
    
    
    
    
    return (
        <form onSubmit = {handleSubmit}>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}