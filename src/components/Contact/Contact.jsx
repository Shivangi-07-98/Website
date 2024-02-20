import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div>
      <div className='page-header1'>
        <h1 className='page-title1'>Contact with us</h1>
        <p className='breadcrumbs-title'>18Pixels / Contact with us</p>
      </div>

      <div className='column-details'>
     
        <div className='contact'>
         <h1>Contact Info</h1>
          
          <div className='items'>
            <div>

            <p><strong>OFFICE</strong></p>
            <p>603-604, 6th Floor, Eldeco Corporate Towers, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010</p>
            </div>

          </div>

          <div className='items'>
            <div>

            <p><strong>PHONE</strong></p>
            <p>Landline: +91 - 9005416663</p>
            <p>Mobile: +91 - 9005419932</p>
            </div>

          </div>

          <div className='items'>
            <i className="fa-solid fa-envelope"></i>
            <div>

            <p><strong>EMAIL</strong></p>
            <p>info@18pixels.com</p>
            <p>sales@18pixels.com</p>
            </div>
          </div>


        </div>

        <div className='message'>
        <h1 className='text-center'>Send us a message</h1>
          <div className='boxes'>
           
            <div>
              <input type="text" id="input1" name="input1" placeholder='Name' />
              <span><input type="text" id="input2" name="input2" placeholder='E-mail' /></span>
            </div>

            <div>
              <input type="text" id="input3" name="input3" placeholder='Phone' />
              <span><input type="text" id="input4" name="input4" placeholder='Subject' /></span>
            </div>

            <div>
              <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
               
            </div>

          </div>

        </div>
      </div>



    </div>
  )
}

export default Contact
