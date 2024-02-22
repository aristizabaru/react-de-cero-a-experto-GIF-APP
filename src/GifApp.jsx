import { useState } from 'react';
import { AddCategory } from './components/AddCategory';



export const GifApp = () => {

    const [categories, setCategories] = useState([]);


    const onAddCategory = (newItem) => {

        if (categories.includes(newItem)) return;

        setCategories([newItem, ...categories]);
    };

    return (
        <>
            <h1>Gif App</h1>
            <AddCategory onAddCategory={onAddCategory} />
            <ol>
                {categories.map((category) => <li key={category}>{category}</li>)}
            </ol>
        </>
    );
};
