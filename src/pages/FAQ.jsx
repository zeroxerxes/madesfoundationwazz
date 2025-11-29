import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import '../styles/FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What is MADES?",
            answer: "MADES (Maison de l’Espoir / House of Hope) is a Ministry of Mercy under Christian Missionary Fellowship International (CMFI). We are dedicated to serving the destitute, including street children, orphans, widows, and prisoners."
        },
        {
            question: "How can I donate?",
            answer: "You can donate via bank transfer, mobile money, or by dropping off material items at our centers. Visit our Donate page for more details."
        },
        {
            question: "How do I volunteer?",
            answer: "We welcome volunteers who have a heart for service. You can sign up by contacting us through our Get Involved page. We have opportunities in teaching, medical care, outreach, and more."
        },
        {
            question: "Where does MADES operate?",
            answer: "We are based in Yaoundé, Cameroon, but our operations extend to other cities, rural villages, and prisons across the nation."
        },
        {
            question: "Is MADES a registered organization?",
            answer: "Yes, MADES operates as a department within CMFI, which is a registered religious organization in Cameroon and many other nations."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-page">
            <div className="page-header">
                <div className="container">
                    <h1>Frequently Asked Questions</h1>
                    <p>Find answers to common questions about our ministry and operations.</p>
                </div>
            </div>

            <section className="section faq-section">
                <div className="container">
                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="faq-question">
                                    <h3>{faq.question}</h3>
                                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
