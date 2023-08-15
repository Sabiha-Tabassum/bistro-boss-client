import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import saladImg from '../../assets/menu/salad-bg.jpg';
import soupImg from '../../assets/menu/soup-bg.jpg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';

import useMenu from '../../hooks/UseMenu/UseMenu';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuCategory from './Menu/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
   
    const offered = menu.filter(item => item.category === 'drinks');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            <SectionTitle subHeading="Don't Miss"  heading="Today's Offer"></SectionTitle>
            <MenuCategory item = {offered}></MenuCategory>
            <MenuCategory item = {desserts} img={dessertImg} title={"dessert"}></MenuCategory>
            <MenuCategory item = {pizza} img={pizzaImg} title={"pizza"}></MenuCategory>
            <MenuCategory item = {salad} img={saladImg} title={"salad"}></MenuCategory>
            <MenuCategory item = {soup} img={soupImg} title={"soup "}></MenuCategory>
           
            
        </div>
    );
};

export default Menu;