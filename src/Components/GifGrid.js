import React from 'react';
//import { getGifs } from '../Helpers/getGifs';
import { useFetchGifs } from '../Hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {


    const { data: images, loading } = useFetchGifs(category);

    // useEffect(() => {
    //     getGifs(category)
    //         .then(setImages)
    // }, [category])




    return (
        <>
            <h3 className='animate__animated animate__fadeIn'> {category}</h3>
            {loading && <p className='animate__animated animate__flash'>Loading...</p>}
            <div className='card-grid'>


                {
                    images.map(i => (

                        <GifGridItem
                            key={i.id}
                            {...i}
                        />
                    )
                    )
                }


            </div>
        </>
    );
};
