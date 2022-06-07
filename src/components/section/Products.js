import React, { useEffect, useState } from 'react'
import DATA from '../Data'
import { Link } from 'react-router-dom'
import '../css/Products.css'
const Products = () => {
  const [products, setProduct] = useState([])
  const productos = DATA;


  const getProducts = ()=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(productos)
      },3000)
    })
  }
  useEffect(()=>{

    getProducts()
    .then((response)=>{
      setProduct(response)
    })
    .catch((err)=>{
      console.log("FALLO",err);
    })
    .finally(()=>{
      console.log("Finalalizo la promesa")
    })
    
  },[])


  return (
    <>
    <div id="product">
      {
        products.map((producto)=>{
          return(
            <div className="card" key={producto._id}>
              <Link to={`/product/${producto._id}`}>
                <img src={producto.src} alt=""/> 
              </Link>
              <div className="content">
                <h3>
                <Link to={`/product/${producto._id}`}>{producto.title}</Link>

                </h3>
                <span>${producto.price}</span>
                <p>{producto.Description}</p>
                <button>AGREGAR</button>
              </div>
            </div>
          )
        })
      }
       
        
      </div>


    </>
  )
}

export default Products