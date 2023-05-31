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
                        <ul className="" >
                           <li>✓ Window Cleaning</li>
                            <li>✓ Carpet Cleaning </li>
                            <li>✗ Furniture Cleaning</li>
                            <li>✗ Car Cleaning</li>
                            <li>✗ Bathroom Cleaning</li>
                        </ul>

                        </div>
                      
                        <button type="button">Get Started</button>
                    </div>
                    <div className="pricing-item">
                        <h2 className="plan-title" >Standard</h2>
                        <div className="round-price">
                            <h2>$499</h2>
                        </div>
                        <ul>
                           <li>✓Window Cleaning</li>
                           <li>✓Carpet Cleaning </li>
                            <li>✓Furniture Cleaning</li>
                            <li>✗Car Cleaning</li>
                            <li>✗Bathroom Cleaning</li>
                        </ul>
                        <button type="button">Get Started</button>
                    </div>
                    <div className="pricing-item">
                        <h2 className="plan-title" >Premium</h2>
                        <div className="round-price">
                            <h2>$899</h2>
                        </div>
                        <ul>
                          <li> ✓ Window Cleaning</li>
                            <li>✓Carpet Cleaning </li>
                            <li>✓Furniture Cleaning</li>
                            <li>✓Car Cleaning</li>
                           <li>✓Bathroom Cleaning</li>
                        </ul>
                        <button type="button">Get Started</button>

                    </div>



                </div>
            </div>
        </section>
        </>
    );
}
 
export default Pricing;