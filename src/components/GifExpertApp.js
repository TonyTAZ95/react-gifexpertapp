// import React, { Fragment } from 'react';
import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = () => {
    
    //const categories = [ 'One Punch', 'Samurai X', 'Dragon Ball'];
    const [ categories, setCategories ] = useState( [ 'One Punch' ] )
    
    // const handleAdd =  (  ) => {
    //     //setCategories( [ ...categories, 'Naruto' ] );
    //     setCategories( cats => [ ...cats, 'Naruto' ] )
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            
            <AddCategory setCategories = { setCategories } />
            
            <hr />

            <ol>
                { categories.map( category => ( 
                    <GifGrid 
                        key = { category }
                        category = { category }
                    />
                 ) ) }
            </ol>
        </>
    );
}


// Aqui definiremos el tipo de propiedades del componente:
GifExpertApp.propTypes = {
    // VARIABLES TYPES
}

GifExpertApp.defaultProps = {
    // DEFAULT VARIABLES VALUES
}

export default GifExpertApp;