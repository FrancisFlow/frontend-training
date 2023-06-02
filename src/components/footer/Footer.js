import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    return (  
        <>
        <footer className="footer" >
            <div className="container">
                <h3 className="footer-title">
                    Follow us
                </h3>
                <div className="social-links">
                    <a href="facebook.com"><FontAwesomeIcon icon={faFacebook}/> </a>
                    <a href="twitter.com"><FontAwesomeIcon icon={faTwitter}/></a>
                    <a href="instagram.com"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href="youtube.com"><FontAwesomeIcon icon={faYoutube}/></a>

                </div>
            </div>
        </footer>
        </>
    );
}
 
export default Footer;