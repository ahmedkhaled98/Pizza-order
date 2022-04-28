import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const Product = ({pizza}) => {
  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(pizza.prices[0]);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleChange = (e, option) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };

const handleClick = () => {
    dispatch(addProduct({...pizza, extras, price, quantity}));
  };
  return (
   <div className="container py-5">
     <div className="row">
       <div className="col-lg-6  mx-sm-auto">
      
    <img src={pizza.img} className="w-75" alt="" />

       </div>
       <div className="col-lg-6">
       <h1 className={styles.title}>{pizza.title}</h1>
  <span className={styles.price}>${price}</span>
  <p className="mt-3">{pizza.desc}</p>
  <h3 className={styles.choose}>Choose the size</h3>
       <div className="container">
         <div className="row mt-4">
           <div className="col-lg-4">
           <div className={styles.size} onClick={() => handleSize(0)}>
      <Image  src="/img/size.png" width={35} height={35} alt="" />
      <span className={styles.number}>Small</span>
    </div>
           </div>
           <div className="col-lg-4">
           <div className={styles.size} onClick={() => handleSize(1)}>
      <Image  src="/img/size.png" width={40} height={40} alt="" />
      <span className={styles.number}>Medium</span>
    </div>
           </div>
           <div className="col-lg-4">
           <div className={styles.size} onClick={() => handleSize(2)}>
      <Image  src="/img/size.png" width={100} height={100} alt="" />
      <span className={styles.number}>Large</span>
    </div>
           </div>
         </div>
         </div>
         <h3 >Choose additional ingredients</h3>
    <div className="container mt-2">
        
     <div className="row mt-4">
       {pizza.extraOptions.map(option=>( 
       <div className="col-lg-4" key={option._id}>
       <div className={styles.option} >
      <input
        className={styles.checkbox}
        type="checkbox"
        id={option.text}
        name={option.text}
        onChange={(e)=>handleChange(e,option)}
      />
      <label htmlFor="cheese">{option.text}</label>
    </div>
       </div>
       ))}
      
      
  
     </div>
     </div>
     
     <div className="container mt-5">
     <div className="row">
       <div className={styles.option}>
     <h5 htmlFor="quantity" className="">Quantity</h5>
     <input type="number" onChange={(e) => setQuantity(e.target.value)} defaultValue={1} min={1} className={styles.quantity}/>
     </div>   
     </div>
     <div className="row">
        <button type="button" className={styles.btn} onClick={handleClick}>Add to cart</button>
     </div>
     </div>
       </div>
       </div>

     </div>

   
  );
};
export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      pizza: res.data,
    },
  };
};
export default Product;
