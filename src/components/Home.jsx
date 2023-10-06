import React from 'react'
import toast from 'react-hot-toast';
const img1="https://cdn1.smartprix.com/rx-iwTKv09Ye-w1200-h1200/wTKv09Ye.jpg";
const img2="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80";
const hoddie="https://img.freepik.com/free-photo/white-trendy-hoodie-street-style-menswear-fashion-shoot_53876-121285.jpg";
const bike="https://www.drivespark.com/images/2019-09/kawasaki-ninja-400-38.jpg";
const Home = () => {
  const addtocart=(options)=>{
console.log(options);
toast.success("Added to cart")
  };
const Productlist=[{name:"HP laptop",
id:"apsksjefbhsef",
price:1000,
image:img1,
},{name:"Shoe box",
id:"apsksj",
price:100,
image:img2},
{name:"hoddie",
id:"apsksjsafdg",
price:170,
image:hoddie},
{name:"ninja",
id:"aps34543ksj",
price:5000,
image:bike}
];
  return (
    <div className="home">{
      Productlist.map(i=>(
      <Productcard key={i.id} 
       handler={addtocart} price={i.price} image={i.image}  name={i.name} />))}
      </div>
  )
}
const Productcard=({name,id,price,image,handler})=>(
<div className="products">
<img src={image} alt={name} />
<p>{name}</p>
<h4>${price}</h4>
<button onClick={()=>handler({id})}>Add to cart</button>
</div>
)
export default Home