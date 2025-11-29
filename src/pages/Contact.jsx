import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Twitter } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message! We will get back to you soon.");
    };

    return (
        <div className="contact-page">
            <div className="page-header">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>We'd love to hear from you. Reach out with any questions or to get involved.</p>
                </div>
            </div>

            <section className="section contact-content">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info-col">
                            <h2>Get in Touch</h2>
                            <p>
                                Whether you have a question about our programs, want to volunteer, or just want to say hello, we are here for you.
                            </p>

                            <div className="info-item">
                                <div className="info-icon"><Phone size={24} /></div>
                                <div>
                                    <h3>Phone</h3>
                                    <p>+237 672 343 460</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon"><MessageCircle size={24} /></div>
                                <div>
                                    <h3>WhatsApp</h3>
                                    <p>+237 672 343 460</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon"><Mail size={24} /></div>
                                <div>
                                    <h3>Email</h3>
                                    <p>cmfimercyworksmades@gmail.com</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon"><MapPin size={24} /></div>
                                <div>
                                    <h3>Headquarters Address</h3>
                                    <p>Nkollo II, Nkoabang, Yaoundé, Cameroun</p>
                                </div>
                            </div>

                            <div className="social-connect">
                                <h3>Follow Us</h3>
                                <div className="social-icons">
                                    <a href="#"><Facebook /></a>
                                    <a href="#"><Instagram /></a>
                                    <a href="#"><Twitter /></a>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-col">
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <h3>Send a Message</h3>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" placeholder="Your Name" required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" placeholder="Your Email" required />
                                </div>
                                <div className="form-group">
                                    <label>Subject</label>
                                    <input type="text" placeholder="Subject" required />
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea placeholder="Your Message" rows="5" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
