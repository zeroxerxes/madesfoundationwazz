import { motion } from 'framer-motion';
import { CheckCircle, Heart, Target, Eye } from 'lucide-react';
import ParallaxSection from '../components/ParallaxSection';
import '../styles/About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="page-header">
                <div className="container">
                    <h1>About Us</h1>
                    <p>Discover the heart behind MADES and our journey of mercy.</p>
                </div>
            </div>

            <section className="section about-story">
                <div className="container">
                    <div className="story-grid">
                        <ParallaxSection speed={-0.3} className="story-image">
                            <img src="/content/IMG-20251031-WA0007.jpg" alt="MADES Team" />
                        </ParallaxSection>
                        <div className="story-content">
                            <h2>Our Story</h2>
                            <p>
                                MADES (Maison de l'Espoir / House of Hope) was born out of a divine burden to care for the forgotten and the destitute.
                                Operating under the Mercy Works Department of Christian Missionary Fellowship International (CMFI), we are an extension of God's hands to the brokenhearted.
                            </p>
                            <p>
                                What started as a small outreach has grown into a ministry that touches the lives of street children, orphans, widows, and prisoners across the nation.
                                We believe that every soul matters to God, and no one is beyond the reach of His love.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section vision-mission">
                <div className="container">
                    <div className="vm-grid">
                        <div className="vm-card">
                            <Eye size={40} className="vm-icon" />
                            <h3>Our Vision</h3>
                            <p>To see a world where the destitute find hope, the broken find healing, and every life is transformed by the Gospel of Jesus Christ.</p>
                        </div>
                        <div className="vm-card">
                            <Target size={40} className="vm-icon" />
                            <h3>Our Mission</h3>
                            <p>To provide holistic care—spiritual, physical, and emotional—to the most vulnerable in society, restoring their dignity and guiding them to their God-given potential.</p>
                        </div>
                        <div className="vm-card">
                            <Heart size={40} className="vm-icon" />
                            <h3>Our Values</h3>
                            <ul>
                                <li><CheckCircle size={16} /> Compassion</li>
                                <li><CheckCircle size={16} /> Integrity</li>
                                <li><CheckCircle size={16} /> Excellence</li>
                                <li><CheckCircle size={16} /> Faith</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section cmfi-section">
                <div className="container">
                    <div className="cmfi-content">
                        <h2>A Ministry of CMFI</h2>
                        <p>
                            As the Mercy Works Department of Christian Missionary Fellowship International, MADES aligns with the global vision of CMFI to preach the Gospel to every creature.
                            Our work is the practical demonstration of that Gospel—faith in action.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
