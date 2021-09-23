import React, { useState } from 'react'
import '../css/home.css';
import { Carousel } from '@trendyol-js/react-carousel';
const Home = () => {


    const [tab, setTab] = useState(1);

    const setToggle = (index) =>{
        setTab(index)
    }
    
    return (
        <>
        <div className="parent a-secP">
       <img src="/images/plusCircle.png" alt="" className="circle1"/>
       <img src="/images/plusCircle.png" alt="" className="circle2"/>

            <div className="a-secC child">
             <div className="aSecTxt">
                  <h1>Content that Fits every <span>Experience</span></h1>
                  <p>We've got you covered with everything from strategy to implementation and training.</p>
                  <div className="asecLinks">
                      <a href="#">GET STARTED FOR FREE</a>
                      <a href="#"><img src="/images/play.png" alt="" /> WATCH VIDEO</a>
                  </div>
             </div>

<div className="asecImages">
 <img src="/images/header.png" alt="" className="mainImage"/>
 <img src="/images/whiteHorse.png" alt="" className="whiteHorse"/>
 <img src="/images/algolia.png" alt="" />
 <img src="/images/circle.png" alt="" />
 <img src="/images/triangle.png" alt="" />


</div>


            </div>




        </div>



<div className="parent caresoulP">

    <div className="child caresoulC">


    <Carousel show={4} slide={3} swiping={true} className="logocaresou">
   <div className="caresoulLogo"><img src="/images/dummyLogo.png" alt="" /></div>
   <div className="caresoulLogo"><img src="/images/dummyLogo.png" alt="" /></div>
   <div className="caresoulLogo"><img src="/images/dummyLogo.png" alt="" /></div>
   <div className="caresoulLogo"><img src="/images/dummyLogo.png" alt="" /></div>
   <div className="caresoulLogo"><img src="/images/dummyLogo.png" alt="" /></div>
   <div className="caresoulLogo"><img src="/images/dummyLogo.png" alt="" /></div>
   <div className="caresoulLogo"><img src="/images/dummyLogo.png" alt="" /></div>
   <div className="caresoulLogo"><img src="/images/dummyLogo.png" alt="" /></div>
   <div className="caresoulLogo"><img src="/images/dummyLogo.png" alt="" /></div>
   <div className="caresoulLogo"><img src="/images/dummyLogo.png" alt="" /></div>
   <div className="caresoulLogo"><img src="/images/dummyLogo.png" alt="" /></div>
   <div className="caresoulLogo"><img src="/images/dummyLogo.png" alt="" /></div>
   <div className="caresoulLogo"><img src="/images/dummyLogo.png" alt="" /></div>
   <div className="caresoulLogo"><img src="/images/dummyLogo.png" alt="" /></div>
   <div className="caresoulLogo"><img src="/images/dummyLogo.png" alt="" /></div>
   <div className="caresoulLogo"><img src="/images/dummyLogo.png" alt="" /></div>
   <div className="caresoulLogo"><img src="/images/dummyLogo.png" alt="" /></div>
   <div className="caresoulLogo"><img src="/images/dummyLogo.png" alt="" /></div>
   <div className="caresoulLogo"><img src="/images/dummyLogo.png" alt="" /></div>
   <div className="caresoulLogo"><img src="/images/dummyLogo.png" alt="" /></div>
  

  


   
    
</Carousel>
    </div>
</div>




<div className="parent circularPartP">
    <div className="child circularPartC">
            <div className="circTitle">
                <h1>Services for your CMS Needs</h1>
                <p>Whether you need a litle help or a team that can outsource your entire DCX program., to we'ev got you covered with everything from strategy to implementation and training.</p>
            </div>



<div className="realCircularFlex">
    <div className="circularImage">
        <img src="/images/realCircleHorse.png" alt="" />
    </div>


    <div className="circularText">
        <div className="circT1">
        <div className="iconCirc iconCirc1"><img src="/images/icon1.png" alt="" /></div>
       <div className="iii iii1">
       <h1>Sitecore Implementation & Optimization Services</h1>
        <p>Work with our Sitecore specialist to activate solutions leveraging the power for Sitecore’s entire family</p>
      <a href="#">LEARN MORE <i class="fal fa-arrow-right"></i></a>
       </div>
        </div>







        <div className="circT1">
        <div className="iconCirc iconCirc2"><img src="/images/icon2.png" alt="" /></div>
       <div className="iii iii2">
       <h1>Composable DXP Design And Implementation Services</h1>
        <p>Konabos leads the way, helping customers design and implement best-of-breed Composable Jamstack</p>
      <a href="#">LEARN MORE <i class="fal fa-arrow-right"></i></a>
       </div>
        </div>









        <div className="circT1">
        <div className="iconCirc iconCirc3"><img src="/images/icon3.png" alt="" /></div>
       <div className="iii iii3">
       <h1>Sitecore Implementation & Optimization Services</h1>
        <p>Work with our Sitecore specialist to activate solutions leveraging the power for Sitecore’s entire family</p>
      <a href="#">LEARN MORE <i class="fal fa-arrow-right"></i></a>
       </div>
        </div>




    </div>
    
</div>


    </div>
   <img src="/images/border.png" alt="" className="jjjj"/>
</div>








<div className="parent simpleP">
    <div className="child simpleC">

          <div className="simpleText">
              <h1>Some Words About Konabos</h1>
              <p>Experience matters and our experts have a proven track record of delivering results as software consultants, engineers, architects and marketers. We have decades of combined experience managing IT projects, and we have helped countless entrepreneurs, corporate executives, and IT managers adapt the Sitecore platform to their business needs.</p>
          </div>

          <div className="simpleImg">
              <img src="/images/simple.png" alt="" />
          </div>


    </div>

    <img src="/images/border2.png" alt="" className="jjjj"/>
</div>










<div className="parent">

    <div className="child blogS">

 <div className="circTitle">
                <h1>Latest From The Blog</h1>
                <p>Each with decades of experience architecting and building CX solutions no challenge is too big and no detail too small.</p>
            </div>



            <div className="blogGrid">


        <div className="blogGrid1">
            <div className="blogIcon"><img src="/images/iconBlog.png" alt="" /></div>
            <div className="date">2021-08-09  |  Kanabos</div>
            <h1>Thats Five Super Simple Ways to Optimize Your YouTube Videos</h1>
            <p>Let’s face it, SEO is a game that we all need to play if we want to get our site ranking in search engine results, and it’s not enough to write the best content in the world</p>
      <a href="#">LEARN MORE <i class="fal fa-arrow-right"></i></a>

        </div>






        <div className="blogGrid1">
            <div className="blogIcon"><img src="/images/iconBlog.png" alt="" /></div>
            <div className="date">2021-08-09  |  Kanabos</div>
            <h1>10 Ways to Create a Customer Experience Strategy</h1>
            <p>The digital world has transformed the way we do business, and competition is fierce which is why companies must put a strong emphasis on creating a superior</p>
      <a href="#">LEARN MORE <i class="fal fa-arrow-right"></i></a>

        </div>







        <div className="blogGrid1">
            <div className="blogIcon"><img src="/images/iconBlog.png" alt="" /></div>
            <div className="date">2021-08-09  |  Kanabos</div>
            <h1>Access Context Item on Sitecore Forms using a Value Provider </h1>
            <p>There are many instances where we might require knowing which Sitecore page a particular Sitecore form was being submitted from. This article goes over how we can </p>
      <a href="#">LEARN MORE <i class="fal fa-arrow-right"></i></a>

        </div>











            </div>

    </div>
    <img src="/images/speaker.png" alt=""  className="speaker"/>
    <img src="/images/border.png" alt="" className="jjjj"/>
</div>








<div className="parent testimonailP">
    <div className="child testimonailC">


    <div className="circTitle">
                <h1>Customer Testimonials</h1>
            </div>



<div className="testimonials">

<div className="btns">
<div className={tab === 1 ? "active-tab" : "btn1"} onClick={() => setToggle(1)}><img src="/images/dummyLogo.png" alt="" /></div>
<div className={tab === 2 ? "active-tab" : "btn1"} onClick={() => setToggle(2)}><img src="/images/dummyLogo.png" alt="" /></div>
<div className={tab === 3 ? "active-tab" : "btn1"} onClick={() => setToggle(3)}><img src="/images/dummyLogo.png" alt="" /></div>
<div className={tab === 4 ? "active-tab" : "btn1"} onClick={() => setToggle(4)}><img src="/images/dummyLogo.png" alt="" /></div>
<div className={tab === 5 ? "active-tab" : "btn1"} onClick={() => setToggle(5)}><img src="/images/dummyLogo.png" alt="" /></div>

</div>



<div className={tab === 1 ? "active-rightSide" : "rightSide rightside1"}>
<div className="tttText">
<img src="/images/quotes.png" alt="" />
<h1>Honestly one of the best business decisions</h1>
<p>I partnered with Akshay and Konabos several years ago and it is honestly one of the best business decisions I have ever made. There are lots of places that have technology "head" knowledge, but the Konabos team has the unique advantage of seeing your business goals and, using the technology, translating that into real world successes. Best people, real world wins, all in modest budgets...it's an easy decision to make </p>
<div className="testiName">~Joel Franks - <span>Company Lead, Winward Digital </span></div>
</div>

<div className="man">
    <img src="/images/man.png" alt="" />
</div>

</div>











<div className={tab === 2 ? "active-rightSide" : "rightSide rightside1"}>
<div className="tttText">
<img src="/images/quotes.png" alt="" />
<h1>Testimonail Changed 2</h1>
<p>I partnered with Akshay and Konabos several years ago and it is honestly one of the best business decisions I have ever made. There are lots of places that have technology "head" knowledge, but the Konabos team has the unique advantage of seeing your business goals and, using the technology, translating that into real world successes. Best people, real world wins, all in modest budgets...it's an easy decision to make </p>
<div className="testiName">~Joel Franks - <span>Company Lead, Winward Digital </span></div>
</div>

<div className="man">
    <img src="/images/man2.png" alt="" />
</div>

</div>











<div className={tab === 3 ? "active-rightSide" : "rightSide rightside1"}>
<div className="tttText">
<img src="/images/quotes.png" alt="" />
<h1>Testimonail Changed 3</h1>
<p>I partnered with Akshay and Konabos several years ago and it is honestly one of the best business decisions I have ever made. There are lots of places that have technology "head" knowledge, but the Konabos team has the unique advantage of seeing your business goals and, using the technology, translating that into real world successes. Best people, real world wins, all in modest budgets...it's an easy decision to make </p>
<div className="testiName">~Joel Franks - <span>Company Lead, Winward Digital </span></div>
</div>

<div className="man">
    <img src="/images/man.png" alt="" />
</div>

</div>



















<div className={tab === 4 ? "active-rightSide" : "rightSide rightside1"}>
<div className="tttText">
<img src="/images/quotes.png" alt="" />
<h1>Testimonail Changed 4</h1>
<p>I partnered with Akshay and Konabos several years ago and it is honestly one of the best business decisions I have ever made. There are lots of places that have technology "head" knowledge, but the Konabos team has the unique advantage of seeing your business goals and, using the technology, translating that into real world successes. Best people, real world wins, all in modest budgets...it's an easy decision to make </p>
<div className="testiName">~Joel Franks - <span>Company Lead, Winward Digital </span></div>
</div>

<div className="man">
    <img src="/images/man.png" alt="" />
</div>

</div>

















<div className={tab === 5 ? "active-rightSide" : "rightSide rightside1"}>
<div className="tttText">
<img src="/images/quotes.png" alt="" />
<h1>Testimonail Changed 5</h1>
<p>I partnered with Akshay and Konabos several years ago and it is honestly one of the best business decisions I have ever made. There are lots of places that have technology "head" knowledge, but the Konabos team has the unique advantage of seeing your business goals and, using the technology, translating that into real world successes. Best people, real world wins, all in modest budgets...it's an easy decision to make </p>
<div className="testiName">~Joel Franks - <span>Company Lead, Winward Digital </span></div>
</div>

<div className="man">
    <img src="/images/man.png" alt="" />
</div>

</div>











</div>


    </div>
    <img src="/images/quotes2.png" alt="" className="ssssssssb"/>

    <img src="/images/border2.png" alt="" className="jjjj tttttttt"/>

</div>

 












<div className="parent caseStudyP">
    <div className="child caseStudyC">

    <div className="circTitle">
                <h1>Case Studies</h1>
            </div>



<div className="caseStudyFlex">
    <div className="caseImg"><img src="/images/lastFlex.png" alt="" /></div>
    <div className="caseText">
        <h1>“Konabos was instrumental in improving the stability and performance of our website. They pinpointed the issues and clearly communicated ” </h1>
    <hr />
    <div className="fffcase">
        <div className="ff1">
            <span>Jhonathon Sparkle</span>
            <p>Application Service Director</p>
        </div>

        <div className="ff2">
            <a href="#"><i class="fal fa-arrow-right"></i></a>
        </div>
    </div>
    </div>
</div>














<div className="blogGrid lastGrid">


<div className="blogGrid1">
  <img src="/images/flexLogo1.png" alt="" />
    
    <h1>“Konabos was instrumental in improving the stability and performance of our website. They pinpointed the issues and clearly communicated ”</h1>
    <div className="fffcase">
        <div className="ff1">
            <span>Jhonathon Sparkle</span>
            <p>Application Service Director</p>
        </div>

        <div className="ff2">
            <a href="#"><i class="fal fa-arrow-right"></i></a>
        </div>
    </div>

</div>






<div className="blogGrid1">
<img src="/images/flexLogo2.png" alt="" />
    
    <h1>“Konabos was instrumental in improving the stability and performance of our website. They pinpointed the issues and clearly communicated ”</h1>
    <div className="fffcase">
        <div className="ff1">
            <span>Jhonathon Sparkle</span>
            <p>Application Service Director</p>
        </div>

        <div className="ff2">
            <a href="#"><i class="fal fa-arrow-right"></i></a>
        </div>
    </div>

</div>







<div className="blogGrid1">
<img src="/images/flexLogo3.png" alt="" />
    
    <h1>“Konabos was instrumental in improving the stability and performance of our website. They pinpointed the issues and clearly communicated ”</h1>
    <div className="fffcase">
        <div className="ff1">
            <span>Jhonathon Sparkle</span>
            <p>Application Service Director</p>
        </div>

        <div className="ff2">
            <a href="#"><i class="fal fa-arrow-right"></i></a>
        </div>
    </div>

</div>











    </div>










    </div>
    <img src="/images/letter.png" alt="" className="letterImg"/>
    <img src="/images/border.png" alt="" className="jjjj"/>
</div>













        </>
        
    )
}

export default Home
