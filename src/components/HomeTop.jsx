import React from "react";
import './Home.css';
import { ActivePage } from "../App";
import ToDoImage from '../assets/3961975.jpg';
import img1 from '../assets/2920019.jpg';
import img2 from '../assets/6206973.jpg';
import img3 from '../assets/7521454.jpg';
import extention from '../assets/extention.jpg';
import features from '../assets/features.jpg';
import galery from '../assets/galery.jpg';
import inspiration from '../assets/inspiration.jpg';
import quiz from '../assets/quiz.jpg';
import download from '../assets/download.jpg';
import pro from '../assets/prousers.jpg';
import taskcomplete from '../assets/Checklist.jpg';
import worldwide from '../assets/worldwide.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMicrosoft ,faAmazon , faApple ,faYelp   } from "@fortawesome/free-brands-svg-icons";
import {faReadme } from "@fortawesome/free-brands-svg-icons";
import {faCircleDown} from "@fortawesome/free-solid-svg-icons";
import NoteItem from "./NoteItem";
import MarqueeItem from "./MarqueeItem";
import HomeFooter from "./HomeFooter";
const HomeTop = ()=>{
    const {activePage , setActivePage} = React.useContext(ActivePage);
    return (
        <>
        <div className="grid-container">

            <div className="grid-item item-1">
                <h1>Organize your work and life, finally.</h1>
                <p>Become focused, organized, and calm with Listania. The world’s #1 task manager and to-do list app.</p>
                <button className="btn-home" onClick={()=>{
                    setActivePage('To-Do');
                }}>Start For Free</button>
            </div>
            <div className="grid-item item-5"><img src={ToDoImage} alt="todoimage" className="to-do-img"/>
                <p>30 million+ people and teams trust their sanity and productivity to Listania</p>
                <p className="brands">  <FontAwesomeIcon icon={faMicrosoft} style={{marginInline:5}}/>Microsoft    <FontAwesomeIcon icon={faAmazon} style={{marginInline:5}} />Amazon  <FontAwesomeIcon icon={faApple} style={{marginInline:5}} />Apple  <FontAwesomeIcon icon={faYelp} style={{marginInline:5}}/>yelp
                 </p>
            </div>
            <div className="grid-item item-2">
                <NoteItem noteq ='Clear your mind' noteh ='The fastest way to get tasks out of your head.' notec = 'Type just about anything into the task field and Todoist’s one-of-its-kind natural language recognition will instantly fill your to-do list.' />
                <NoteItem noteq ='Focus on what’s important' noteh ='Reach that mental clarity you’ve been longing for.' notec = 'Your tasks are automatically sorted into Today, Upcoming, and custom Filter views to help you prioritize your most important work.' />
                <NoteItem noteq ='Get it all done' noteh ='Where work and personal tasks can finally coexist.' notec = 'Tons of tasks, just one app. With workspaces, your personal, work, and team tasks can all live harmoniously under the same roof. (Sigh of relief).' />
                </div>
            <div className="grid-item  item-3">
            <img src={img1} alt="todoimage" className="to-do-img-list"/>
            <img src={img2} alt="todoimage" className="to-do-img-list"/>
            <img src={img3} alt="todoimage" className="to-do-img-list"/>
            </div>
            <div className="grid-item item-4">
                <div className="small-grid">
                    
                    <div className="small-grid-item itm-1">
                    <h1>Explore all Listania has to offer</h1>
                    </div>
                    <a className="offers" href="#">
                    <div className="small-grid-item itm-2">
                    <img src={features} alt="features" className="small-images"/>
                    <p>Features</p>
                    </div>
                    </a>
                    <a className="offers" href="#">
                    <div className="small-grid-item itm-3">
                    <img src={galery} alt="template-galery" className="small-images"/>
                    <p>Template gallery</p>
                    </div>
                    </a>

                    <a className="offers" href="#">
                    <div className="small-grid-item itm-4">
                    <img src={quiz} alt="quiz" className="small-images"/>
                    <p>Productivity quiz</p>
                    </div>
                    </a>
                    <a className="offers" href="#">
                    <div className="small-grid-item itm-5">
                    <img src={extention} alt="extention-galery" className="small-images"/>
                    <p>Extension gallery</p>
                    </div>
                    </a>
                    <a className="offers" href="#">
                    <div className="small-grid-item itm-6">
                    <img src={inspiration} alt="inspiration" className="small-images"/>
                    <p>Inspiration Hub</p>
                    </div>  
                    </a>
                </div>
                
                </div>
            <div className="grid-item item-6">

                <div className="note-item" style={{paddingTop:100}}>
                <h4 className="note-quote">In it for the long haul</h4>
                <h2 className="note-head">A task manager you can trust for life</h2>
                <p className="note-core">We’ve been building Listania for 16 years and 238 days. Rest assured that we’ll never sell out to the highest bidder.</p>
                <button className="btn-read"><FontAwesomeIcon icon={faReadme} /> Read about our long-term mission</button>
                </div>
                
                </div>
            <div className="grid-item item-7">
               <div className="marquee">
                    <MarqueeItem img ={pro} alt ='pro-user' h1='1 Million+' h2='Pro Users' />
                    <MarqueeItem img ={taskcomplete} alt ='completed-task' h1='2 Billion+' h2='Completed Task' />
                    <MarqueeItem img ={worldwide} alt ='worldwide' h1='160+ Countries' h2='Worldwide' />
                    <MarqueeItem img ={download} alt ='downloads' h1='30+ Million' h2='app downloads' />
                   
                </div>

            </div>
            <div className="grid-item item-8">
            
                    <h1  id="foot-h1" style={{fontSize:40,letterSpacing:1,margin:40}}>Gain calmness and clarity with the world’s most beloved productivity app</h1>
                    <p>
                    337,000+ ★★★★★ reviews on Google Play and App Store
                    </p>
                    <button className="btn-home-2" onClick={()=>{
                    setActivePage('To-Do');
                }}>Start For Free</button>
                <br />
                <button className="btn-down" > <FontAwesomeIcon icon={faCircleDown} /> Download Apps</button>
                
            </div>
            <div className="item-9"> 
            <HomeFooter />
            </div>
        </div>
       
        </>
    );

}
export default HomeTop;