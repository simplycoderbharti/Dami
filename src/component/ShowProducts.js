import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';

const ShowProducts = (props) => {
    const data = props.data

   
    const [filter, setFilter] = useState([]);

    const filterProduct = (cat) => {
        const updatedList =  data.filter((x) => x.category === cat);

        console.log(updatedList)
        setFilter(updatedList);
    }
useEffect( ()=>{

    if(data.length>0){
        setFilter(data)
    }
},[data])

    return (
        <>
            <div className='buttons d-flex justify-content-center mb-5 pb-5'>
                <button className='btn btn-outline-dark me-2' onClick={() => setFilter(data)}>All</button>
                <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("jewelery")}>Jewelery</button>
                <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("electronics")}>Electronics</button>
            </div>
            {filter.map((product) => (

                
                <div className='col-md-4 col-sm-6 mb-4' key={product.id}>
                   
                    <div className="card h-100 text-center p-4">
                        <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                        <div className="card-body">
                            <h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
                            <p className="card-text lead fw-bold">
                                ${product.price}
                            </p>
                            <Link to={`/products/${product.id}`} className="btn btn-outline-dark">
                                Buy Now
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ShowProducts

