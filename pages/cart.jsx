import styles from "../styles/Cart.module.css";
import 'bootstrap/dist/css/bootstrap.css'
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { reset } from "../redux/cartSlice";
import OrderDetail from "../components/OrderDetail";

const Cart = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const cart = useSelector((state)=>state.cart)
  const [cash, setCash] = useState(false);
  const amount = cart.total;
  const router = useRouter();

  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
      if (res.status === 201) {
        dispatch(reset());
        router.push(`/orders/${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };


  
  return (
    <div className="container py-5 mt-5 h-100">
      <div className="row">
    
      <div className="col-lg-8 col-md-12 col-sm-12">
      <div >
        <table>
          <tr className="mb-5">
            <th className=" text-center">Product</th>
            <th className=" text-center">Name</th>
            <th className=" text-center">Extras</th>
            <th className=" text-center">Price</th>
            <th className=" text-center">Quantity</th>
            <th className=" text-center">Total</th>
          </tr>
          {cart.products.map(product=>(
          <tr className="text-center py-5" key={product._id}>
            <td className="px-lg-4">
              <div >
              <img
                  src={product.img}
                  className="w-75 py-3 border-0"
                  alt=""
            
                />
              </div>
            </td>
            <td className="px-lg-4">
              <span >{product.title}</span>
            </td>
            <td className="px-lg-4">
              <span >
                {product.extras.map((extra) => (
                      <span key={extra._id}>{extra.text}, </span>
                    ))}
              </span>
            </td>
            <td className="px-lg-4">
              <span >{product.price}</span>
            </td>
            <td>
              <span >{product.quantity}</span>
            </td>
            <td className="px-lg-4">
              <span>${product.price*product.quantity}</span>
            </td>
          </tr>
          ))}
        </table>
      </div>
      </div>
      <div className="col-lg-4 col-md-12 col-sm-12 justify-content-center">
      <div className="px-1 py-4 text-center" style={{'backgroundColor':'#333', 'color':'white','borderRadius':'8px'}}>
       
          <h2 className="mb-3">CART TOTAL</h2>
          <div >
            <b >Subtotal:</b>${cart.total}
          </div>
          <div >
            <b >Discount:</b>$0.00
          </div>
          <div >
            <b >Total:</b>${cart.total}
          </div>
         
          <div >
          {open ? (
            <div className={styles.paymentMethods}>
              <button
                className={styles.payButton}
                onClick={() => setCash(true)}
              >
                CASH ON DELIVERY
              </button>
              
            </div>
          ) : (
            <button onClick={() => setOpen(true)} className={styles.btn}>
              CHECKOUT NOW!
            </button>
          )}
         
          </div>
        </div>
      
      </div>
    </div>
    {cash && <OrderDetail total={cart.total} createOrder={createOrder} />}
    </div>
  );
};

export default Cart;
