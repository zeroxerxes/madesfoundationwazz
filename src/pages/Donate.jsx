import { Heart, Gift, Calendar, Package, CheckCircle } from 'lucide-react';
import '../styles/Donate.css';

const Donate = () => {
    return (
        <div className="donate-page">
            <div className="page-header">
                <div className="container">
                    <h1>Donate</h1>
                    <p>Your generosity restores hope and transforms lives.</p>
                </div>
            </div>

            <section className="section why-give">
                <div className="container">
                    <div className="give-grid">
                        <div className="give-content">
                            <h2>Why Your Giving Matters</h2>
                            <p>
                                Every donation to MADES goes directly towards serving the destitute. We believe in transparency and stewardship.
                                Your support provides food for the hungry, medicine for the sick, and the Gospel to the lost.
                            </p>
                            <ul className="impact-list">
                                <li><CheckCircle size={20} /> <strong>$30</strong> feeds a street child for a month.</li>
                                <li><CheckCircle size={20} /> <strong>$50</strong> provides medical care for a widow.</li>
                                <li><CheckCircle size={20} /> <strong>$100</strong> sponsors vocational training for a youth.</li>
                            </ul>
                        </div>
                        <div className="give-image">
                            <img src="/content/IMG-20251031-WA0011.jpg" alt="Happy Children" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section giving-options">
                <div className="container">
                    <h2 className="section-title-center">Ways to Give</h2>
                    <div className="options-grid">
                        <div className="option-card">
                            <Gift size={40} className="option-icon" />
                            <h3>One-Time Gift</h3>
                            <p>Make an immediate impact today. Every amount counts.</p>
                            <button className="btn btn-primary">Give Once</button>
                        </div>
                        <div className="option-card featured">
                            <Calendar size={40} className="option-icon" />
                            <h3>Monthly Partner</h3>
                            <p>Sustain the mission with consistent support. Become a pillar of hope.</p>
                            <button className="btn btn-secondary">Give Monthly</button>
                        </div>
                        <div className="option-card">
                            <Package size={40} className="option-icon" />
                            <h3>Material Donations</h3>
                            <p>We accept clothes, food, medicine, and educational materials.</p>
                            <button className="btn btn-primary">Donate Items</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bank-details">
                <div className="container">
                    <div className="bank-card">
                        <h3>Bank Transfer Details</h3>
                        <p>You can also give directly via bank transfer:</p>
                        <div className="bank-info">
                            <p><strong>Bank Name:</strong> [Bank Name]</p>
                            <p><strong>Account Name:</strong> MADES - CMFI</p>
                            <p><strong>Account Number:</strong> [Account Number]</p>
                            <p><strong>Swift Code:</strong> [Swift Code]</p>
                        </div>
                        <p className="note">Please contact us after making a transfer so we can acknowledge your gift.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Donate;
