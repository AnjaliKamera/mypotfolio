import './About.css';
import annaya from '../../annaya.jpg';
function About(){
    return(
        <div> 
            <h2 style={{color:"brown", fontSize:"24px",textAlign:"center"}}>About Me</h2>
            <div id="about-cont">
                <div className="helo">
                    <img src={annaya} className="helo" width="250px" height="250px"/>
                </div>
                <div className="div2">
                    <p>
                        My self Ganesh, I have done degree in Data Science from Kakathiya University Warangal. I have a deep intrest in Car Software Development,So now I am currently working as a Backend Developer at vetrotech pvt.ltd.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default About;