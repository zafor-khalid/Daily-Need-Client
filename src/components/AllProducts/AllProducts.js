import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ProductCard from './ProductCard';

const AllProducts = () => {

    const [products, setProducts] = useState([]);
    const [spinner, setSpinner] = useState(true);
    useEffect(() => {
        
        fetch('https://rocky-journey-51140.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setSpinner(false)
            })
    }, [])
    
    return (
        <div className="d-flex m-2 flex-wrap justify-content-center">
            {
                spinner && <Spinner animation="border" variant="success"/>
            }

           {
               products.map(pd=> <ProductCard pd={pd}></ProductCard>)
           }
        </div>
    );
};

export default AllProducts;