import React from 'react'
import './Contact.scss'

function Contact() {
  return (
    <div>
      <div className='contact1'>
        <h1>Contact with us</h1>
        <p>18Pixels / Contact with us</p>
      </div>

      <div className='contact2'>

        <div className='left'>
          <h1>Contact Info</h1>
          <div className='border'></div>

          <div className='items item1'>

            <div>
              <i class="fa fa-map-marker"></i>
            </div>
            <div>
              <h5>Office</h5>
              <p>603-604, 6th Floor, Eldeco Corporate Towers, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010</p>
            </div>

          </div>

          <div className='items item2'>

            <div>
              <i class="fa fa-phone"></i>
            </div>
            <div>
              <h5>Phone</h5>
              <p>Landline: <a href="tel:+919005416663"><span>+91 - 9005416663</span></a></p>
              <p>Mobile: <a href="tel:+919005419932"><span>+91 - 9005419932</span></a></p>
            </div>

          </div>

          <div className='items item3'>

            <div>
              <i class="fa fa-envelope"></i>
            </div>
            <div>

              <h5>Email</h5>
              <p><span>info@18pixels.com</span></p>
              <p><span>sales@18pixels.com</span></p>
            </div>

          </div>

        </div>

        <div className='right'>
        <h5>Send us a message</h5>
        <div className='border'></div>
          <div className='inputs'>

            <div className='input'>
              <input type="text" id="input1" name="input1" placeholder='Name' />
              <input type="text" id="input2" name="input2" placeholder='E-mail' />
              <input type="text" id="input3" name="input3" placeholder='Phone' />
              <input type="text" id="input4" name="input4" placeholder='Subject' />
            </div>

            {/* <div className='text'> */}
              <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
            {/* </div> */}

            <button>Send Message</button>

          </div>

        </div>
      </div>



    </div>
  )
}

export default Contact