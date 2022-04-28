import 'bootstrap/dist/css/bootstrap.css'
import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"


const PizzaList = ({pizzaList}) => {
  return (
    <div className="container text-center py-5">
      
      <div className="row justify-content-center">
      <h1 className="text-center py-2">THE BEST PIZZA IN TOWN</h1>
      <p className="text-center py-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          {pizzaList.map((pizza)=>(
            <div className="col-lg-3 col-md-6 col-sm-12 my-3"><PizzaCard key={pizza._id} pizza={pizza}/></div>
          ))}
          
          
        </div>
      </div>
    </div>
  );
};

export default PizzaList;
