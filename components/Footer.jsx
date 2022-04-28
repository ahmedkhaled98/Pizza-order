import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.css'
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (

    <div className="container-fluid px-0 overflow-hidden" style={{'backgroundColor':'#222', 'color':'whitesmoke'}}>
      <div className="row ml-sm-3">
        <div className="col-lg-4">
          <img src="/img/bg.png" className="w-100 h-100 img-responsive"  alt="" />
          </div>
        <div className="col-lg-3 py-5 ml-sm-3">
          <h2 >
             OH YES, WE DID.THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
         </div>
        <div className="col-lg-3 py-5">
        <h4 style={{'color':'#b7903c'}}>FIND OUR RESTAURANTS</h4>
       <p>
            1654 R. Don Road #304.
            <br /> NewYork, 85022
             <br /> (602) 867-1010
           </p>
          <p >
             2356 K. Laquie Rd #235.
             <br /> NewYork, 85022
           <br /> (602) 867-1011
           </p>
           <p >
             1614 E. Erwin St #104.
             <br /> NewYork, 85022
            <br /> (602) 867-1012
           </p>
          <p >
             1614 W. Caroll St #125.
             <br /> NewYork, 85022
            <br /> (602) 867-1013
          </p>
        </div>
        <div className="col-lg-2 py-5 ">
        <h4 style={{'color':'#b7903c'}}>WORKING HOURS</h4>
          <p >
           MONDAY UNTIL FRIDAY
           <br /> 9:00 – 22:00
          </p>
         <p >
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
         </p>
        </div>
      </div>
    </div>
    // <div className={styles.container}>
    //   <div className={styles.item}>
    //     <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
    //   </div>
    //   <div className={styles.item}>
    //     <div className={styles.card}>
    //       <h2 className={styles.motto}>
    //         OH YES, WE DID.THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.
    //       </h2>
    //     </div>
    //     <div className={styles.card}>
    //       <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
    //       <p className={styles.text}>
    //         1654 R. Don Road #304.
    //         <br /> NewYork, 85022
    //         <br /> (602) 867-1010
    //       </p>
    //       <p className={styles.text}>
    //         2356 K. Laquie Rd #235.
    //         <br /> NewYork, 85022
    //         <br /> (602) 867-1011
    //       </p>
    //       <p className={styles.text}>
    //         1614 E. Erwin St #104.
    //         <br /> NewYork, 85022
    //         <br /> (602) 867-1012
    //       </p>
    //       <p className={styles.text}>
    //         1614 W. Caroll St #125.
    //         <br /> NewYork, 85022
    //         <br /> (602) 867-1013
    //       </p>
    //     </div>
    //     <div className={styles.card}>
    //       <h1 className={styles.title}>WORKING HOURS</h1>
    //       <p className={styles.text}>
    //         MONDAY UNTIL FRIDAY
    //         <br /> 9:00 – 22:00
    //       </p>
    //       <p className={styles.text}>
    //         SATURDAY - SUNDAY
    //         <br /> 12:00 – 24:00
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Footer;
