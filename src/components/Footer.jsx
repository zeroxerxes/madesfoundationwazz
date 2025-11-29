import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-col">
                    <h3 className="footer-logo">MADES</h3>
                    <p className="footer-desc">
                        Maison de l'Espoir / House of Hope. A Ministry of Mercy and a Mission of Love dedicated to serving the destitute and restoring hope.
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-icon"><Facebook size={20} /></a>
                        <a href="#" className="social-icon"><Instagram size={20} /></a>
                        <a href="#" className="social-icon"><Twitter size={20} /></a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul className="footer-links">
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/mission">Our Mission</Link></li>
                        <li><Link to="/programs">Our Programs</Link></li>
                        <li><Link to="/get-involved">Get Involved</Link></li>
                        <li><Link to="/donate">Donate</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Contact Us</h4>
                    <ul className="contact-info">
                        <li>
                            <Phone size={18} />
                            <span>+237 672 343 460</span>
                        </li>
                        <li>
                            <Mail size={18} />
                            <span>cmfimercyworksmades@gmail.com</span>
                        </li>
                        <li>
                            <MapPin size={18} />
                            <span>Nkollo II, Nkoabang, Yaoundé, Cameroun</span>
                        </li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Support the Mission</h4>
                    <p>Your support brings hope to the hopeless.</p>
                    <Link to="/donate" className="btn btn-secondary footer-btn">
                        Give Now <Heart size={16} style={{ marginLeft: '5px', fill: 'currentColor' }} />
                    </Link>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} MADES - CMFI Mercy Works Department. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
