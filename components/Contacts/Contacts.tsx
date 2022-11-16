import React, { useRef } from 'react';
import Notification from '../Notification/Notification';
import style from './Contacts.module.scss';
import { useNotification } from '../../hooks/useNotification';

const sendMessage = async (email: string, name: string, message: string) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify({
      email,
      name,
      message,
    }),
    headers: {
      'Content-Type': 'application/json',
    }
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
}

function ContactForm() {
  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const nameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const messageRef = useRef() as React.MutableRefObject<HTMLTextAreaElement>;

  const [notification, setRequestStatus] = useNotification();

  const handleSubmit = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    try {
      setRequestStatus('pending');
      const email = emailRef!.current!.value;
      const name = nameRef!.current!.value;
      const message = messageRef!.current!.value;

      await sendMessage(email, name, message);
      setRequestStatus('success');
    } catch (e) {
      setRequestStatus('error');
    }

    emailRef!.current!.value = '';
    nameRef!.current!.value = '';
    messageRef!.current!.value = '';
  }

  return <section className={style.contact}>
    <h1>How I can help you?</h1>
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.controls}>
        <div className={style.control}>
          <label htmlFor="email">Your Email</label>
          <input ref={emailRef} id="email" type="email" required />
        </div>
        <div className={style.control}>
          <label htmlFor="name">Your Name</label>
          <input ref={nameRef} id="name" type="text" required />
        </div>
      </div>
      <div className={style.control}>
        <label htmlFor="message">Your Message</label>
        <textarea ref={messageRef} id="message" rows={5} required />
      </div>
      <div className={style.actions}>
        <button>Send Message</button>
      </div>
    </form>
    {notification && <Notification
      status={notification.status}
      title={notification.title}
      message={notification.message}
    />}
  </section>
}

export default ContactForm;