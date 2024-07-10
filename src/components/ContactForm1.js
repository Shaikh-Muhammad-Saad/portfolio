import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';

import sendEmail from '../helpers/sendEmail';
import { getFormData } from '../utils';

const ContactForm1 = () => {
  const [loading, setLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const onSubmit = async (values) => {
    setLoading(true);
    try {
      const req2 = await sendEmail(getFormData(values));
      if (req2.status === 250) {
        setIsEmailSent(true);
        resetForm();
      }
    } catch (e) {
      setIsEmailSent(false);
    }
    setLoading(false);
  };
  const { values, handleSubmit, handleChange, handleBlur, resetForm } =
    useFormik({
      initialValues: {
        name: '',
        email: '',
        message: '',
        subject: '',
        phone: '',
      },
      onSubmit,
    });
  return (
    <form id='dropMeForm' className='form-style-two' onSubmit={handleSubmit}>
      <div className='row'>
        <div className='col-md-6'>
          <div className='form-group'>
            <input
              type='text'
              id='name'
              name='name'
              className='form-control'
              placeholder='Full Name'
              required
              onBlur={handleBlur}
              onChange={handleChange}
              value={values?.name}
            />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='form-group'>
            <input
              type='text'
              id='phone'
              name='phone'
              className='form-control'
              placeholder='Phone'
              onBlur={handleBlur}
              onChange={handleChange}
              value={values?.phone}
            />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='form-group'>
            <input
              type='email'
              id='email'
              name='email'
              className='form-control'
              placeholder='Email Address'
              required
              onBlur={handleBlur}
              onChange={handleChange}
              value={values?.email}
            />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='form-group'>
            <input
              type='text'
              id='subject'
              name='subject'
              className='form-control'
              placeholder='Subject'
              required
              onBlur={handleBlur}
              onChange={handleChange}
              value={values?.subject}
            />
          </div>
        </div>
        <div className='col-md-12'>
          <div className='form-group'>
            <textarea
              name='message'
              id='message'
              className='form-control'
              rows={4}
              placeholder='Message'
              required
              onBlur={handleBlur}
              onChange={handleChange}
              value={values?.message}
            />
          </div>
        </div>
        <div className='col-md-12'>
          <div className='form-group pt-5 mb-0'>
            <button
              disabled={loading || isEmailSent}
              type='submit'
              className='theme-btn style-two'
            >
              {loading ? (
                <Spinner
                  size='sm'
                  className='m-2'
                  animation='border'
                  role='status'
                >
                  <span className='visually-hidden'>Loading...</span>
                </Spinner>
              ) : null}
              {!isEmailSent
                ? 'Send Message'
                : 'You message was well recieved. I will contact you shortly'}{' '}
              {!isEmailSent ? <i className='far fa-arrow-right' /> : null}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default ContactForm1;
