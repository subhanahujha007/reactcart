import React from 'react'
import {AiFillDelete} from "react-icons/ai"

const img1="https://cdn1.smartprix.com/rx-iwTKv09Ye-w1200-h1200/wTKv09Ye.jpg";
const img2="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80";
const hoddie="https://img.freepik.com/free-photo/white-trendy-hoodie-street-style-menswear-fashion-shoot_53876-121285.jpg";
const bike="https://www.drivespark.com/images/2019-09/kawasaki-ninja-400-38.jpg";
const cart = () => {
  return (
    <div className="cart">

<main>
    <Cartitem  image={img1}
    name="HP laptop"
    price={5000}
    qty={1}
    
    id="apsksjefbhsef"
    />
</main>

   <aside>
    <h2>Subtotal:${2000}</h2>
    <h2>Shipping:${200}</h2>
    <h2>Tax:${20}</h2>
    <h2>Total:${2220}</h2>
   </aside>
    </div>
  )
}
const Cartitem=({image,name,price,qty,increament,decreament,deletehandler,id})=>(
<div className="cartitem">
    <img src={image} alt={name} />
    <article>
    <h2>{name}</h2>
    <h2>${price}</h2>
    </article><div>
    <button onClick={()=>decreament(id)}>-</button>
    <p>{qty}</p>
    <button onClick={()=>increament(id)}>+</button></div>


    <AiFillDelete onClick={()=>deletehandler()}/>
</div>
)
export default cart