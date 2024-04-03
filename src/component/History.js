import React, { useEffect, useState } from 'react'

const History = () => {
    const [data, setData] = useState([])
    
    useEffect(() => {
        const storedData = localStorage.getItem('myData');

        if (storedData) {
          setData(JSON.parse(storedData));
        }
      }, []);


      console.log(data)
  return (
    <div>
        {data.map((item, index) => (
                            <div key={index} className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={item.image} style={{ width: '100px', height: '100px' }} className="img-fluid rounded-start" alt={item.title} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">Price: ${item.price}</p>
                                            <p className="card-text">Quantity: {item.quantity}</p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
    </div>
  )
}

export default History