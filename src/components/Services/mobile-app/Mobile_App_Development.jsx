// Mobile_App_Development

import React, { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './Mobile_App.scss'

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
// import react from './img/react.png'
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

import native from './img/native.png'
import ios from './img/ios.png'
import android from './img/android.png'
import hybrid from './img/hybrid.png'
import cross from './img/cross.png'
import arvr from './img/arvr.png'
import wearable from './img/wearable.png'
import iot from './img/iot.png'

import java from './img/java.png'
import kotlin from './img/kotlin.png'
import Swift from './img/swift.png'
import Objective from './img/objective.png'
import react from './img/react.png'
import Flutter from './img/flutter.png'
// import kotlin from './img/kotlin.png'
import Node from './img/node.png'
import Python from './img/python.png'
import php from './img/php.png'

import pixels from './img/pixels.jpg'

import Logistics from './img/logistics.png'
import healthcare from './img/healthcare.png'
import Retail from './img/retail.png'
import Finance from './img/finance.png'
import Entertainment from './img/entertainment.png'
import Real_Estate from './img/real_estate.png'
import Education from './img/education.png'
import Travel from './img/travel.png'

import Healthcare from './img/Healthcare.jpg'

function Mobile_App() {


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

      <div className='MobileApp1'>

        <div className='left'>
          <h1>Mobile App Development Service</h1>
          <p>18Pixels is a leading mobile app development company that provides a range of high-quality services.</p>
          <button>Request a Proposal</button>
        </div>

        <div className='right'></div>
      </div>

      <div className='MobileApp2'>

        <div className='left'>
          <h4>Services</h4>
          <h1>Mobile App Development Company</h1>
        </div>

        <div className='right'>
          <p>18Pixels is a leading Mobile app development company that provides a range of high-quality services. With a team of experienced developers, designers, and testers, we specialize in developing custom iOS and Android apps, as well as native and cross-platform solutions. We also offer UI/UX design, consulting, and prototyping services, as well as automated QA and testing, power management, notification and geofencing, embedded Android & AOSP customizations, and maintenance and post-warranty support. At 18Pixels, we are committed to delivering innovative, reliable, and user-friendly mobile apps that meet the unique needs of our clients.</p>

          {/* <p className='bottom'>Contact us today to learn more about how we can help you establish a strong online presence and grow your business.</p> */}
        </div>

      </div>

      <div className='MobileApp3'>

        <div class="container">
          <div class="Mainrow">
            <div className='heading'>
              <h2>Mobile application development services for various platforms</h2>
              <p>Our team of mobile app developers possesses more than a decade of experience in creating solutions that cater to market demands, reinforce companies' brand identity, and foster business development and expansion.</p>
            </div>
            <div>
              <div class="row">
                <div className='box'>

                  <img src={native} alt />
                  <p>Native mobile app development</p>

                </div>
                <div className='box'>

                  <img src={ios} alt />
                  <p>iOS App Development</p>

                </div>
                <div className='box'>

                  <img src={android} alt />
                  <p>Android App Development</p>

                </div>
                <div className='box'>

                  <img src={hybrid} alt />
                  <p>Hybrid Mobile App Development</p>

                </div>
                <div className='box'>

                  <img src={cross} alt />
                  <p>Cross-platform App Development</p>

                </div>
                <div className='box'>

                  <img src={arvr} alt />
                  <p>AR/VR App Development</p>

                </div>
                <div className='box'>

                  <img src={wearable} alt />
                  <p>Wearable App Development</p>

                </div>
                <div className='box'>

                  <img src={iot} alt />
                  <p>IoT App Development</p>

                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className='MobileApp4'>

        <div className='left'>
          <h1>Mobile app development services</h1>
        </div>

        <div className='right'>
          <p>At our company, we provide comprehensive application design, integration, and management services for both consumer-oriented and enterprise-class solutions. Our experienced team leads the entire mobile app development process from ideation and concept through to delivery, as well as ongoing support. Whether you're seeking to build a mobile app for your customers or your business, we are equipped to handle every stage of the development cycle.</p>

        </div>

      </div>

      <div className='MobileApp5'>
        <div className='text'>
          <h5>If you want to hire a</h5>
          <p>Mobile App Developer</p>
        </div>
        <div className='button'>
          <a href='#'>Let's Connect</a>
        </div>
      </div>

      <div className='MobileApp6'>
        <div className='top'>
          <h2>Our expertise with major mobile app development technologies</h2>
          <p>Leverages our extensive experience with major technologies to delight your users with expressive and feature-rich native iOS/Android apps, cross-platform apps, or Progressive Web Apps.</p>
        </div>
        <div className='cards'>

          <div className='card'>
            <h5>Native Android App Development</h5>
            <div className='icon'>
              <div>
                <img src={java} alt="" />
                <p>Java</p>
              </div>
              <div>
                <img src={kotlin} alt="" />
                <p>Kotlin</p>
              </div>
            </div>
          </div>

          <div className='card'>
            <h5>Native iOS App Development</h5>
            <div className='icon'>
              <div>
                <img src={Swift} alt="" />
                <p>Swift</p>
              </div>
              <div>
                <img src={Objective} alt="" />
                <p>Objective-C</p>
              </div>
            </div>
          </div>

          <div className='card'>
            <h5>Hybrid App Development</h5>
            <div className='icon'>
              <div>
                <img src={react} alt="" />
                <p>React Native</p>
              </div>
              <div>
                <img src={Flutter} alt="" />
                <p>Flutter</p>
              </div>
            </div>
          </div>


          <div className='card'>
            <h5>Backend Development</h5>
            <div className='icon'>
              <div>
                <img src={Node} alt="" />
                <p>NodeJS</p>
              </div>
              <div>
                <img src={Python} alt="" />
                <p>Python</p>
              </div>
              <div>
                <img className='php' src={php} alt="" />
                <p>PHP</p>
              </div>
            </div>
          </div>


        </div>
      </div>

      <div className='MobileApp7'>
        <div className='left'>
          <img src={pixels} alt="" />
        </div>
        <div className='right'>
          <h2>Why choose 18pixels for app development projects?</h2>
          <p>There are several reasons why choosing 18pixels for app development projects can be beneficial:</p>
          <ul>
            <li>
              <i class="fa fa-check"></i> Experienced Team
            </li>
            <li>
              <i class="fa fa-check"></i> Customized Solutions
            </li>
            <li>
              <i class="fa fa-check"></i> Full-cycle Services
            </li>
            <li>
              <i class="fa fa-check"></i> Diverse Platform Expertise
            </li>
            <li>
              <i class="fa fa-check"></i> App Store Optimization
            </li>
            <li>
              <i class="fa fa-check"></i> Backend Development
            </li>
            <li>
              <i class="fa fa-check"></i> Customer Satisfaction
            </li>
          </ul>
          <p>Choosing 18pixels for app development projects can result in innovative and user-friendly apps that exceed clients' expectations and contribute to business growth and expansion.</p>
        </div>
      </div>

      <div className='MobileApp8'>
        <div class="container">

          <div>
            <h2>If you want to hire a <br /><span>Mobile App Developer</span> </h2>
          </div>
          <div>
            <a href="#">Contact us</a>
          </div>

        </div>
      </div>

      <div className='MobileApp9'>
        <div className='heading'>
          <h2>Mobile app solutions for verticals</h2>
          <p>We have extensive experience in providing cutting-edge digital solutions to a diverse range of clients across various industries, spanning from startups to large enterprises.</p>
        </div>

        <div className='container'>
          <div className='left'>
            <ul>
              <li className='item'>
                <img src={Logistics} alt="" />
                <span>Logistics</span>
              </li>
              <li className='item'>
                <img src={healthcare} alt="" />
                <span>Healthcare</span>
              </li>
              <li className='item'>
                <img src={Retail} alt="" />
                <span>Retail & E-commerce</span>
              </li>
              <li className='item'>
                <img src={Finance} alt="" />
                <span>Finance</span>
              </li>
              <li className='item'>
                <img src={Entertainment} alt="" />
                <span>Entertainment</span>
              </li>
              <li className='item'>
                <img src={Real_Estate} alt="" />
                <span>Real Estate</span>
              </li>
              <li className='item'>
                <img src={Education} alt="" />
                <span>Education</span>
              </li>
              <li className='item'>
                <img src={Travel} alt="" />
                <span>Travel & Hospitatility</span>
              </li>

            </ul>
          </div>
          <div className='right'>
            <div className='box'>
              <h2>Healthcare</h2>
              <ul>
                <li>Telemedicine</li>
                <li>Patient Portal</li>
                <li>Wellness and Fitness Apps</li>
                <li>Medication Management</li>
              </ul>
            </div>
            <img src={Healthcare} alt="" />
          </div>
        </div>
      </div>

      {/* --------------------------------------------- */}

      <div className='MobileApp10'>

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

      <div className='MobileApp11'>
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

      <div className='MobileApp12'>
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

      <div className='MobileApp13'>
        <div className='text'>
          <h5>Bring Your Ideas to Life</h5>
          <p>Book a Free Consultation Call for Your Next Project.</p>
        </div>
        <div className='button'>
          <a href='#'>Let's Connect</a>
        </div>
      </div>

      <div className='MobileApp14'>
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

      <div className='MobileApp15'>
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

      <div className='MobileApp16'>

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

export default Mobile_App