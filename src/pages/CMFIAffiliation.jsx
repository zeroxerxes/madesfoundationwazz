import { Globe, Book, Heart } from 'lucide-react';
import '../styles/CMFIAffiliation.css';

const CMFIAffiliation = () => {
    return (
        <div className="cmfi-page">
            <div className="page-header">
                <div className="container">
                    <h1>CMFI Affiliation</h1>
                    <p>Rooted in the global vision of Christian Missionary Fellowship International.</p>
                </div>
            </div>

            <section className="section cmfi-intro">
                <div className="container">
                    <div className="cmfi-grid">
                        <div className="cmfi-text">
                            <h2>Our Spiritual Covering</h2>
                            <p>
                                MADES operates as the Mercy Works Department of Christian Missionary Fellowship International (CMFI).
                                We are not an independent NGO but a ministry arm of the church, fulfilling the biblical mandate to care for the poor and needy.
                            </p>
                            <p>
                                Our work is an integral part of the church's goal to present the whole Gospel to the whole man—spirit, soul, and body.
                            </p>
                        </div>
                        <div className="cmfi-logo-placeholder">
                            {/* Placeholder for CMFI Logo */}
                            <Globe size={100} strokeWidth={1} />
                            <span>CMFI Worldwide</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section cmfi-vision">
                <div className="container">
                    <div className="vision-box">
                        <h2>The CMFI Vision</h2>
                        <p>
                            "To preach the Gospel to every creature, baptizing them in the name of the Father, the Son, and the Holy Spirit,
                            and teaching them to observe all things commanded by the Lord Jesus Christ."
                        </p>
                        <div className="vision-features">
                            <div className="feature">
                                <Book size={32} />
                                <span>Discipleship</span>
                            </div>
                            <div className="feature">
                                <Globe size={32} />
                                <span>World Missions</span>
                            </div>
                            <div className="feature">
                                <Heart size={32} />
                                <span>Mercy Works</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CMFIAffiliation;
