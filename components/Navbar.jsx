import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.css'
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useSession, signOut } from "next-auth/client";

const Navbar = () => {
 
  const quantity = useSelector((state) => state.cart.quantity);
  const [session, loading] = useSession()

  if(!session) return  (
   
    <nav className="navbar navbar-expand-md navbar-light" style={{'backgroundColor':'#d1411e'}}>
    <div className="container-fluid">
      <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2"  id="navbarNav">
        <ul className="navbar-nav me-auto" style={{'color':'white'}}>
              <li className="nav-item  px-2">
           <Link href="/" className="nav-link" passHref>
            <a className="nav-link"  style={{'color':'white'}}>HOME</a>     
           </Link>
           </li>
          <li className="nav-item  px-2">
            <a className="nav-link" href="#" style={{'color':'white'}}>MENU</a>
          </li>   
  
          <li className="nav-item  px-2">
            <a className="nav-link" href="#" style={{'color':'white'}}>ABOUT US</a>
          </li>    
        </ul>
      </div>
           <div className="mx-auto order-0">
              <a className="navbar-brand mx-auto" href="#"><img src="/img/logo.png" alt="" width="160px" height="69px" /></a>
              <button className="navbar-toggler" style={{'color':'white'}} type="button" data-bs-toggle="collapse" data-bs-target=".dual-collapse2">
                <span className="navbar-toggler-icon"></span>
              </button>
           </div>
  
           <div  className="collapse navbar-collapse w-100 order-3 dual-collapse2"  id="navbarNav">
              <ul className="navbar-nav ms-auto px-2">
              <li className="nav-item mt-3 px-3">
              <Link href="/cart" className="nav-link" passHref>
              <div className={styles.item}>
              <div className={styles.cart}>
              <img src="/img/cart.png"  alt="" width="30px" height="30px" />
              <div className={styles.counter}>{quantity}</div>
              </div>
              </div>
              </Link>
             </li>
             <li className="nav-item mt-3 px-3">      
  <Link Link href="/login" className="nav-link" passHref>
    <a className="nav-link"  style={{'color':'white'}}>SIGN IN</a>
  </Link>
        </li>
             
              </ul>
          </div>
             
  
      </div>
    </nav>
  );

  return (
   
<nav className="navbar navbar-expand-md navbar-light" style={{'backgroundColor':'#d1411e'}}>
  <div className="container-fluid">
    <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2"  id="navbarNav">
      <ul className="navbar-nav me-auto" style={{'color':'white'}}>
            <li className="nav-item  px-2">
         <Link href="/" className="nav-link" passHref>
          <a className="nav-link"  style={{'color':'white'}}>HOME</a>     
         </Link>
         </li>
        <li className="nav-item  px-2">
          <a className="nav-link" href="#" style={{'color':'white'}}>MENU</a>
        </li>   

        <li className="nav-item  px-2">
          <a className="nav-link" href="#" style={{'color':'white'}}>ABOUT US</a>
        </li> 

      </ul>
    </div>
         <div className="mx-auto order-0">
            <a className="navbar-brand mx-auto" href="#"><img src="/img/logo.png" alt="" width="160px" height="69px" /></a>
            <button className="navbar-toggler" style={{'color':'white'}} type="button" data-bs-toggle="collapse" data-bs-target=".dual-collapse2">
              <span className="navbar-toggler-icon"></span>
            </button>
         </div>

         <div  className="collapse navbar-collapse w-100 order-3 dual-collapse2"  id="navbarNav">
            <ul className="navbar-nav ms-auto px-2">
            <li className="nav-item mt-3 px-3">
            <Link href="/cart" className="nav-link" passHref>
            <div className={styles.item}>
            <div className={styles.cart}>
            <img src="/img/cart.png"  alt="" width="30px" height="30px" />
            <div className={styles.counter}>{quantity}</div>
            </div>
            </div>
            </Link>
           </li>
           <li className="nav-item mt-3 px-3">
             <img src={session.user.image} className="img-fluid rounded-circle" alt="logo" width={35} height={35} />   
           </li>
           <li className="nav-item px-2 mt-3">
             <button className={styles.btn} onClick={() => signOut()}>LOGOUT</button>
           </li>
           
            </ul>
        </div>
           

    </div>
  </nav>
  );
};

export default Navbar;


