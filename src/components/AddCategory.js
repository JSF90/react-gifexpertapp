import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        const {value} = e.target
        setinputValue(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(inputValue.trim().length > 2){    // Validacion input debe ser mayor que 2 letras
            // Esta funcion la recibimos por props desde GifExpertApp mara 
            // modificar el estado de GifExpertApp y cats es el estado anterior
            setCategories(catg => [inputValue, ...catg]);
            setinputValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" value={inputValue} 
                onChange={handleInputChange}
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};

export default AddCategory;
