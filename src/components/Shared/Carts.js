import React, { useContext } from 'react';

//Function
import { quantityCounter, shrten } from '../../helpers/functions';

//Icons
import trash from "../../assets/icons/trash.svg"

//Contexts
import { cartContext } from '../../Context/CartContexProvider';

//Styles 
import styles from "./Carts.module.css";

const Carts = ({data}) => {

    const {id ,image , price , title , quantity} = data;
    const {state , dispatch} = useContext(cartContext);

    return (
        <div className={styles.container}>
            <img src={image} alt="product" className={styles.productImage} />
            <div className={styles.data}>
                <h3>{shrten(title)}</h3>
                <p>${price}</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    <button onClick={() => dispatch({type:"INCREASE" , payload:data})}>+</button>
                }
               {
                    quantityCounter(state , id) > 1 && <button onClick={() => dispatch({type:"DECREASE" , payload:data})}>-</button>
                }


                {
                    quantityCounter(state , id) ===1 && <button onClick={() => dispatch({type:"REMOVE-ITEM" ,payload:data})}><img src={trash} alt="trash" style={{width:"15px"}} /></button>
                }
            </div>
        </div>
    );
};

export default Carts;