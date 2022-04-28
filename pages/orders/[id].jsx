import styles from "../../styles/Order.module.css";
import Image from "next/image";
import axios from "axios";
const Order = ({ order }) => {
  const status =  order.status;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };
  return (
    <div className="container py-5 mt-5 h-100">
      <div className="row">
    
      <div className="col-lg-8 col-md-12 col-sm-12">
      <div className="container">
      <div className="row" >
        <table>
          <tr className="mb-5">
            <th className=" text-center">Order ID</th>
            <th className=" text-center">Customer</th>
            <th className=" text-center">Address</th>
            <th className=" text-center">Total</th>
          </tr>
          <tr className="text-center py-5" >
            <td className="px-lg-4">
            {order._id}
            </td>
            <td className="px-lg-4">
              <span >{order.customer}</span>
            </td>
            <td className="px-lg-4">
              <span >
              {order.address}
              </span>
            </td>
            <td className="px-lg-4">
              <span >${order.total}</span>
            </td>
            
          </tr>
      
        </table>
      </div>
      <div className="row mt-5">
      <table>
        
          <tr className="text-center py-5" >
            <td className="px-lg-4">
            <div className={statusClass(0)}>
            <Image src="/img/paid.png" width={30} height={30} alt="" />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
            </td>
            <td className="px-lg-4">
            <div className={statusClass(1)}>
            <Image src="/img/bake.png" width={30} height={30} alt="" />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
            </td>
            <td className="px-lg-4">
            <div className={statusClass(2)}>
            <Image src="/img/bike.png" width={30} height={30} alt="" />
            <span>On the way</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
            </td>
            <td className="px-lg-4">
            <div className={statusClass(3)}>
            <Image src="/img/delivered.png" width={30} height={30} alt="" />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
            </td>
            
          </tr>
      
        </table>
      
      </div>
      </div>
      </div>
      <div className="col-lg-4 col-md-12 col-sm-12 justify-content-center">
      <div className="px-1 py-4 text-center" style={{'backgroundColor':'#333', 'color':'white','borderRadius':'8px'}}>
       
          <h2 className="mb-3">CART TOTAL</h2>
          <div >
            <b >Subtotal:</b>${order.total}
          </div>
          <div >
            <b >Discount:</b>$0.00
          </div>
          <div >
            <b >Total:</b>${order.total}
          </div>
         
        </div>
      
      </div>
    </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
  return {
    props: { order: res.data },
  };
};
export default Order;
