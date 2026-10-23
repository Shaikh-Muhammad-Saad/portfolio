import { useState } from 'react';
import {
  LuAlertCircle,
  LuArrowRight,
  LuCheck,
  LuLoader2,
} from 'react-icons/lu';

import styles from './ContactForm.module.css';

import { site } from '../data/site';
import sendEmail from '../helpers/sendEmail';
import { getFormData } from '../utils';

const EMPTY = { name: '', email: '', phone: '', subject: '', message: '' };

const Field = ({
  name,
  label,
  value,
  onChange,
  type = 'text',
  required,
  textarea,
  autoComplete,
}) => {
  const Tag = textarea ? 'textarea' : 'input';
  return (
    <label className={`${styles.field} ${textarea ? styles.full : ''}`}>
      <Tag
        name={name}
        type={textarea ? undefined : type}
        rows={textarea ? 5 : undefined}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        placeholder=' '
        className={styles.control}
      />
      <span className={styles.label}>
        {label}
        {required ? null : <em> (optional)</em>}
      </span>
    </label>
  );
};

const ContactForm = () => {
  const [values, setValues] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const onChange = (e) =>
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await sendEmail(getFormData(values));
      if (res.status >= 200 && res.status < 300) {
        setStatus('sent');
        setValues(EMPTY);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className={styles.success} role='status'>
        <span className={styles.successIcon}>
          <LuCheck />
        </span>
        <h3>Message sent!</h3>
        <p>Your message was well received. I will contact you shortly.</p>
        <button
          type='button'
          className='btn btn-ghost btn-sm'
          onClick={() => setStatus('idle')}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.grid}>
        <Field
          name='name'
          label='Full name'
          value={values.name}
          onChange={onChange}
          required
          autoComplete='name'
        />
        <Field
          name='email'
          label='Email address'
          type='email'
          value={values.email}
          onChange={onChange}
          required
          autoComplete='email'
        />
        <Field
          name='phone'
          label='Phone'
          type='tel'
          value={values.phone}
          onChange={onChange}
          autoComplete='tel'
        />
        <Field
          name='subject'
          label='Subject'
          value={values.subject}
          onChange={onChange}
          required
        />
        <Field
          name='message'
          label='Tell me about your project'
          value={values.message}
          onChange={onChange}
          required
          textarea
        />
      </div>

      {status === 'error' ? (
        <p className={styles.error} role='alert'>
          <LuAlertCircle /> Something went wrong. Please try again or email me
          at <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      ) : null}

      <button
        type='submit'
        className={`btn btn-primary ${styles.submit}`}
        disabled={status === 'sending'}
      >
        {status === 'sending' ? (
          <>
            <LuLoader2 className={styles.spin} /> Sending...
          </>
        ) : (
          <>
            Send message <LuArrowRight />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
