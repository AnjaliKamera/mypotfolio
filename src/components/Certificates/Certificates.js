import './Certificates.css';
import ss1 from '../../cert1.jpg';
import ss2 from '../../cert2.jpg';
import ss3 from '../../cert3.jpg';
import ss4 from '../../cert4.jpg';
function Certificates()
{
    return(
        <div id="cert">
        <div> 
        <h2> My Certificates</h2>
        </div>
        <div className="photo">
        <img src={ss1} alt="first certificate" height="250px" width="250px"/>
        <img src={ss2} alt="first certificate"  height="250px" width="250px"/>
        <img src={ss3} alt="first certificate" height="250px" width="250px"/>
        <img src={ss4} alt="first certificate" height="250px" width="250px"/>
        </div>
        <div className="text">
            <p>Certificate of Engineering Service</p>
            <p>Certificate of Civil Engineering</p>
            <p>Certificate of Engineering Degree</p>
            <p>Certificate of Archievement</p>
        </div>

        </div>

    );
}
export default Certificates;
