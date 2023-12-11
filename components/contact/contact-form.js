import classes from "./contact-form.module.css";
import { useRef } from "react";

export default function ContactForm() {
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();

  function sendMessageHandler(event) {
    event.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const message = messageRef.current.value;
    console.log(email, name, message);

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ email, name, message }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required ref={nameRef} />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows={5} ref={messageRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button onClick={sendMessageHandler}>Send Message</button>
        </div>
      </form>
    </section>
  );
}
