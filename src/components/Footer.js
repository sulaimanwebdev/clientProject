import React from 'react'
import '../css/footer.css';
const Footer = () => {
    return (
       <div className="parent footerP">
           <div className="child footerC">
               <div className="newsletter">
                 <div className="title">Subscribe to Newsletter</div>
                     <form>
                 <i class="fal fa-envelope"></i>
                     <input type="text" name="search" placeholder="Enter Email address"/>
                     <button type="submit">Submit</button>
                     </form>

               </div>




         <footer>
             <div className="aSec">
               <img src="/images/logo.png" alt="" />
               <div className="social">
                   <a href="#"><i class="fab fa-facebook-f"></i></a>
                   <a href="#"><i class="fab fa-linkedin-in"></i></a>
                   <a href="#"><i class="fab fa-youtube"></i></a>
                   <a href="#"><i class="fab fa-twitter"></i></a>
                   <a href="#"><i class="fab fa-github"></i></a>
               </div>
             </div>



<div className="bSec">
    <div className="linkTitle">Quick Links <hr /></div>
    <div className="links">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Who We Are</a>
        <a href="#">News</a>
        <a href="#">Blog</a>
        <a href="#">Partners</a>

    </div>
</div>






<div className="bSec">
    <div className="linkTitle">Our Services <hr /></div>
    <div className="links">
        <a href="#">Sitescore Implementation & Optimization Services</a>
        <a href="#">Digital Experience Strategy And Management</a>
        <a href="#">Composable DXP Design & Implementation Services</a>
     

    </div>
</div>





<div className="bSec">
    <div className="linkTitle">Contact Us <hr /></div>
    <div className="links">
      <div className="a1">
          <div className="a1Icon"><i class="fal fa-map-marker-alt"></i></div>
          <div className="hmmmm"><span>Locations:</span> <br /> <span className="loca">Temecula, California, USA. Ottawa, Canada. Toronto, Canada. Auckland, New Zealand.</span></div>
      </div>


      <div className="a1 llll">
          <div className="a1Icon"><i class="fal fa-phone-alt"></i></div>
          <div className="hmmmm">+1-866-577-6310</div>
      </div>

      <div className="a1 llll">
          <div className="a1Icon"><i class="fal fa-envelope"></i></div>
          <div className="hmmmm">info@konabos.com</div>
      </div>


     

    </div>
</div>






         </footer>











<div className="lastFo">
    <p>© 2021 Konabos Consulting Inc. All Rights Reserved. </p>
    <div>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>

    </div>
</div>


           </div>
       </div>
    )
}

export default Footer
