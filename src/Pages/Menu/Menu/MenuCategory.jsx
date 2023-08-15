import React from 'react';
import { Link } from 'react-router-dom';
import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const MenuCategory = ({item, title, img}) => {
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}
            
             <div className='grid md:grid-cols-2 gap-4'>
                {
                    item.map(i => <MenuItem 
                    key={i._id}
                    item = {i}></MenuItem>)
                }
            </div>
           <Link to={`/order/${title}`}> <button className='btn btn-outline border-0 border-b-4'>Order Now</button></Link>
        </div>
    );
};

export default MenuCategory;