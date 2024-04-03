import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './utils/cartSlice';
import Skeleton from 'react-loading-skeleton';
import { Link, useParams } from 'react-router-dom';

function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const addProduct = (product) => {
        dispatch(addToCart(product));
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch (`https://fakestoreapi.com/products/${id}`);
            const data = await response.json(); 
            setProduct(data)
            setLoading(false);
        }
        getProduct();
    }, [id]);

    const ShowProduct = () => {
        return (
            <>
                <div className='col-12 col-md-6'>
                    <img src={product.image} alt={product.title} height="400px" width="400px" />
                </div>
                <div className='col-12 col-md-6 d-flex flex-column justify-content-center'>
                    <h4 className='text-uppercase text-black-50'>
                        {product.category}
                    </h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className='lead fw-bolder'>
                        Rating {product.rating && product.rating.rate}
                        <i className="fa-solid fa-star"></i>
                    </p>
                    <h3 className='display-6 fw-bold my-4'>
                        ${product.price}
                    </h3>
                    <p className='lead'>{product.description}</p>
                    <button className='btn btn-outline-dark px-4 py-2'
                        onClick={() => addProduct(product)}>
                        Add to Cart
                    </button>
                    <Link to='/cart' className='btn btn-outline-dark'>
                        Go to Cart
                    </Link>
                </div>
                
            </>
        )
    }

    return (
        <div className='container py-5'>
            <div className='row py-4 overflow-hidden'>
                {loading ? <div className='spinner-border text-primary' role='status'></div> : <ShowProduct />}
            </div>
        </div>
    )
}

export default Product;
