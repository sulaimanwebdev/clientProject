import React, { useState } from 'react'
import '../css/contact.css';
const Contact = () => {
    
    return (
        <>
        <div className="parent contactP">
           
        <img src="/images/plusCircle.png" className="plusCircle" alt="" />

        <div className="child contactC">

<div className="contactT">
    <h1>Contact Us</h1>
    <p>From time to time, we would like to contact you about our products and services</p>
</div>


<div className="contactImg">
    <img src="/images/contactImages/main.svg" alt="" />
</div>



        </div>
      </div>






<div className="parent iconFlexP">


    <div className="child iconFlexC">


<div className="iconSec1">
    <img src="/images/contactImages/icon1.svg" alt="" />
    <h3>Email</h3>
    <hr />
    <p>info@konabos.com</p>
</div>




<div className="iconSec1">
    <img src="/images/contactImages/icon2.svg" alt="" />
    <h3>Address</h3>
    <hr />
    <p>Temecula, California, USA. Ottawa, Canada. Toronto, Canada. Auckland, New Zealand.</p>
</div>





<div className="iconSec1">
    <img src="/images/contactImages/icon3.svg" alt="" />
    <h3>Phone</h3>
    <hr />
    <p>+1-866-577-6310</p>
</div>





    </div>


     <img src="/images/contactImages/border.png" alt="" className="a"/>
        <img src="/images/contactImages/background.png" alt="" className="b"/>
</div>











<div className="parent ContactFormP">
    <div className="child ContactFormC">
    <div className="formImg"><img src="/images/contactImages/map.png" alt="" /></div>
    <form>

        <div className="formSec1">
           
            <input type="text"  name="First Name"  autoComplete="off" placeholder="First Name"/>
            <label>First Name</label>
        </div>

        <div className="formSec1">
         
            <input type="text"  name="Last Name"  autoComplete="off" placeholder="Last Name"/>
            <label>Last Name</label>
        </div>





        <div className="formSec1">
            <input type="email"  name="Email"  autoComplete="off" placeholder="Enter Your Email"/>
            <label>Email Address</label>

        </div>








        <div className="formSec1">
          <select name="" id="" >
              <option value="" disabled   selected >Please Select</option>
              <option value="Your Option">Your Option1</option>
              <option value="Your Option">Your Option2</option>
              <option value="Your Option">Your Option2</option>


          </select>
          <label>I'm Intrested in</label>

        </div>







        <div className="formSec1 ttttt">
         
         <textarea name="message" id="" placeholder="Your Message"></textarea>
         <label>Enter Your Message Here...</label>
     </div>


<div className="checkboxCont">
    <input type="checkbox" />
    <p>I agree to recevie other communication from Konabos Consulting.</p>
</div>


<button>SUBMIT <i class="fas fa-paper-plane"></i></button>





    </form>
    </div>
</div>




</>
    )
}

export default Contact
