import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GifItem } from './GifItem';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        const getImages = async () => {
            const newImages = await getGifs(category);
            setImages(newImages);
        };

        getImages();

    }, [category]);

    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>
                {images.map((image) => (
                    <GifItem key={image.id} {...image} />
                ))}
            </div>
        </>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
};
