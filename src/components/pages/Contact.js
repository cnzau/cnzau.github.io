import React from 'react';
import Mailto from 'react-protected-mailto';
import Axios from 'axios';
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBInput,
  MDBContainer,
} from 'mdbreact';
import { useState } from 'react';
const initialState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
};

const Contact = () => {
  const [contactForm, setContactForm] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => setContactForm({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();

    e.target.className += ' was-validated';
    console.log('Submitting');
    const data = JSON.stringify(contactForm);

    const config = {
      method: 'post',
      url: 'https://server.clementnzau.com/api/contact',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };
    try {
      Axios(config).then((res) =>
        res.status === 200 ? resetForm() : console.log(res)
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MDBContainer className='contact-section pt-5 my-5'>
      <MDBCard className='bg-1 white-text'>
        <MDBRow>
          <MDBCol lg='8'>
            <MDBCardBody className=''>
              <form
                className='needs-validation'
                onSubmit={handleSubmit}
                noValidate
              >
                <h3 className='mt-4'>
                  <MDBIcon icon='envelope' className='pr-2' />
                  Let's talk:
                </h3>
                <MDBRow>
                  <MDBCol md='6'>
                    <div className='md-form mb-0'>
                      <MDBInput
                        type='text'
                        id='form-contact-name'
                        label='Your name'
                        name='name'
                        value={contactForm.name}
                        onChange={handleChange}
                        required
                      >
                        <div className='invalid-feedback'>
                          Please enter your name.
                        </div>
                      </MDBInput>
                    </div>
                  </MDBCol>
                  <MDBCol md='6'>
                    <div className='md-form mb-0'>
                      <MDBInput
                        type='email'
                        id='form-contact-email'
                        label='Your email'
                        name='email'
                        value={contactForm.email}
                        onChange={handleChange}
                        required
                      >
                        <div className='invalid-feedback'>
                          Please enter your email address.
                        </div>
                      </MDBInput>
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md='6'>
                    <div className='md-form mb-0'>
                      <MDBInput
                        type='tel'
                        id='form-contact-phone'
                        label='Your phone'
                        name='phone'
                        value={contactForm.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </MDBCol>
                  <MDBCol md='6'>
                    <div className='md-form mb-0'>
                      <MDBInput
                        type='text'
                        id='form-contact-company'
                        label='Your company'
                        name='company'
                        value={contactForm.company}
                        onChange={handleChange}
                      />
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md='12'>
                    <div className='md-form mb-0'>
                      <MDBInput
                        type='textarea'
                        id='form-contact-message'
                        label='Your message'
                        name='message'
                        value={contactForm.message}
                        onChange={handleChange}
                        required
                      >
                        <div className='invalid-feedback'>
                          Please enter your message.
                        </div>
                      </MDBInput>
                      <MDBBtn className='btn-md' type='submit'>
                        {/* <MDBIcon icon='paper-plane' /> */}
                        Send
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </form>
            </MDBCardBody>
          </MDBCol>
          <MDBCol lg='4'>
            <MDBCardBody className='contact text-center h-100 white-text'>
              <h3 className='my-4 pb-2'>Contact information</h3>
              <ul className='text-lg-left list-unstyled ml-4'>
                <li>
                  <p>
                    <MDBIcon icon='map-marker-alt' className='pr-2' />
                    Nairobi, Kenya
                  </p>
                </li>
                {/* <li>
                  <p>
                    <MDBIcon icon='phone' className='pr-2' />+ 254 7-- --- ---
                  </p>
                </li> */}
                <li>
                  <p>
                    <MDBIcon icon='envelope' className='pr-2' />
                    <Mailto
                      className='my-text-light'
                      email='cnt@clementnzau.com'
                    />
                  </p>
                </li>
              </ul>
              <hr className='hr-light my-4' />
              <p>Chat with me on:</p>
              <ul className='list-inline text-center list-unstyled'>
                <li className='list-inline-item'>
                  <a
                    href='https://twitter.com/messages/compose?recipient_id=176523991'
                    className='p-2 fa-lg w-ic my-text-light'
                  >
                    <MDBIcon fab icon='twitter' />
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a
                    href='https://ke.linkedin.com/in/clementnzau'
                    className='p-2 fa-lg w-ic my-text-light'
                  >
                    <MDBIcon fab icon='linkedin-in' />
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a
                    href='https://t.me/cnzau'
                    className='p-2 fa-lg w-ic my-text-light'
                  >
                    <MDBIcon fab icon='telegram' />
                  </a>
                </li>
              </ul>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
};

export default Contact;
