import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Icons
import shop from "../../assets/icons/shop.svg";

//Contexts
import { cartContext } from '../../Context/CartContexProvider';

//Styles
import styles from "./Navbar.module.css";

const Navbar = () => {

    const {state } = useContext(cartContext)

    return (
        <div className={styles.mainContainer}>
            <div  className={styles.container}>
                <Link className={styles.productLink} to="/">Product</Link>
                <div className={styles.iconContainer}>
                    <Link to="/carts" >
                    <img src={shop} alt="shop" />
                    </Link>
                    <span>{state.itemCounter}</span>
                </div>    
            </div>
            
         
            
        </div>
    );
};

export default Navbar;