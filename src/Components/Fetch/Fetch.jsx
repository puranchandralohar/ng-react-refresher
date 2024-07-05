import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const Fetch = () => {

    const [products, setProducts] = useState()

    let url = `https://fakestoreapi.com/products`

    useEffect(()=>{
        axios.get(url)
        .then((res)=>{
            // console.log(res.data)
            setProducts(res.data)
        })
    },[])

    console.log(products, "products")

  return (
    <>
             <input type="text" placeholder="Search Products" />
             <div style={{display:"flex", gap:"5px", flexWrap:"wrap"}}>
       
        {
           products ? products.map((item)=>{
               return(
                    <div key={item.id}>
                          <p>{item.title}</p>
                          <p>Rs {item.price}</p>
                          <img src={item.image} alt={item.title} width={"100px"} height={"100px"} />
                     </div>
                     
               )
            }) : "No data found"
        }


    </div>

    </>



    
  )
}
