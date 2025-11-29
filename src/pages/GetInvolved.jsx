import { Link } from 'react-router-dom';
import { HandHeart, Heart, Users, MessageCircle, Share2 } from 'lucide-react';
import '../styles/GetInvolved.css';

const GetInvolved = () => {
    return (
        <div className="involved-page">
            <div className="page-header">
                <div className="container">
                    <h1>Get Involved</h1>
                    <p>You can be the miracle someone is praying for. Join us in this mission of love.</p>
                </div>
            </div>

            <section className="section ways-to-help">
                <div className="container">
                    <div className="ways-grid">
                        <div className="way-card">
                            <Heart size={48} className="way-icon" />
                            <h3>Donate</h3>
                            <p>Your financial support fuels every aspect of our ministry, from food to medical care.</p>
                            <Link to="/donate" className="btn btn-primary">Give Now</Link>
                        </div>
                        <div className="way-card">
                            <HandHeart size={48} className="way-icon" />
                            <h3>Volunteer</h3>
                            <p>Share your time and skills. Whether it's teaching, medical care, or just spending time with the kids.</p>
                            <Link to="/contact" className="btn btn-outline-primary">Volunteer</Link>
                        </div>
                        <div className="way-card">
                            <Users size={48} className="way-icon" />
                            <h3>Partner</h3>
                            <p>Churches, organizations, and businesses can partner with us for long-term impact.</p>
                            <Link to="/partners" className="btn btn-outline-primary">Partner With Us</Link>
                        </div>
                        <div className="way-card">
                            <MessageCircle size={48} className="way-icon" />
                            <h3>Pray</h3>
                            <p>Prayer is the backbone of our work. Join our prayer team and intercede for the lost and broken.</p>
                            <Link to="/prayer" className="btn btn-outline-primary">Join Prayer Team</Link>
                        </div>
                        <div className="way-card">
                            <Share2 size={48} className="way-icon" />
                            <h3>Advocate</h3>
                            <p>Be a voice for the voiceless. Share our stories and raise awareness in your community.</p>
                            <a href="#" className="btn btn-outline-primary">Share Our Story</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section volunteer-cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Make a Difference?</h2>
                        <p>
                            "The harvest is plentiful, but the laborers are few." Your hands and heart are needed here.
                            Contact us today to find out how you can serve.
                        </p>
                        <Link to="/contact" className="btn btn-secondary">Contact Us Today</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GetInvolved;
