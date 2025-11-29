import { BookOpen, Utensils, Stethoscope, Briefcase, Home, Users, Heart } from 'lucide-react';
import '../styles/Programs.css';

const Programs = () => {
    const programs = [
        {
            icon: <BookOpen size={32} />,
            title: "Evangelism & Discipleship",
            desc: "The core of our ministry. We share the Gospel and provide ongoing spiritual mentorship to ground beneficiaries in the faith."
        },
        {
            icon: <Utensils size={32} />,
            title: "Food & Basic Needs",
            desc: "Fighting hunger and lack by distributing food, clothing, and hygiene essentials to those who have nothing."
        },
        {
            icon: <Stethoscope size={32} />,
            title: "Medical Outreach",
            desc: "Providing basic healthcare, screenings, and medication to communities with limited access to medical services."
        },
        {
            icon: <Briefcase size={32} />,
            title: "Vocational Training",
            desc: "Equipping youth and widows with practical skills (tailoring, carpentry, agriculture) to achieve financial independence."
        },
        {
            icon: <Users size={32} />,
            title: "Reintegration Support",
            desc: "Helping former prisoners and street children reconcile with families and find their place back in society."
        },
        {
            icon: <Home size={32} />,
            title: "Shelter & Temporary Care",
            desc: "Offering a safe haven for those in immediate danger or without a roof over their heads."
        },
        {
            icon: <Heart size={32} />,
            title: "Community Support",
            desc: "Building stronger communities through development projects and support networks."
        }
    ];

    return (
        <div className="programs-page">
            <div className="page-header">
                <div className="container">
                    <h1>Our Programs</h1>
                    <p>Holistic initiatives designed to transform lives and communities.</p>
                </div>
            </div>

            <section className="section programs-list">
                <div className="container">
                    <div className="programs-grid">
                        {programs.map((program, index) => (
                            <div key={index} className="program-card">
                                <div className="program-icon-wrapper">
                                    {program.icon}
                                </div>
                                <div className="program-content">
                                    <h3>{program.title}</h3>
                                    <p>{program.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Programs;
