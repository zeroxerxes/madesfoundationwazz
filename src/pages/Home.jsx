import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight, Users, HandHeart, Globe } from 'lucide-react';
import HeroParticles from '../components/HeroParticles';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import InteractiveCard from '../components/InteractiveCard';
import CountUp from '../components/CountUp';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <HeroParticles />
                <div className="hero-content container">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Welcome to MADES <br />
                        <span className="subtitle">Maison de l'Espoir / House of Hope</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        A Ministry of Mercy. A Mission of Love.
                    </motion.p>
                    <motion.div
                        className="hero-btns"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Link to="/donate" className="btn btn-secondary">Donate Now</Link>
                        <Link to="/get-involved" className="btn btn-outline">Get Involved</Link>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="section intro-section">
                <div className="container">
                    <ScrollAnimationWrapper className="intro-grid">
                        <div className="intro-text">
                            <h2 className="section-heading">Restoring Hope to the Hopeless</h2>
                            <p>
                                MADES is dedicated to serving street children, orphans, widows, prisoners, IDPs, and the destitute.
                                We believe in the power of love to transform lives and communities.
                            </p>
                            <div className="scripture-box">
                                <blockquote>
                                    "Blessed is he that considereth the poor: the Lord will deliver him in time of trouble."
                                </blockquote>
                                <cite>— Psalm 41:1</cite>
                            </div>
                            <Link to="/about" className="learn-more-link">
                                Read Our Story <ArrowRight size={16} />
                            </Link>
                        </div>
                        <div className="intro-image">
                            <img src="/content/IMG-20251031-WA0005.jpg" alt="MADES Outreach" />
                        </div>
                    </ScrollAnimationWrapper>
                </div>
            </section>

            {/* Impact Stats / Highlights */}
            <section className="section stats-section">
                <div className="container">
                    <ScrollAnimationWrapper className="stats-grid">
                        <InteractiveCard className="stat-card">
                            <Users size={40} />
                            <h3 className="stat-number"><CountUp end={500} suffix="+" /></h3>
                            <h4>Children Served</h4>
                            <p>Providing shelter, education, and love to orphans and street kids.</p>
                        </InteractiveCard>
                        <InteractiveCard className="stat-card">
                            <HandHeart size={40} />
                            <h3 className="stat-number"><CountUp end={250} suffix="+" /></h3>
                            <h4>Widows Supported</h4>
                            <p>Empowering widows with skills and resources for self-sustainment.</p>
                        </InteractiveCard>
                        <InteractiveCard className="stat-card">
                            <Globe size={40} />
                            <h3 className="stat-number"><CountUp end={15} suffix="+" /></h3>
                            <h4>Communities Reached</h4>
                            <p>Spreading the Gospel and aid to prisons and rural areas.</p>
                        </InteractiveCard>
                    </ScrollAnimationWrapper>
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta-section">
                <div className="container">
                    <ScrollAnimationWrapper>
                        <h2>Join Us in Making a Difference</h2>
                        <p>Your support can change a life today. Whether you volunteer your time or give financially, you are part of the mission.</p>
                        <div className="cta-btns">
                            <Link to="/donate" className="btn btn-primary">Donate Today</Link>
                            <Link to="/volunteer" className="btn btn-white">Become a Volunteer</Link>
                        </div>
                    </ScrollAnimationWrapper>
                </div>
            </section>
        </div>
    );
};

export default Home;
