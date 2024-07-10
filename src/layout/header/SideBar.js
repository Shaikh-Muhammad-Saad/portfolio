import { useFormik } from 'formik';
import { Fragment, useState } from 'react';
import { Spinner } from 'react-bootstrap';

import sendEmail from '@/src/helpers/sendEmail';
import { getFormData } from '@/src/utils';
const SideBar = () => {
  const [loading, setLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const onSubmit = async (values) => {
    setLoading(true);
    try {
      const req = await sendEmail(getFormData(values));
      if (req.status === 250) {
        setIsEmailSent(true);
        resetForm();
        document.querySelector('body').classList.remove('side-content-visible');
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
      },
      onSubmit,
    });
  return (
    <Fragment>
      <div className='form-back-drop'></div>
      <section className='hidden-bar'>
        <div className='inner-box text-center'>
          <div className='cross-icon'>
            <span className='fa fa-times' />
          </div>
          <div className='title'>
            <h4>Get In Touch</h4>
          </div>
          {/*Appointment Form*/}
          <div className='appointment-form'>
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  name='name'
                  placeholder='Name'
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values?.name}
                />
              </div>
              <div className='form-group'>
                <input
                  type='email'
                  name='email'
                  placeholder='Email Address'
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values?.email}
                />
              </div>
              <div className='form-group'>
                <textarea
                  name='message'
                  placeholder='Message'
                  rows={5}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values?.message}
                />
              </div>
              <div className='form-group'>
                <button
                  disabled={loading || isEmailSent}
                  type='submit'
                  className='theme-btn'
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
                  ) : null}{' '}
                  {!isEmailSent
                    ? 'Submit now'
                    : 'You message was well recieved. I will contact you shortly'}{' '}
                </button>
              </div>
            </form>
          </div>
          {/*Social Icons*/}
          <div className='social-style-one'>
            <a href='#'>
              <i className='fab fa-twitter' />
            </a>
            <a href='#'>
              <i className='fab fa-facebook-f' />
            </a>
            <a href='#'>
              <i className='fab fa-instagram' />
            </a>
            <a href='#'>
              <i className='fab fa-pinterest-p' />
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default SideBar;
