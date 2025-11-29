import { Heart, Cross, Sun } from 'lucide-react';
import '../styles/Mission.css';

const Mission = () => {
    return (
        <div className="mission-page">
            <div className="page-header">
                <div className="container">
                    <h1>Our Mission</h1>
                    <p>Driven by the Gospel to bring healing, hope, and restoration.</p>
                </div>
            </div>

            <section className="section mission-core">
                <div className="container">
                    <div className="mission-content">
                        <h2>The Heart of Our Work</h2>
                        <p>
                            At MADES, our mission is not merely humanitarian; it is deeply spiritual. We are called to be the hands and feet of Jesus to a hurting world.
                            We believe that true restoration comes when physical needs are met with spiritual truth.
                        </p>
                        <div className="mission-pillars">
                            <div className="pillar">
                                <div className="pillar-icon"><Cross size={32} /></div>
                                <h3>The Gospel</h3>
                                <p>Sharing the saving knowledge of Jesus Christ is our primary motivation. We disciple those we serve, leading them to eternal hope.</p>
                            </div>
                            <div className="pillar">
                                <div className="pillar-icon"><Heart size={32} /></div>
                                <h3>Healing</h3>
                                <p>We provide medical care, emotional support, and counseling to heal the wounds of the past—both physical and internal.</p>
                            </div>
                            <div className="pillar">
                                <div className="pillar-icon"><Sun size={32} /></div>
                                <h3>Restoration</h3>
                                <p>We work to reintegrate the marginalized back into society, equipping them with skills, education, and dignity.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section scripture-focus">
                <div className="container">
                    <blockquote>
                        "The Spirit of the Lord is upon me, because he hath anointed me to preach the gospel to the poor; he hath sent me to heal the brokenhearted, to preach deliverance to the captives, and recovering of sight to the blind, to set at liberty them that are bruised."
                    </blockquote>
                    <cite>— Luke 4:18</cite>
                </div>
            </section>
        </div>
    );
};

export default Mission;
