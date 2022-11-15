import { useRef } from 'react';
import style from './Contacts.module.scss';

function ContactForm() {
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        email: emailRef!.current!.value,
        name: nameRef!.current!.value,
        message: messageRef!.current!.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    });

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
  </section>
}

export default ContactForm;