import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



export const GifApp = () => {

    const [categories, setCategories] = useState(['Goku']);


    const onAddCategory = (newItem) => {

        if (categories.includes(newItem)) return;

        setCategories([newItem, ...categories]);
    };

    return (
        <>
            <h1>Gif App</h1>
            <AddCategory onAddCategory={onAddCategory} />
            {categories.map((category) => <GifGrid key={category} category={category} />)}
        </>
    );
};
