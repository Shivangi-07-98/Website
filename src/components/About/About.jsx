import React, { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import './About.scss'
import imgabout2 from './img/about2.png'
import imgabout3_1 from './img/about3_1.jpg'
import imgabout3_2 from './img/about3_2.png'
import squad_connect_1 from './img/squad_connect_1.png'
import poptv1 from './img/poptv_1.png'
import lehren_1 from './img/lehren_1.png'
import krisin_1 from './img/krisin_1.png'
import hinduja_1 from './img/hinduja_1.png'
import fhh_1 from './img/fhh_1.png'
import descon_1 from './img/descon_1.png'
import bcpm_1 from './img/bcpm_1.png'
import n12 from './img/n12.jpg'
import n11 from './img/n11.jpg'
import n9 from './img/n9.jpg'
import n5 from './img/n5.jpg'
import icon_1 from './img/icon_1.png'
import icon_2 from './img/icon_2.png'
import icon_3 from './img/icon_3.png'
import icon_4 from './img/icon_4.png'


import ptr1 from './img/ptr1.jpg'
import ptr2 from './img/ptr2.jpg'
import ptr3 from './img/ptr3.jpg'
import ptr4 from './img/ptr4.jpg'
import ptr5 from './img/ptr5.jpg'
import ptr6 from './img/ptr6.jpg'


function About() {
  return (
    <div className='about'>

      <div className='about1'>
        <h1>About 18Pixels</h1>
        <span>18Pixels </span>/<span>About</span>
      </div>

      <div className='about2'>

        <div className='about2left'>
          <div>
            <img src={imgabout2} alt='imgabout2'></img>
          </div>
        </div>

        <div className='about2right'>
          <div>
            <h4>Innovative minds, technical brilliance, and measurable results</h4>
          </div>

          <div>
            <p>
              Run and operated by Harvard, IIMs, and IIT graduates, we at 18Pixels enable progressive
              businesses to transform, scale, and gain a competitive advantage through the expert delivery
              of innovative, tailor-made software. Our elegant, data-driven solutions help organizations and
              people around the world to perform more effectively and achieve better outcomes.
            </p>
            <div className='about2list'>
              <ul>
                <li><i class="fa fa-check"></i><strong>Our mission - </strong>is to be a socially responsible organization with a focus on people—an organization that inspires its team members to deliver outstanding technology
                  interventions that help our clients complete their digital transformation.</li>

                <li><i class="fa fa-check"></i><strong>Vision - </strong>“You never change things by fighting the existing reality. To change
                  something, build a new model that makes the existing model obsolete.”―
                  <strong>Buckminster Fuller.</strong></li>
              </ul>
            </div>

          </div>
        </div>

      </div>

      <div className='about3'>
        <div className='about3left'>

          <div>
            <h4>Our working methodology</h4>
          </div>

          <div>
            <p>
              We cater to requirements for frontend, backend, web services, and API development
              integration. Along with preparing a strategy for Agile Scrum methodology, we factor the
              aspects of scalability, multi-tenancy, and 3rd party integration and craft an optimized clean
              code structure using cutting-edge technologies.
            </p>
            </div>

            <div className='about3left_box'>

                <div className='box'>
                <div>
                  <img src={icon_1} alt="" />
                </div>
                <div className='box-text'>
                <h4>Discovery Workshop</h4>
                <p>We give the utmost importance to understanding and documenting clients&#39; inputs.</p>
                </div>
              </div>

              <div className='box'>
                <div>
                  <img src={icon_2} alt="" />
                </div>
                <div className='box-text'>
                  <h4>Development</h4>
                  <p>Sprint Planning, Agile Development, and UAT</p>
                </div>
              </div>

              <div className='box'>
                 <div>
                  <img src={icon_3} alt="" />
                </div>
                <div className='box-text'>
                  <h4>Consolidation</h4>
                  <p>Business Requirement Document, Wireframes, and Fidelity Prototypes</p>
                </div>
              </div>

              <div className='box'>
              <div>
                  <img src={icon_4} alt="" />
                </div>
                <div className='box-text'>
                <h4>Deliverables</h4>
                <p>A Working System, Release Documentation, and Training Sessions</p>
                </div>
              </div>

            </div>
          

        </div>

        <div className='about3right'>
          <div>
            <img src={imgabout3_1} alt="imgabout3_1" />
            <img src={imgabout3_2} alt="imgabout3_2" />
          </div>
        </div>

      </div>

      <div className='about4'>
        <div className='about4-content'>
        
          <div className='about4-left'>
            <h3>We Like to Start Your Project With Us</h3>
            <p>Looking for cutting-edge technology solutions?</p>
          </div>

          <div className='about4-right'>
            <button>Get Started</button>
          </div>

          </div>
      </div>

      <div className='about5'>
        <div className='heading'>
          <small>SATISFIED CLIENT</small>
          <h2>Clients We Work For</h2>
        </div>

        <div className='about5_1'>
          <div className='about5_1_companies'>
          <div>
            <img src={squad_connect_1} alt='Squad Connect' />
          </div>

          <div>
            <img src={poptv1} alt='poptv1' />
          </div>

          <div>
            <img src={lehren_1} alt='' />
          </div>

          <div>
            <img src={krisin_1} alt='' />
          </div>

          <div>
            <img src={hinduja_1} alt='' />
          </div>

          <div>
            <img src={fhh_1} alt='' />
          </div>

          <div>
            <img src={descon_1} alt='' />
          </div>

          <div>
            <img src={bcpm_1} alt='' />
          </div>

          <div>
            <img src={n12} alt='' />
          </div>

          <div>
            <img src={n11} alt='' />
          </div>

          <div>
            <img src={n9} alt='' />
          </div>

          <div>
            <img src={n5} alt='' />
          </div>
          </div>

          <div className='clients'>
          <button>View All Clients</button>
            {/* <a href="#">View All Clients</a> */}
          </div>
        </div>
      </div>

      <div className='about6'>

        <div className='about6_heading'>
          <small>LET'S TALK</small>
          <h2>Request For Proposal</h2>
        </div>

        <div className='about6section'>

          <div className='about6section_left'>
            <div className='inputs'>
            <div>
              <input type="text" placeholder="Name" />
            </div>

            <div>
              <input type="email" placeholder="E-mail" />
            </div>

            <div>
              <input type="text" placeholder="Phone Number" />
            </div>

            <div>
              <input type="text" placeholder="Subject" />
            </div>

            
            </div>

            <div >
              <textarea placeholder="Your Message Here"></textarea>
            </div>

            <div className='submit'>
              <input type="submit"/>
            </div>

          </div>

          <div className='about6section_right'>

          <Swiper
            slidesPerView={1}
            spaceBetween={50}
            
            // centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2000,
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
            <div className="item">
              <i className="fa fa-quote-left"></i>
              <p>Eighteen Pixels did a great job working on a very tough project that saved me a great deal of
                headache. The team is flexible to meet the spirit of project goals, not only defined
                deliverables.</p>
              <div className='name'>Anand Kumar <br/>Manager</div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="item">
              <i className="fa fa-quote-left"></i>
              <p>18Pixels was very helpful in re-creating our restaurant app from the ground up and providing
                the best solutions to build an app that our customers deserved. They were also great with
                communication. Highly recommend!</p>
              <div className='name'>Yogesh Meshram<br/>CEO & Founder</div>
            </div>
            </SwiperSlide>
            </Swiper>
          </div>

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


    </div>
  )
}

export default About