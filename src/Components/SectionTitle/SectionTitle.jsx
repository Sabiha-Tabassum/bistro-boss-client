import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='md:w-4/12 mx-auto text-center my-8'>
            <h1 className='text-yellow-600 mb-2'>{subHeading}</h1>
            <p className='text-4xl uppercase border-y-4 '>{heading}</p>
        </div>
    );
};

export default SectionTitle;