import React from 'react';
import './styles.css';

export const TextInput = ({ searchValue, handleChange }) => {
    return (
        <input
            className="text-input"
            onChange={handleChange}
            value={searchValue}
            type="search" 
            placeholder='Procure por um Post  (Para procurar digite alguma palavra que contenha no mesmo)'
        />
    );
}
