import { useRef } from 'react';
import emailjs from '@emailjs/browser'; // Add the missing import statement

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
         e.preventDefault();
        emailjs.sendForm('service_pvxerd9', 'contact_form', form.current, {
            publicKey: "05pKNUg9Q3T2T8Ez2",
        })
            .then(() => {
                console.log('Email sent successfully');
            })
            .catch((err) => {
                console.log('Email did not send', err);
            });
    };

    return (
        <section id='contact'>
            <h3 className='text-center'>Get in Touch</h3>
            <div className= " contact-card" >
            
            <form ref={form} onSubmit={sendEmail}>
                <div className='mb-4 ms-4 row get-in-touch'>
                    <label className='form-label'>Name</label>
                    <input type="text" className='form-control form-change' 
                    
                    name="user_name" />
                </div>
                <div className='mb-4 ms-4 row get-in-touch' >
                    <label>Email</label>
                    <input className='form-control form-change' type="email" name="user_email"  />
                </div>
                <div className='mb-4 ms-4 row get-in-touch'>
                    <label htmlFor="" className='mb-2 '>Message</label>
                    <textarea name="message" className='form-change' id="" cols="30" rows="10"></textarea>
                </div>
                <button className='btn btn-primary ms-4 mb-4' type="submit" value="Send">Submit</button>
            </form>
            </div>
            <style>
                {'.form-change {width: 90%;}'}
            </style>
        </section>
    )}
