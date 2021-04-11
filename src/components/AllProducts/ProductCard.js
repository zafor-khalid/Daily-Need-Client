import React, { useContext } from 'react';
import { cartContext } from '../Home/Home';
import { Card, Button, Spinner } from 'react-bootstrap';



const ProductCard = ({pd}) => {
    // console.log(pd)
    const [cart, setCart] = useContext(cartContext);

    const addToCart = (name, price, imageURL) =>{
       
        const product = {
            name: name,
            price: price,
            img: imageURL
        }
        if(cart.length > 0){
            const newCart = [...cart, product];
            setCart(newCart)
            // console.log(...cart)
        }
        else{
            const newCart = [product];
            setCart(newCart);
            // console.log(cart)
        }
        
    }
    // console.log(...cart)

    return (
        <div className="m-2">
            
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={pd.imageURL} />
                <Card.Body>
                    <Card.Title>{pd.name}</Card.Title>
                    <Card.Title className="text-success">Tk {pd.price}</Card.Title>
                    <Button variant="success" onClick={()=>addToCart(pd.name, pd.price, pd.imageURL)}>Add to cart</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProductCard;