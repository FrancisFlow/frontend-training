import Image from "next/image";
const Services = () => {
    return (
        <>
        <section className="services section-padding" id="services" >
            <div className="container">
                <div className="section-title">
                    <span className="title">services</span>
                <h2 className="sub-title">
                    what we do
                </h2>
                </div>
                <div className="grid">
                    <div className="services-item">
                         <div className="img-box">
                            <Image height={250} width={250} src="/images/carpet.jpg" alt="carpet cleaning image"/>
                        </div>
                        <h3>carpet cleaning</h3>

                    </div>
                    <div className="services-item">
                        <div className="img-box">
                            <Image height={250} width={2500} src="/images/window.jpg" alt="window cleaning image"/>
                        </div>
                        <h3>window cleaning</h3>

                    </div>
                    <div className="services-item">
                        <div className="img-box">
                            <Image height={250} width={250} src="/images/bathroom.jpg" alt="bathroom cleaning image" />
                        </div>
                        <h3>bathroom cleaning</h3>

                    </div>

                    <div className="services-item">
                        <div className="img-box">
                            <Image height={250} width={250} src="/images/furniture.jpg" alt="furniture cleaning image" />
                        </div>
                        <h3>furniture cleaning</h3>

                    </div>
            </div>
            </div>
            
        </section>
        
        </>
      );
}
 
export default Services;