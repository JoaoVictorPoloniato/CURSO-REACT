import React from 'react';
import './styles.css';

export const TextInput = ({ searchValue, handleChange }) => {
    return (
        <input
            onChange={handleChange} // Corrigido para usar handleChange diretamente
            value={searchValue}
            type="search" 
        />
    );
}
