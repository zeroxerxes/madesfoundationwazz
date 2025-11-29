import { Quote } from 'lucide-react';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import InteractiveCard from '../components/InteractiveCard';
import '../styles/Testimonies.css';

const Testimonies = () => {
    const stories = [
        {
            name: "Jean-Paul",
            role: "Former Street Child",
            image: "/content/IMG-20251031-WA0008.jpg",
            quote: "I thought my life was over before it began. Living on the streets, I had no hope. MADES gave me a home, an education, and introduced me to the love of Jesus. Now, I am studying to become a teacher.",
        },
        {
            name: "Sarah",
            role: "Widow & Beneficiary",
            image: "/content/IMG-20251031-WA0012.jpg",
            quote: "When my husband died, I didn't know how I would feed my children. MADES didn't just give me food; they taught me how to sew. Today, I run my own small business and can provide for my family.",
        },
        {
            name: "Michel",
            role: "Ex-Convict",
            image: "/content/IMG-20251031-WA0015.jpg",
            quote: "Society rejected me, but MADES visited me in prison. They showed me that God had not forgotten me. Their reintegration support helped me start a new life of dignity and purpose.",
        },
        {
            name: "Grace",
            role: "Orphan",
            image: "/content/IMG-20251031-WA0010.jpg",
            quote: "After losing my parents, I felt alone in the world. MADES became my family. They gave me shelter, love, and hope for the future. I now dream of becoming a nurse to help others.",
        },
        {
            name: "Emmanuel",
            role: "IDP Beneficiary",
            image: "/content/IMG-20251031-WA0006.jpg",
            quote: "When conflict forced us to flee our village, we had nothing. MADES provided food, shelter, and most importantly, reminded us that we are not forgotten. Their support gave us strength to rebuild.",
        },
        {
            name: "Marie",
            role: "Vocational Training Graduate",
            image: "/content/IMG-20251031-WA0014.jpg",
            quote: "I never thought I could learn a skill. MADES believed in me when I didn't believe in myself. After their training program, I now have my own tailoring business and can support my children.",
        }
    ];

    return (
        <div className="testimonies-page">
            <div className="page-header">
                <div className="container">
                    <h1>Testimonies</h1>
                    <p>Real stories of transformation, healing, and God's restoring power.</p>
                </div>
            </div>

            <section className="section stories-section">
                <div className="container">
                    <ScrollAnimationWrapper>
                        <div className="intro-text">
                            <Quote size={48} className="quote-icon-large" />
                            <h2>Lives Transformed by Love</h2>
                            <p>
                                These are not just stories—they are testimonies of God's faithfulness and the power of compassion.
                                Each life touched by MADES is a reminder that hope is real, and transformation is possible.
                            </p>
                        </div>
                    </ScrollAnimationWrapper>

                    <div className="stories-grid">
                        {stories.map((story, index) => (
                            <ScrollAnimationWrapper key={index}>
                                <InteractiveCard className="story-card">
                                    <div className="story-image">
                                        <img src={story.image} alt={story.name} />
                                        <div className="story-overlay">
                                            <Quote size={40} />
                                        </div>
                                    </div>
                                    <div className="story-content">
                                        <div className="story-text">
                                            <p>"{story.quote}"</p>
                                        </div>
                                        <div className="story-author">
                                            <h4>{story.name}</h4>
                                            <span>{story.role}</span>
                                        </div>
                                    </div>
                                </InteractiveCard>
                            </ScrollAnimationWrapper>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section cta-testimony">
                <div className="container">
                    <ScrollAnimationWrapper>
                        <h2>Your Story Can Change Too</h2>
                        <p>If you or someone you know needs help, reach out to us. Every story of hope starts with a single step.</p>
                        <div className="cta-btns">
                            <a href="/contact" className="btn btn-secondary">Contact Us</a>
                            <a href="/get-involved" className="btn btn-outline">Get Involved</a>
                        </div>
                    </ScrollAnimationWrapper>
                </div>
            </section>
        </div>
    );
};

export default Testimonies;
