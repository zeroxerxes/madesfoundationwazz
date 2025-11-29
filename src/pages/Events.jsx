import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import '../styles/Events.css';

const Events = () => {
    const events = [
        {
            title: "Annual Medical Outreach",
            date: "December 15, 2025",
            time: "08:00 AM - 05:00 PM",
            location: "Mbalmayo Prison",
            desc: "Providing free medical consultations, dental care, and medication to inmates. We will also be sharing the Gospel and distributing hygiene kits.",
            image: "/content/IMG-20251031-WA0037.jpg"
        },
        {
            title: "Christmas for Street Kids",
            date: "December 24, 2025",
            time: "02:00 PM - 06:00 PM",
            location: "Yaoundé City Center",
            desc: "A special celebration for street children with food, games, gifts, and the story of Jesus' birth. Join us to bring joy to these little ones.",
            image: "/content/IMG-20251031-WA0032.jpg"
        },
        {
            title: "Widows' Empowerment Workshop",
            date: "January 10, 2026",
            time: "09:00 AM - 01:00 PM",
            location: "MADES HQ, Yaoundé",
            desc: "Training widows in soap making and small business management. This program aims to help them become self-reliant.",
            image: "/content/IMG-20251031-WA0040.jpg"
        }
    ];

    return (
        <div className="events-page">
            <div className="page-header">
                <div className="container">
                    <h1>Events & Outreach</h1>
                    <p>Join us on the field. See faith in action.</p>
                </div>
            </div>

            <section className="section events-list">
                <div className="container">
                    <div className="events-grid">
                        {events.map((event, index) => (
                            <div key={index} className="event-card">
                                <div className="event-image">
                                    <img src={event.image} alt={event.title} />
                                    <div className="event-date-badge">
                                        <span>{event.date.split(' ')[0]}</span>
                                        <strong>{event.date.split(' ')[1].replace(',', '')}</strong>
                                    </div>
                                </div>
                                <div className="event-content">
                                    <h3>{event.title}</h3>
                                    <div className="event-meta">
                                        <span><Clock size={16} /> {event.time}</span>
                                        <span><MapPin size={16} /> {event.location}</span>
                                    </div>
                                    <p>{event.desc}</p>
                                    <button className="btn-link">Learn More <ArrowRight size={16} /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Events;
