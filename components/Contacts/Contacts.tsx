import style from './Contacts.module.scss';

function ContactForm() {
  return <section className={style.contact}>
    <h1>How I can help you?</h1>
    <form className={style.form}>
      <div className={style.controls}>
        <div className={style.control}>
          <label htmlFor="email">Your Email</label>
          <input id="email" type="email" required />
        </div>
        <div className={style.control}>
          <label htmlFor="name">Your Name</label>
          <input id="name" type="text" required />
        </div>
      </div>
      <div className={style.control}>
        <label htmlFor="message">Your Message</label>
        <textarea id="message" rows={5} />
      </div>
      <div className={style.actions}>
        <button>Send Message</button>
      </div>
    </form>
  </section>
}

export default ContactForm;