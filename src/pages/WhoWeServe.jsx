import { User, Users, Baby, Home, HeartHandshake, Gavel, AlertCircle } from 'lucide-react';
import '../styles/WhoWeServe.css';

const WhoWeServe = () => {
    const groups = [
        {
            icon: <Baby size={40} />,
            title: "Street Children & Orphans",
            desc: "Children abandoned or forced onto the streets due to poverty or tragedy. We provide them with safety, love, and a pathway to a future."
        },
        {
            icon: <Users size={40} />,
            title: "Abandoned Youth",
            desc: "Young people left without guidance or support. We offer mentorship and vocational training to help them stand on their own feet."
        },
        {
            icon: <Home size={40} />,
            title: "IDPs (Internally Displaced Persons)",
            desc: "Families displaced by conflict or crisis. We provide emergency relief, temporary shelter, and trauma counseling."
        },
        {
            icon: <HeartHandshake size={40} />,
            title: "Widows & Single Mothers",
            desc: "Women facing the burden of raising families alone. We empower them with skills and resources to sustain their households."
        },
        {
            icon: <Gavel size={40} />,
            title: "Prisoners & Ex-Convicts",
            desc: "Those incarcerated or recently released. We bring the Gospel of forgiveness and support their reintegration into society."
        },
        {
            icon: <AlertCircle size={40} />,
            title: "The Destitute",
            desc: "Anyone found in a state of absolute lack. We serve as a safety net, ensuring no one is left to perish in hopelessness."
        }
    ];

    return (
        <div className="serve-page">
            <div className="page-header">
                <div className="container">
                    <h1>Who We Serve</h1>
                    <p>Reaching out to the most vulnerable and marginalized in our society.</p>
                </div>
            </div>

            <section className="section serve-intro">
                <div className="container">
                    <div className="serve-intro-content">
                        <h2>Why We Step In</h2>
                        <p>
                            In a world where many are forgotten, MADES stands as a beacon of hope. We believe that every individual, regardless of their circumstances, carries the image of God.
                            Our mandate is to seek out those who have been cast aside and show them that they are seen, loved, and valued.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section groups-section">
                <div className="container">
                    <div className="groups-grid">
                        {groups.map((group, index) => (
                            <div key={index} className="group-card">
                                <div className="group-icon">{group.icon}</div>
                                <h3>{group.title}</h3>
                                <p>{group.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhoWeServe;
