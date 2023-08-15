import React from 'react';

const MenuItem = ({item}) => {
    const {name, recipe,image,price} = item
    return (
        <div className='flex space-x-4 mb-12'>
            <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[120px]' src={image} alt="" />
            <div>
                <h3>{name}_____</h3>
                <p>{recipe}</p>
            </div>
            <p>{price}</p>
        </div>
    );
};

export default MenuItem;