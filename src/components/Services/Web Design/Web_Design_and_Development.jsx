// Web_Design_and_Development

import React, { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './Web_Design.scss'
 
import BusinessNeed from './img/BusinessNeed.jpg'
import online from './img/online.png'
import reach from './img/reach.png'
import increase from './img/increase.png'
import an_easy from './img/an_easy.png'
import b2b from './img/b2b.png'
import client from './img/client.png'
import cost from './img/cost.png'
import high from './img/high.png'

import innovative from './img/innovative.png'
import support from './img/support.png'
import website from './img/website.png'
import mongo from './img/mongo.png'
import express from './img/express.png'
import angular from './img/angular.png'
import node from './img/node.png'
import react from './img/react.png'
import responsive from './img/responsive.png'
import website_1 from './img/website_1.png'
import e_commerce from './img/e_commerce.png'
import mobile from './img/mobile.png'
import we_offer from './img/we_offer.jpg';


import img2 from './img/2.png'
import img1 from './img/1.png'
import img3 from './img/3.png'
import img4 from './img/4.png'
import img5 from './img/5.png'
import img6 from './img/6.png'
import img7 from './img/7.png'
import img8 from './img/8.png'
import img9 from './img/9.png'
import img10 from './img/10.png'
import img11 from './img/11.png'
import img12 from './img/12.png'
import img13 from './img/13.png'
import img14 from './img/14.png'
import img15 from './img/15.png'
import img16 from './img/16.png'
import img17 from './img/17.png'
import img18 from './img/18.png'
import img19 from './img/19.png'
import img20 from './img/20.png'
import img21 from './img/21.png'
import img22 from './img/22.png'

import ptr1 from './img/ptr1.jpg'
import ptr2 from './img/ptr2.jpg'
import ptr3 from './img/ptr3.jpg'
import ptr4 from './img/ptr4.jpg'
import ptr5 from './img/ptr5.jpg'
import ptr6 from './img/ptr6.jpg'

import email from './img/email.png'
import call from './img/call.png'
import whatsapp from './img/whatsapp.png'
import faq from './img/faq.jpg'
import card1 from './img/card1.jpg'
import card1img from './img/card1img.png'
import card2 from './img/card2.jpg'
import card2img from './img/card2img.png'
import card3 from './img/card3.jpg'
import card3img from './img/card3img.png'
import card4 from './img/card4.jpg'
import card4img from './img/card4img.png'

import profile1 from './img/profile1.png'
import profile2 from './img/profile2.png'
import profile3 from './img/profile3.jpg'
import rating from './img/rating.png'


function Web_Design() {


  useEffect(() => {
    const accordionItems = document.getElementsByClassName('contentBox');

    const toggleAccordion = (event) => {
      event.currentTarget.classList.toggle('active');
    };

    for (let i = 0; i < accordionItems.length; i++) {
      accordionItems[i].addEventListener('click', toggleAccordion);
    }

    // Cleanup the event listeners when the component unmounts
    return () => {
      for (let i = 0; i < accordionItems.length; i++) {
        accordionItems[i].removeEventListener('click', toggleAccordion);
      }
    };
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <div>

      <div className='WebDesign1'>

        <div className='left'>
          <h1>Web Design and Development Service</h1>
          <p>Customized web solutions tailored to meet the unique needs and requirements of our clients</p>
          <button>Request a Proposal</button>
        </div>

        <div className='right'></div>
      </div>

      <div className='WebDesign2'>

        <div className='left'>
          <h4>Services</h4>
          <h1>Web Design & Development Company</h1>
        </div>

        <div className='right'>
          <p>18Pixels is a professional web design and development company that offers customized web solutions tailored to meet the unique needs and requirements of our clients. Our team of experts works closely with clients to understand their brand, target audience, and business goals and then develops customized web solutions that meet those specificneeds.</p>

          <p className='bottom'>Contact us today to learn more about how we can help you establish a strong online presence and grow your business.</p>
        </div>

      </div>

      <div className='WebDesign3'>

        <div className='left'>
          <img src={BusinessNeed}></img>
          <div className='bg'>
          </div>
        </div>

        <div class="right">
          <h2>Why does your business need website design & development services?</h2>

          <p>Your business needs website design and development services to establish an online presence, reach a wider audience, and increase revenue. A well-designed and user-friendly website can attract potential customers, provide valuable information about your products or services, and encourage them to make a purchase.</p>

          <p>Website development also includes essential features like security, optimization for search engines, and mobile responsiveness. By investing in professional website design and development services, you can improve the credibility of your business and stay ahead of the competition.</p>

          <div className='icon'>

            <div>
              <img src={online}></img>
              <p>Online Presence</p>
            </div>

            <div>
              <img src={reach}></img>
              <p>Reach a Wider Audience</p>
            </div>

            <div>
              <img src={increase}></img>
              <p>Increase Revenue</p>
            </div>

          </div>
        </div>

      </div>

      <div className='WebDesign4'>

        <div class="container">
          <div class="Mainrow">
            <div className='heading'>
              <h2>Why choose <span>18Pixels</span> for your Web Design and Development?</h2>
            </div>
            <div>
              <div class="row">
                <div className='box'>

                  <img src={innovative} alt />
                  <p>Innovative and Creative Approach</p>

                </div>
                <div className='box'>

                  <img src={an_easy} alt />
                  <p>An Easily Navigable Web Design</p>

                </div>
                <div className='box'>

                  <img src={client} alt />
                  <p>Client-focused<br /> Approach</p>

                </div>
                <div className='box'>

                  <img src={cost} alt />
                  <p>Cost-effective Website Design B2B websites that drive traffic and build trust</p>

                </div>
                <div className='box'>

                  <img src={high} alt />
                  <p>High-Quality websites where customers want to browse your products and services</p>

                </div>
                <div className='box'>

                  <img src={b2b} alt />
                  <p>B2B optimized mobile designs that boost your lead generation from mobile devices</p>

                </div>
                <div className='box'>

                  <img src={website} alt />
                  <p>Websites that grow with your business
                    Beautifully Designed Calls-to-action</p>

                </div>
                <div className='box'>

                  <img src={support} alt />
                  <p>Support</p>

                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className='WebDesign5'>
        <div class="container">

          <div>
            <h2>If you want to hire a <span>Web Developer</span> </h2>
          </div>
          <div>
            <a href="#">Contact us</a>
          </div>

        </div>
      </div>

      <div className='WebDesign6'>
        <div className='box'>
          <div className="box1">
            <h2>Our Web Design and Development <span>Tech Stacks</span></h2>
          </div>
          <div className="box2">
            <div className="box2one">
              <h5>MEAN Stack Development</h5>
              <p>At 18pixels, we specialize in MEAN Stack development to drive your business forward. With our expertise in
                MongoDB and JavaScript frameworks like Express.js, Angular.js, and Node.js, we offer cutting-edge solutions for
                designing and building dynamic, immersive, and scalable web applications. Whether you need single-page application
                development or the creation of a comprehensive web app, our services cover it all.</p>
            </div>
            <div className="box2two">

              <div>
                <img src={mongo} alt="" />
                <p>MongoDB</p>
              </div>

              <div>
                <img src={express} alt="" />
                <p>ExpressJS</p>
              </div>

              <div>
                <img src={angular} alt="" />
                <p>AngularJS</p>
              </div>

              <div>
                <img src={node} alt="" />
                <p>NodeJS</p>
              </div>

            </div>
          </div>
          <div className="box3">
            <div className="box3one">
              <h5>MERN Stack Development</h5>
              <p>At 18pixels, we specialize in
                MERN Stack development, providing custom web app solutions to our clients worldwide, empowering them to maintain a
                competitive edge. Our team of experts harnesses the capabilities of MongoDB, Express.js, React.js, and
                Node.js—four powerful open-source technologies—to expedite the development and successful launch of your next
                application, all while ensuring unparalleled quality.</p>
            </div>
            <div class="box3two">

              <div>
                <img src={mongo} alt="" />
                <p>MongoDB</p>
              </div>

              <div>
                <img src={express} alt="" />
                <p>ExpressJS</p>
              </div>

              <div>
                <img src={react} alt="" />
                <p>ReactJS</p>
              </div>

              <div>
                <img src={node} alt="" />
                <p>NodeJS</p>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className='WebDesign7'>
        <div className='row1'>
          <h2>We offer a range of web development solutions</h2>
        </div>
        <div className='row2'>
          <div className='box'>
            <img src={responsive} alt=''></img>
            <p>Responsive web design that enhances the user experience inreal-time.</p>
          </div>

          <div className='box'>
            <img src={website_1} alt=''></img>
            <p>Website redesign that not only modernizes the look but also boosts revenue.</p>
          </div>

          <div className='box'>
            <img src={e_commerce} alt=''></img>
            <p>E-commerce website design that increases return on investment (ROI) and promotes brandawareness.</p>
          </div>

          <div className='box'>
            <img src={mobile} alt=''></img>
            <p>Mobile website design that enables users to achieve their goals while on the move.</p>
          </div>
        </div>
      </div>

      <div className='WebDesign5'>
        <div class="container">

          <div>
            <h2>If you want to hire a <span>Web Developer</span> </h2>
          </div>
          <div>
            <a href="#">Contact us</a>
          </div>

        </div>
      </div>

      <div className='WebDesign8'>
        <div className='image'>
          <img src={we_offer} alt=''></img>
        </div>
        <div className='content'>
          <p>Establishing an online presence through a professional website can attract potential customers, provide valuable information and increase revenue. Website design and development can be complex, requiring technical knowledge and expertise. A <a href='#'>web design and development company</a> in Lucknow can create customized websites tailored to unique requirements, offering ongoing support and maintenance. They work closely with clients to ensure that the website reflects their brand and meets their expectations. Whether a simple or complex e-commerce platform, experienced developers and designers can bring the vision to life.</p>
          <p className='bottom_text'>
            Contact them today to achieve business goals.</p>
        </div>
      </div>

      <div className='WebDesign9'>

        <div>
          <div className='heading'>
            <h3>Our Latest Projects</h3>
            <p>Our custom web & mobile app development ensures scalability and faster brand visibility for your business.</p>
          </div>

          <Swiper
         
            slidesPerView={2}
            spaceBetween={50}
            // centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            // breakpoints={{
            //   400: {
            //     slidesPerView: 1,
            //   },
            //   // Define other breakpoints as needed
            // }}
          >

            <div className='allCards'>

              <SwiperSlide className='outercard'><div className="card">
                <img src={card1} alt=''></img>
                <img className='cardimg big' src={card1img} alt=''></img>
                <p>Development of Web Portal, Mobile Application with real-time Dashboard and Analytics and automated grievance system for Uttar Pradesh Metro Rail Corporation.</p>
              </div></SwiperSlide>

              <SwiperSlide className='outercard'><div className="card">
                <img src={card2} alt=''></img>
                <img className='cardimg big' src={card2img} alt=''></img>
                <h5>AI/ML Based Cataract Detection Application</h5>
                <p>e-Roshni is an AI/ML based cataract detection application
                  assisting the users in the identification of whether the screened
                  individual has cataract or not.</p>
              </div></SwiperSlide>

              <SwiperSlide className='outercard'><div className="card">
                <img src={card3} alt=''></img>
                <img className='cardimg' src={card3img} alt=''></img>
                <p>Pixstory is next generation social media platform that encourages meaningful interactions, and prevents the spread of hate and misinformation.</p>
              </div></SwiperSlide>

              <SwiperSlide className='outercard'><div className="card">
                <img src={card4} alt=''></img>
                <img className='cardimg' src={card4img} alt=''></img>
                <p>AI-ML Driven Social Commerce Platform in Agri-tech, Providing extensive range of high-quality inputs & personalized advisory to the Farmers through last mile connected person (Peer Partner).</p>
              </div></SwiperSlide>
            </div>

          </Swiper>
        </div>

      </div>

      <div className='WebDesign10'>
        <div className='text'>
          <h2>Our Clientele</h2>
          <p>Discover the diverse range of companies and organizations that trust us to provide cutting-edge technology solutions.</p>
        </div>
        <div className='images'>
          <img src={img1} alt=""></img>
          <img src={img2} alt=""></img>
          <img src={img3} alt=""></img>
          <img src={img4} alt=""></img>
          <img src={img5} alt=""></img>
          <img src={img6} alt=""></img>
          <img src={img7} alt=""></img>
          <img src={img8} alt=""></img>

          <img src={img13} alt=""></img>
          <img src={img14} alt=""></img>
          <img src={img15} alt=""></img>
          <img src={img16} alt=""></img>
          <img src={img17} alt=""></img>
          <img src={img18} alt=""></img>
          <img src={img19} alt=""></img>
          <img src={img20} alt=""></img>
          <img src={img21} alt=""></img>
          <img src={img22} alt=""></img>

          <img className='big' src={img9} alt=""></img>
          <img className='big' src={img10} alt=""></img>
          <img src={img11} alt=""></img>
          <img className='big' src={img12} alt=""></img>
        </div>
      </div>

      <div className='WebDesign11'>
        <div className='left'>
          <img src={rating} alt="" />
          <h5>More than 100 clients have given us a 5/5 rating.</h5>
          <p>We cater to businesses of all sizes, including small and large enterprises</p>
        </div>
        <div className='right'>

        <Swiper
            slidesPerView={1}
            spaceBetween={50}
            // centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            fade={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >

              <SwiperSlide>
              <div className='profile'>
            <img src={profile1} alt="" />
            <p className='name'>Ankur Dahiya</p>
            <p className='company'>CEO & Founder, Rozana.in</p>
            <p>
              We were thrilled with the ecommerce platform developed by 18Pixels for our rural business. The team's expertise and attention to detail allowed us to expand our reach and increase sales in a seamless and
              efficient manner.</p>
          </div>
              </SwiperSlide>

              <SwiperSlide>
              <div className='profile'>
            <img src={profile2} alt="" />
            <p className='name'>Gaurav Kumar</p>
            <p className='company'>Co-founder, COO, Gramik</p>
            <p>

              From the beginning, 18Pixels has been providing invaluable support to Gramik's (formerly known as Agri Junction) B2C and B2B platform. This support was realized through the development of an E-Marketplace
              and ERP/POS solution, which has resulted in a tenfold growth in sales and improved customer connections.18pixels has been a great support to us in our growth.</p>
          </div>
              </SwiperSlide>

              <SwiperSlide>
              <div className='profile'>
            <img src={profile3} alt="" />
            <p className='name'>Vinod Punjabi</p>
            <p className='company'>Ada Chikankari</p>
            <p>
              18Pixels has been an integral partner in improving our site’s user experience with the exceptional development of e-commerce website and Mobile Application. Their QA testing team is responsive, fast,
              proactive, and flexible – overall, an absolute pleasure to work with. After just a short amount of time, we’ve seen significant results.</p>
          </div>
              </SwiperSlide>
              </Swiper>

        </div>
      </div>

      <div className='WebDesign12'>
        <div className='text'>
          <h5>Bring Your Ideas to Life</h5>
          <p>Book a Free Consultation Call for Your Next Project.</p>
        </div>
        <div className='button'>
          <a href='#'>Let's Connect</a>
        </div>
      </div>

      <div className='WebDesign13'>
        <h2>MEMBERS & PARTNERS</h2>

        <Swiper
            slidesPerView={5}
            spaceBetween={50}
            
            // centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            fade={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}

            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            
          >
            
        <div className='images'>
        <SwiperSlide><img src={ptr1} alt=''></img></SwiperSlide>
          <SwiperSlide><img src={ptr3} alt=''></img></SwiperSlide>
          <SwiperSlide><img src={ptr4} alt=''></img></SwiperSlide>
          <SwiperSlide><img src={ptr2} alt=''></img></SwiperSlide>
          <SwiperSlide><img src={ptr5} alt=''></img></SwiperSlide>
          <SwiperSlide><img src={ptr6} alt=''></img></SwiperSlide>
        </div>
        
      </Swiper>
      </div>

      <div className='WebDesign14'>
        <div className='left'>
          <div className='contentleft'>
          <div>
          <h2>Let's get started.</h2>
          <p className='headingtext'>Please share a bit more information about yourself and our team will be in touch with you.</p>
          </div>

          <div className='email'>
            <div className='icon'><img src={email} alt=''></img></div>
            <div>
              <h5>Email</h5>
              <p>itsales@18pixels.com</p>
            </div>
          </div>

          <div className='phone'>
            <div className='icon'><img src={call} alt=''></img></div>
            <div>
              <h5>Call</h5>
              <p>+91 90054 16663</p>
            </div>
          </div>

          <div className='msg'>
            <div className='icon'><img src={whatsapp} alt=''></img></div>
            <div>
              <h5>Whatsapp</h5>
              <p>+91 90054 16663</p>
            </div>

          </div>
        </div>

          </div>
          
        {/* <div className='middle'></div> */}

        <div className='right'>
          <div className='contentright'>
          <div>
            <h5>Bring your ideas to life</h5>
            <p>Book a free consultion call for your next project</p>
          </div>

          <div className='inputs'>
            <input type='text' placeholder='Name*'></input>
            <input type='text' placeholder='Phone'></input>
            <input type='text' placeholder='E-mail'></input>
            <textarea type='text' placeholder='Message' name="" id="" cols="15" rows="5"></textarea>
            <input className='submit' type='submit'></input>
          </div>

        </div>
        </div>
        </div>

      <div className='WebDesign15'>

        <div className='heading'>
          <h5>Frequently Asked Questions</h5>
          <p>Questions? We'hv got answers. If you can't find what you are looking for, feel free to get in touch.</p>
        </div>

        <div className='faqs'>
          <div className='left'>
            <div class="accordion">
              <div class="contentBox">
                <div class="label">What is website development?</div>
                <div class="content">
                  <p>Website development is the process of creating, designing, and building a website for an individual or business. This process involves various stages such as planning, designing, coding, testing, and launching the website.</p>
                </div>
              </div>
              <div class="contentBox">
                <div class="label">Why is website development important for my business?</div>
                <div class="content">
                  <p>In today's digital age, having a website is essential for businesses to establish an online presence, reach a wider audience, and increase revenue. A well-designed website can attract potential customers, provide valuable information about your products or services, and encourage them to make a purchase.</p>
                </div>
              </div>
              <div class="contentBox">
                <div class="label">What services does a website development company in Lucknow offer?</div>
                <div class="content">
                  <p>A website development company in Lucknow can offer a range of services such as web design, web development, e-commerce development, website maintenance, website redesign, search engine optimization (SEO), and more.</p>
                </div>
              </div>
              <div class="contentBox">
                <div class="label">How much does website development cost?</div>
                <div class="content">
                  <p>The cost of website development can vary depending on the complexity of the project, the number of features required, and the level of customization. It is best to consult with a website development company in Lucknow to get a detailed estimate based on your specific needs.</p>
                </div>
              </div>
              <div class="contentBox">
                <div class="label">How long does it take to develop a website?</div>
                <div class="content">
                  <p>The timeline for website development can vary depending on the scope and complexity of the project. A simple website can be completed in a few weeks, while a more complex may take several months. It is best to consult with a website development company in Lucknow to get a more accurate estimate of the timeline based on your specific requirements.</p>
                </div>
              </div>
              <div class="contentBox">
                <div class="label">Do I need to have the technical knowledge to manage my website?</div>
                <div class="content">
                  <p>No, you do not need technical knowledge to manage your website. However, it is recommended that you work with a website development company in Lucknow that provides training and support to ensure you can manage your website effectively.</p>
                </div>
              </div>
            </div>
          </div>

          <div className='right'>
            <img src={faq} alt=''></img>
          </div>



        </div>


      </div>
    </div>
  )
}

export default Web_Design