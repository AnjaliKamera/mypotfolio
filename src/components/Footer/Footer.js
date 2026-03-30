import './Footer.css';
function Footer(){
    return(
        <div id='foot'>
            <div className='info'>
           <p>Anjali Kamera Portfolio</p>
           <p>Thank you for visiting my Portfolio Website</p>
           <p>Email: anjali123@gmail.com</p>
           <p>@ Anjali.All Rights Reserved.</p>
           </div>
           <div className='quick'>
            <p>Quick Links</p>
            <a href='#nav'>Header</a><br/>
            <a href='#about-cont'>About me</a><br/>
            <a href='#div1'>Skills</a><br/>
            <a href='#cert'>Certificates</a>
           </div>
        </div>
    );
}
export default Footer;