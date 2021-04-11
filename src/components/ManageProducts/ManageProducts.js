import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Admin from '../Admin/Admin';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [state, setState] = useState(false);
    useEffect(() => {

        fetch('https://rocky-journey-51140.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setState(true)
            })
    }, [state])
    // console.log(products[0])

    const handleDelete = (id) => {
        fetch('https://rocky-journey-51140.herokuapp.com/delete/' + id, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(res => {
                if (res) {
                    setState(!state)
                }
            })
    }

    return (
        <div className=" m-3">
            <Admin />
            <h3>Product Management</h3>
            <div className="d-flex justify-content-center">
                <Table striped bordered hover variant="success" className="w-50">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>price</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.map((pd, idx) => (<tr>
                                <td>{idx + 1}</td>
                                <td>{pd.name}</td>
                                <td>{pd.price}</td>
                                <td><button className="btn btn-danger" onClick={() => handleDelete(pd._id)}>Delete</button></td>
                            </tr>
                            )
                            )
                        }

                    </tbody>

                </Table>
            </div>


        </div>
    );
};

export default ManageProducts;