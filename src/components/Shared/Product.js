import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Icons
import trash from "../../assets/icons/trash.svg";

//Function
import { isInCart, quantityCounter, shrten } from '../../helpers/functions';

//Contexts
import { cartContext } from '../../Context/CartContexProvider';

//Styles
import styles from "./Product.module.css";

const Product = ({product}) => {

    const {id , image , price, title } = product;
    const {state , dispatch} = useContext(cartContext)

    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={image} alt="pro" style={{width:"250px"}}/>
            <h3>{shrten(title)}</h3>
            <p>${price}</p>
            <div  className={styles.linkContainer}>
                <Link to={`product/${id}`}>Details</Link>
                <div className={styles.buttonContainer}>
                {
                    isInCart(state , id) ? 
                    <button className={styles.smallButton} onClick={() => dispatch({type:"INCREASE" , payload:product})}>+</button> :
                    <button  onClick={() => dispatch({type:"ADD-ITEM" , payload:product})}>Add to cart</button>
                }

                {
                    quantityCounter(state , id) > 0 && <span className={styles.counter} >{quantityCounter(state , id)}</span>
                }

                {
                    quantityCounter(state , id) > 1 && <button className={styles.smallButton} onClick={() => dispatch({type:"DECREASE" , payload:product})}>-</button>
                }


                {
                    quantityCounter(state , id) ===1 && <button className={styles.smallButton} onClick={() => dispatch({type:"REMOVE-ITEM" ,payload:product})}><img src={trash} alt="trash" style={{width:"15px"}} /></button>
                }
                </div>
            </div>
        </div>
    );
};

export default Product;