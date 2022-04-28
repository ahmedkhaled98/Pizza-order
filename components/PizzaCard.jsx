import 'bootstrap/dist/css/bootstrap.css'
import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import Link from "next/link"
const PizzaCard = ({pizza}) => {
  return (
    <div className="container">
    <div className="card" width="500" style={{border:'none'}}>
   <Link className={styles.point} href={`/product/${pizza._id}`}  passHref >   
  <Image src={pizza.img} alt="" width={'400px'} height={'400px'} className="card-img-top"/>
  </Link>
  <div className="card-body">
    <h1 className="card-title" style={{fontSize:'25px'}}>{pizza.title}</h1>
    <span className="card-text">${pizza.prices[0]}</span>
    <p className="card-text">{pizza.desc}</p>
    <a href="#" className="btn" style={{backgroundColor:'#d1411e', color:'white'}} >Order Now</a>
  </div>
</div>
</div>
  );
  
};

export default PizzaCard;
