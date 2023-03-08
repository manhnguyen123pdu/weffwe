import React from 'react'
import { dataListProduct } from '../../data/data'
import Modal from './Modal'
export default function ListProduct() {

    const renderList = () => {
        return dataListProduct.map((item, index) => {
            return <div className='col-4'>
                <div key={index} className="card text-left">
                    <img className="card-img-top" src={item.img} alt />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p style={{ fontSize: "20px" }} className="card-text">Đơn giá: {item.price.toLocaleString()}</p>
                        <button className='btn btn-success'> Add to cart</button>
                        <button className=' ml-2 btn btn-danger'> View detail</button>
                        <Modal/>
                        
                    </div>
                </div>
            </div>

        })
    }

    return (
        <div className='container'>
            <h2 className='text-center'>
                <div className='row'>
                    {renderList()}
                </div>
            </h2>
        </div>
    )
}
