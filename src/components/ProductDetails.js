import React, { useContext }  from 'react';
import { useParams ,Link } from 'react-router-dom';

//Context
import { productsContext } from '../Context/ProductContextProvider';

//Function
import { shrten } from '../helpers/functions';

//Styles
import styles from "./ProductDetails.module.css";

const ProductDetails = () => {

    const id = useParams()
    const products = useContext(productsContext)
    const product = products[id.id - 1]
    const {image , price , title ,description , category} = product;

    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt='detials' />
            <div className={styles.textContainer}>
                    <h3>{shrten(title)}</h3>
                    <h4 className={styles.description}>{description}</h4>
                    <h4 className={styles.category}>Category : {category}</h4>
                <div className={styles.buttonContainer}>
                    <p>Price : ${price}</p>
                    <Link to="/">Back to shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;