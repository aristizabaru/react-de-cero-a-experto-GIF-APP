import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onAddCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        const newInsertValue = inputValue.trim();

        if (newInsertValue.length <= 1) return;

        onAddCategory(newInsertValue);
        setInputValue('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar Gif's"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
};


AddCategory.propTypes = {
    onAddCategory: PropTypes.func
};
