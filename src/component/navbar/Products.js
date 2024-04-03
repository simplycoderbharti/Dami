import  { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import ShowProducts from '../ShowProducts';

function Products() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);


const getProduct = async ()=>{

    const response = await fetch("https://fakestoreapi.com/products/")

    const newdata = await  response.json();
    setData(newdata)
    // console.log(data)
}

useEffect(()=>{
    getProduct()
},[])


    const Loading = () => {
        return (
            <>
                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>
            </>
        );
    }

    


   console.log(data)
    return (
        <div>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {loading ? <Loading /> : <ShowProducts  data={data} />}
                    
                </div>
            </div>
        </div>
    );
}

export default Products;
