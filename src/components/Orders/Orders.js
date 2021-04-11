import React, { useContext } from 'react';
import Table from 'react-bootstrap/Table'
import { useHistory } from 'react-router';
import { cartContext } from '../Home/Home';

const Orders = () => {

    const history = useHistory();

    const [cart, setCart] = useContext(cartContext);
    // console.log(cart);
    let total = 0;
    cart.map(pd => total += parseInt(pd.price))

const checkOut = () =>{
    setCart([]);
    alert('Check Out successfully')
    history.push('/')
}

    return (
        <div className=" m-3">
            <h3>Total Products: {cart.length}</h3>

            <div className="d-flex justify-content-center">
                <Table striped bordered hover size="sm" className="w-50">
                    <thead>
                        <tr className="bg-success text-white">
                            <th>#</th>
                            <th>Product name</th>
                            <th>price</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((pd, idx) => (

                                <tr>
                                    <td>{idx + 1}</td>
                                    <td>{pd.name}</td>
                                    <td>Tk {pd.price}</td>
                                </tr>
                            ))
                        }
                        <tr>

                            <td colSpan="2" className="bg-success text-white">Total</td>
                            <td className="bg-success text-white">Tk {total}</td>
                        </tr>

                    </tbody>

                </Table>

            </div>
            <button className="btn btn-success" onClick={checkOut}>Check Out</button>

        </div>
    );
};

export default Orders;