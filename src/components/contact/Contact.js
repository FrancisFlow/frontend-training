import { faEnvelope, faMapMarker, faMapMarkerAlt, faPhoneFlip, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
    return ( 
        <>
        <section className="contact section-padding" id="contact">
            <div className="container">
            <div className="section-title">
                <span className="title" > contact us</span>
                <h2 className="sub-title">have a question?</h2>
            </div>
            <div className="grid contact-grid">
                <div className="contact-info">
                    <div className="contact-into-item">
                    <FontAwesomeIcon icon={faMapMarkerAlt}/>  <h3> Address </h3>
                        <p> Block-A Sec-75, Sarita Vihar, New Delhi </p>
                    </div>
                    <div className="contact-into-item">
                    <FontAwesomeIcon icon={faPhoneFlip}/> <h3>  Call us </h3>
                        <p> 919854293***</p>
                    </div>
                    <div className="contact-into-item">
                    <FontAwesomeIcon icon={faEnvelope}/> <h3>  Email us </h3>
                        <p>info@gmail.com</p>
                    </div>
                </div>

                <div className="contact-form">
                    <form>
                        <div className="input-box">
                          <input type="text" name="" placeholder="Name" className="input-control" required />
                        </div>
                        <div className="input-box">
                          <input type="text" name="" placeholder="Email" className="input-control" required />
                        </div>
                         <div className="input-box">
                          <input type="text" name="" placeholder="Phone number" className="input-control" required />
                        </div>
                         <div className="input-box">
                            <textarea placeholder="Message" className="input-control" required />

                        </div>
                        <div className="btn-wrap">
                            <button type="submit" className="btn" >
                                send message
                            </button>
                        </div>
                    </form>
                </div>

            </div>

            </div>
            
        </section>
        
        </>
     );
}
 
export default Contact;