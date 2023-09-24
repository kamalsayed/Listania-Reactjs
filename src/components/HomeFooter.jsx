import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faL} from "@fortawesome/free-solid-svg-icons";
import {faYoutube ,faFacebook , faSquareInstagram , faTwitter} from "@fortawesome/free-brands-svg-icons"
const HomeFooter = ()=>{
    return (
        <footer>
            <hr />
            <div className="grid-footer">
                <div className="grid-f-item f-item-1">
                <h2> <FontAwesomeIcon icon={faL} style={{color: "#1f64db",marginRight:2}} />istania</h2>
                <p>Join millions of people who organize work and life with Listania.
                </p>
                </div>
                <div className="grid-f-item">
                <h1>Features</h1>
                <p className="foot-t"><a href="#">How It Works</a></p>
                <p className="foot-t"><a href="#">For Teams</a></p>
               <p className="foot-t"><a href="#">Pricing </a></p>
                <p className="foot-t"><a href="#">Templates</a></p>
                </div>

                <div className="grid-f-item">
                <h1>Resources</h1>
                <p className="foot-t"><a href="#">Download Apps</a></p>
                <p className="foot-t"><a href="#">Help Center</a></p>
                <p className="foot-t"> <a href="#">Productivity Methods</a></p>
                <p className="foot-t"><a href="#">Integrations</a></p>
                <p className="foot-t"><a href="#">Channel Partners</a></p>
                <p className="foot-t"><a href="#">Developer API</a></p>
                <p className="foot-t"><a href="#">Status</a></p>
                </div>
                <div className="grid-f-item">
                <h1>Company</h1>
                <p className="foot-t"><a href="#">About Us</a></p>
                <p className="foot-t"><a href="#">Careers</a></p>
                <p className="foot-t"><a href="#">Inspiration Hub</a></p>
                <p className="foot-t"><a href="#">Press</a></p>
                <p className="foot-t"><a href="#">Twist</a></p>
                </div>

                <div className="grid-f-item icons">
                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="#"><FontAwesomeIcon icon={faSquareInstagram} /></a>   
                </div>

                <div className="grid-f-item f-item-2">
                <p className="foot-tt" ><a href="#">Security</a></p>
                <p  className="foot-tt"><a href="#">Privacy</a></p>
                <p id="foot-tt" ><a href="#">Terms</a></p>
                <p id="inc" > &copy; Listana Inc. </p> 
                </div>    

            </div>

            </footer>
        


    );

}
export default HomeFooter;