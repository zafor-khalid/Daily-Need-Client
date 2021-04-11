import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import Admin from '../Admin/Admin';
import './AddProducts.css'
const axios = require('axios');


const AddProducts = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imgURL, setImgURL] = useState(null);
    const history = useHistory();
    const onSubmit = data => {
        // console.log(data)
        const productData = {
            name: data.name,
            price: data.price,
            imageURL: imgURL
        };
        const url = `https://rocky-journey-51140.herokuapp.com/addProduct`;
        // console.log(productData)
        fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => alert('Item Added Successfully'))
        history.push('/addProducts')
    };

    const handleImgUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', "c274abf2a9914c46574edacc4427a86a")
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImgURL(response.data.data.display_url);

            })
            .catch(function (error) {
                console.log(error);
            });
    }



    return (
        <div>
            <Admin />
            <h3>Add New Products</h3>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input name="name" defaultValue="product name" {...register("name")} className="my-1" />
                <br />
                <input name="price" defaultValue="product price" {...register("price")} className="my-1" />
                <br />
                <input type="file" onChange={handleImgUpload} className="my-1" />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;