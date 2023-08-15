import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useCart from '../../../hooks/UseCart/UseCart';

const Cart = () => {
    const [cart] = useCart();
    return (
        <div>
             <li>
                <Link to='/dashboard/mycart'>
                    <button className="btn gap-2">
                       <FaShoppingCart></FaShoppingCart>
                        <div className="badge badge-secondary">+{cart?.length || 0}</div>
                    </button>
                </Link>
            </li>
        </div>
    );
};

export default Cart;