import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBook, FaCalendar, FaHome, FaShoppingCart, FaUser, FaUtensils, FaWallet } from 'react-icons/fa';
import useCart from '../hooks/UseCart/UseCart';



const Dashboard = () => {
    const [cart] = useCart();

    // TODO: load data from the server to have dynamic isAdmin based on data.
    // const isAdmin = true;

    // const [isAdmin] = useAdmin();


    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                {/* Page content here */}
                <Outlet></Outlet>


            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
                    {/* Sidebar content here */}

                    
                        
                            
                            <li><NavLink to='/dashboard/addItem'><FaUtensils></FaUtensils> Add an Item</NavLink></li>
                            <li><NavLink to='/dashboard/manageitems'><FaWallet></FaWallet>Manage Items</NavLink></li>
                           
                            <li><NavLink to='/dashboard/allUsers'><FaUser></FaUser>All Users</NavLink></li>

                       
                    

                    
                          
                           
                           <li>
                            <NavLink to='/dashboard/mycart'> <FaShoppingCart></FaShoppingCart> My Cart
                                <span className="badge badge-secondary">+{cart?.length || 0}
                                </span>
                            </NavLink>


                        </li>

                 


                    <div className="divider"></div>
                    <li><NavLink to='/'> <FaHome></FaHome> Home </NavLink></li>
                    <li><NavLink to="/menu">Our Menu</NavLink></li>
                    <li><NavLink to='/order/salad'>Order</NavLink></li>



                </ul>

            </div>
        </div>
    );
};

export default Dashboard;