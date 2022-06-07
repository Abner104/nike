import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { producto } from '../Data'

const ItemDetailContainer = () => {
    const [product,setProduct]= useState({})
    const getItem = () => {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(producto)
            },3000)
        })
    }
    useEffect(()=>{
        getItem()
        .then((res)=>{
            console.log("Respuesta GetItem:", res)
            setProduct(res)

        })
    })



  return (
      <>

    <div>
        Contenedor ITEM
    </div>
    <ItemDetail data={product}/>
      </>
  )
}

export default ItemDetailContainer