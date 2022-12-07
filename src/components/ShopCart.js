import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Components
import Carts from './Shared/Carts';

//Contexts
import { cartContext } from '../Context/CartContexProvider';

//Styles
import styles from "./ShopCart.module.css";

const ShopCart = () => {

    const {state , dispatch} = useContext(cartContext);

    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
            {
                state.selectedItem.map(item => <Carts key={item.id} data={item} />)
            }
            </div>
            {
                state.itemCounter > 0 && <div  className={styles.payments}>
                    <p><span>Total Items:</span>{state.itemCounter}</p>
                    <p><span>Total Payment:</span> ${state.total}</p>
                    <div className={styles.buttonContainer}>
                        <button onClick={() => dispatch({type:"CHECKOUT"})}>Check out</button>
                        <button onClick={() => dispatch({type:"CLEAR"})}>Clear</button>
                    </div>
                </div>
            }

            {
                state.checkout && <div className={styles.complete}>
                    <h3>Check out successfully</h3>
                    <Link to="/">Want buy more?</Link>
                </div>
            }

            {
                !state.checkout && state.itemCounter === 0 && <div  className={styles.complete}>
                    <h3>Clear Done!</h3>
                    <Link to="/">Want Buy?</Link>
                </div>
            }

        </div>
    );
};

export default ShopCart;