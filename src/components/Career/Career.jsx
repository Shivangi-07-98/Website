import React, { useState, useEffect } from 'react'
import DOMPurify from 'dompurify';
import axios from 'axios';
import './Career.scss'

import time from './img/time.png'
import technology from './img/technology.png'
import learning from './img/learning.png'
// import { Link } from 'react-router-dom'

function Career() {

  const [isLoaded, setLoaded] = useState(false);
  const [jobsData, setJobsData] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  useEffect(() => {
    const fetchJobsData = async () => {

      try {
        const response = await fetch('/jobsData.json');
        if (!response.ok) {
          throw new Error('Failed to fetch job data');
        }
        const data = await response.json();
        setJobsData(data.data);
      } catch (error) {
        console.error('Error fetching job data:', error);
      } finally {
        setLoaded(true);
      }

    };

    fetchJobsData();
  }, []);

  const openReadMoreModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const openApplyModal = (job) => {
    setSelectedJob(job);
    setIsApplyModalOpen(true);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setIsModalOpen(false);
    setIsApplyModalOpen(false);
  };

  const stripHTMLTags = (job_description) => {
    const doc = new DOMParser().parseFromString(job_description, 'text/html');
    return doc.body.textContent || '';
  };

  // ---------------------------------------------

  // Form state variables
  const [formData, setFormData] = useState({
    name: '',
    mobileNo: '',
    email: '',
    experience: '',
    currentCTC: '',
    expectedCTC: '',
    resume: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://crm.18pixels.com/public/store_job_application',
        formData
      );
      console.log('Form submitted successfully:', response.data);
      // Optionally, you can add logic to close the modal or show a success message.
    } catch (error) {
      console.error('Error submitting form:', error);
      // Optionally, you can show an error message to the user.
    }
  };


  return (
    <>
      <div className='career1'>
        <h1>We are Hiring</h1>
        <p>18Pixels / Career</p>
      </div>

      <div className='career2'>
        <div className='heading'>
          <h3>Why work with us?</h3>
        </div>

        <div className='boxes'>

          <div className='box'>
            <div className='img'>
              <img src={time} alt="" />
            </div>
            <div className='box-section'>
              <h4>Flexible Enviornment</h4>
              <p>At our workplace, we emphasize on the willingness and ability to adapt to change, particularly regarding how and when work gets done.</p>
            </div>
          </div>

          <div className='box'>
            <div className='img'>
              <img src={technology} alt="" />
            </div>
            <div className='box-section'>
              <h4>Latest Technology</h4>
              <p>We work on the latest technologies giving our employees a chance to learn and grow with us.</p>
            </div>
          </div>

          <div className='box'>
            <div className='img'>
              <img src={learning} alt="" />
            </div>
            <div className='box-section'>
              <h4>Learning Culture</h4>
              <p>Our highly knowledgeable and experienced team takes an opportunity to always support and guide our newbies.</p>
            </div>
          </div>

        </div>
      </div>

      <div className='career3'>
        <div className='heading'>
          <h3>Interested? Come and Join us</h3>
          <p>We are looking for another brick in the wall. Come and help shaping the digital world with us.</p>
        </div>

        <div className='cards'>
          {/* data ek array hai 0, 1, 2, 3...... */}

          {isLoaded ?
            (
              jobsData.map(
                (job) => (
                  <div key={job.id} className='card'>
                    <div className='top'>
                      <h4>{job.job_title}</h4>
                      <span>{job.job_location}</span>
                    </div>
                    <div className='bottom'>
                      <p><strong>Job Description:</strong></p>
                      <div>
                        <p>{stripHTMLTags(job.job_description).substring(0, 100)}...</p>
                      </div>
                    </div>
                    <button className='read' onClick={() => openReadMoreModal(job)}>Read more</button>
                    <button className='apply' onClick={() => openApplyModal(job)}>Apply Now</button>
                  </div>

                )
              )
            ) :
            (
              <div className='font-bold'>Loading...</div>
            )
          }
        </div>

      </div>

      {/* Modal for Read More */}
      {isModalOpen && selectedJob && (
        <div className='overlay' onClick={closeModal}>
          <div className='modal' onClick={(e) => e.stopPropagation()}>
            <button className='close' onClick={closeModal}>&times;</button>
            <h2>{selectedJob.job_title}</h2>
            {/* <p>Location: {selectedJob.job_location}</p> */}
            <p className='descrp'><strong>Job Description:</strong></p>
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(selectedJob.job_description) }} />

          </div>
        </div>
      )}


      {/* Modal for Apply Now */}
      {isApplyModalOpen && selectedJob && (
        <div className="overlay" onClick={closeModal}>
          <div className="modal applyNow" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={closeModal}>
              &times;
            </button>
            <h2>Apply for <span>{selectedJob.job_title}</span></h2>
            
            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="What should we call you?"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="mobileNo">Mobile No. *</label>
                <input
                  type="text"
                  id="mobileNo"
                  name="mobileNo"
                  value={formData.mobileNo}
                  onChange={handleInputChange}
                  placeholder="Where should we call you?"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Where should we email you back?"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="experience">Experience (In years) *</label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select experience</option>
                  <option value="Fresher">Fresher</option>
                  {[...Array(20).keys()].map((i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1} year(s)
                    </option>
                  ))}
                </select>

              </div>
              <div className="form-field">
                <label htmlFor="currentCTC">Current CTC *</label>
                <input
                  type="text"
                  id="currentCTC"
                  name="currentCTC"
                  value={formData.currentCTC}
                  onChange={handleInputChange}
                  placeholder="Example: 5.5 Lakh"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="expectedCTC">Expected CTC *</label>
                <input
                  type="text"
                  id="expectedCTC"
                  name="expectedCTC"
                  value={formData.expectedCTC}
                  onChange={handleInputChange}
                  placeholder="Example: 5.5 Lakh"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="resume">Attach Resume *</label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                />
              </div>
            </form>

            <button type="submit" className="submit-button">Submit</button>
          </div>
        </div>
      )}

    </>
  )
}

export default Career