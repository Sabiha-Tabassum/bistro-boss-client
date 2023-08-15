import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import '../Featured/Featured.css';

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white'>
            <SectionTitle subHeading={'check it out'} heading={'Featured Item'}></SectionTitle>
            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-60 py-20 pt-12 px-36'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md: ml-10'>
                    <p>aug 20, 2029</p>
                    <p className='uppercase'>where can I get some?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores ullam debitis, ut ipsa quia provident sint, delectus, obcaecati architecto quam dicta ad amet consectetur earum distinctio voluptates repudiandae tempora deserunt? Quisquam labore quis recusandae! Doloribus necessitatibus, laborum quidem aperiam ex natus vitae odio corporis, maiores porro consequuntur, quam quis dolor!</p>
                    <button className='btn btn-outline border-0 border-b-4'>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;