import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const Pricing = () => {
    return (  
        <>
        <section className="pricing section-padding">
            <div className="container">
                <div className="section-title">
                    <span className="title">pricing</span>
                    <h2 className="sub-title" >our pricing plans</h2>
                </div>

                <div className="grid">
                    <div className="pricing-item">
                        <h2 className="plan-title" >Basic</h2>
                        <div className="round-price">
                            <h2>$299</h2>
                        </div>
                        <div className="features">
                        <ul className="flex flex-col items-start" >
                           <li> <FontAwesomeIcon icon={faCheck} className="h-4 w-4 inline-block" /> Window Cleaning</li>
                            <li><FontAwesomeIcon icon={faCheck} className="h-4 w-4 inline-block" /> Carpet Cleaning</li>
                            <li><FontAwesomeIcon icon={faXmark} className="h-4 w-4 inline-block" /> Furniture Cleaning</li>
                            <li><FontAwesomeIcon icon={faXmark} className="h-4 w-4 inline-block" /> Car Cleaning</li>
                            <li><FontAwesomeIcon icon={faXmark} className="h-4 w-4 inline-block" /> Bathroom Cleaning</li>
                        </ul>

                        </div>
                      
                        <button className="btn "  type="button">Get Started</button>
                    </div>
                    <div className="pricing-item">
                        <h2 className="plan-title" >Standard</h2>
                        <div className="round-price">
                            <h2>$499</h2>
                        </div>
                        <ul className="flex flex-col items-start" >
                           <li> <FontAwesomeIcon icon={faCheck} className="h-4 w-4 inline-block" /> Window Cleaning</li>
                           <li> <FontAwesomeIcon icon={faCheck} className="h-4 w-4 inline-block"/> Carpet Cleaning </li>
                            <li><FontAwesomeIcon icon={faCheck} className="h-4 w-4 inline-block" /> Furniture Cleaning</li>
                            <li><FontAwesomeIcon icon={faXmark} className="h-4 w-4 inline-block" /> Car Cleaning</li>
                            <li><FontAwesomeIcon icon={faXmark} className="h-4 w-4 inline-block" /> Bathroom Cleaning</li>
                        </ul>
                        <button  className="btn"type="button">Get Started</button>
                    </div>
                    <div className="pricing-item">
                        <h2 className="plan-title" >Premium</h2>
                        <div className="round-price">
                            <h2>$899</h2>
                        </div>
                        <ul className="flex flex-col items-start" >
                          <li> <FontAwesomeIcon icon={faCheck} className="h-4 w-4 inline-block" />  Window Cleaning</li>
                            <li><FontAwesomeIcon icon={faCheck} className="h-4 w-4 inline-block" /> Carpet Cleaning </li>
                            <li><FontAwesomeIcon icon={faCheck} className="h-4 w-4 inline-block" /> Furniture Cleaning</li>
                            <li><FontAwesomeIcon icon={faCheck} className="h-4 w-4 inline-block" /> Car Cleaning</li>
                           <li><FontAwesomeIcon icon={faCheck} className="h-4 w-4 inline-block" /> Bathroom Cleaning</li>
                        </ul>
                        <button className="btn" type="button">Get Started</button>

                    </div>



                </div>
            </div>
        </section>
        </>
    );
}
 
export default Pricing;