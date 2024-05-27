import React from 'react'
import './RelatedProducts.css'
//import data_product from '../Assets/data'
import Item from '../Item/Item'
import { useEffect, useState } from 'react'

const RelatedProducts = () => {
  const [Related_collection,setRelated_collection]= useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/relatedcollections')
    .then((Response)=>Response.json())
    .then((data)=>setRelated_collection(data))
  }, [])


  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
            {Related_collection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}

        </div>

    </div>
  )
}

export default RelatedProducts