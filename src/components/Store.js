import React, { useContext } from 'react';

//Context
import { productsContext } from '../Context/ProductContextProvider';

//Components
import Product from './Shared/Product';

//Styles
import styles from "./Store.module.css";

const Store = () => {

    const products =  useContext(productsContext)

    return (
        <div className={styles.container}>
                {
                    products.map(item => <Product key={item.id} product={item} /> )
                }       
        </div>
    );
};

export default Store;