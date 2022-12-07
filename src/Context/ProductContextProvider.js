import React , {useState , useEffect} from 'react';

//API
import { getProducts } from '../API/api';

//Context
export const productsContext = React.createContext();

const ProductContextProvider = ({children}) => {

    const [products , setProducts] = useState([]);

    useEffect(() => {
        const FetchAPI = async () => {
            setProducts(await getProducts())
        }

        FetchAPI();
    } , [])

    return (
        <productsContext.Provider value={products}>
            {children}
        </productsContext.Provider>
    );
};

export default ProductContextProvider;