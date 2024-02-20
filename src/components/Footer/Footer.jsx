import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">

      <div className="footer-column">
        
        <img className='CompanyLogo' src="https://18pixels.com/img/18pixels.png" alt="Company Logo" />
        <p className='text'>
          Eighteen Pixels is a company aiming at customer-centric technology offering services like software development, web design and development, and more.
        </p>
        <h1 className="social-connects-text">SOCIAL CONNECTS</h1>
        <div className="social-connects">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ60qwgb1bz_fXp730ZtuJb26XFVC93WgiHyg&usqp=CAU" alt="Facebook" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png" alt="LinkedIn" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" alt="Instagram" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHATjgqVg6FKTad8qecDkx7uyykBpLkukwKc8tEQmsLcwo0uIgc94Q08ZJ0wxtb2xNnUw&usqp=CAU" alt="YouTube" />
        </div>
      </div>

      <div className="footer-column">
        
        <h2 className="heading">Contact Info</h2>
        <div className='text'>
        <p><span><i className="fa-solid fa-envelope"></i>  </span>info@18pixels.com</p>
        <p><span><i className="fa-solid fa-location-dot"></i>  Head Office: </span>203, 2nd Floor, Tower 1, World Trade Center, Kharadi, Pune, Maharashtra 411014 <br/>+91-9604788648, +91-9226027385</p>
        <p><span><i className="fa-solid fa-location-dot"></i>  Software Delivery Center: </span> 603-604, 6th Floor, Eldeco Corporate Towers, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010 <br/>+91-9005419932</p>
        </div>
        
      </div>

      <div className="footer-column">
        
        <h2 className="heading">Services</h2>
        <ul className='text'>
          <li>Web Design & Development</li>
          <li>Mobile App Development</li>
          <li>E-Commerce & Retail</li>
          <li>Software Development Company</li>
          <li>Artificial Intelligence and Machine Learning</li>
          <li>Custom Software Development</li>
          <li>Enterprise Software Development</li>
        </ul>
      </div>

      <div className="footer-column">
        
        <h2 className="heading">Quick Links</h2>
        <ul className='text'>
          <li>Blog</li>
          <li>Career</li>
          <li>News and Media</li>
          <li>Gallery</li>
          <li>Life @ 18Pixels</li>
          <li>Privacy Policy</li>
          <li>Terms and Conditions</li>
          <li>Disclaimer</li>
        </ul>
      </div>
      
      <div className="map-background">
      </div>

      <div className="copyright-section">
        <p>&copy; 2024 Eighteen Pixels India Pvt. Ltd. | All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;