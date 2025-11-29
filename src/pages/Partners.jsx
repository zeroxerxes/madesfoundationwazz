import { Link } from 'react-router-dom';
import { Church, Users, Building2, Handshake } from 'lucide-react';
import '../styles/Partners.css';

const Partners = () => {
    return (
        <div className="partners-page">
            <div className="page-header">
                <div className="container">
                    <h1>Our Partners</h1>
                    <p>Together, we can do more. Join hands with us to serve humanity.</p>
                </div>
            </div>

            <section className="section partner-intro">
                <div className="container">
                    <div className="partner-content">
                        <h2>Why Partner With Us?</h2>
                        <p>
                            Partnership is the fuel that keeps the engine of mercy running. By partnering with MADES, you are not just giving money;
                            you are becoming a co-laborer in the harvest field. Your support enables us to plan long-term projects, respond quickly to emergencies,
                            and expand our reach to more destitute communities.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section partner-types">
                <div className="container">
                    <div className="types-grid">
                        <div className="type-card">
                            <Church size={48} className="type-icon" />
                            <h3>Churches</h3>
                            <p>Local assemblies can adopt a project, support missionaries, or organize mission trips to serve with us.</p>
                        </div>
                        <div className="type-card">
                            <Users size={48} className="type-icon" />
                            <h3>Individuals</h3>
                            <p>Become a monthly supporter or sponsor a specific child. Your personal commitment changes lives.</p>
                        </div>
                        <div className="type-card">
                            <Building2 size={48} className="type-icon" />
                            <h3>Organizations & NGOs</h3>
                            <p>Corporate bodies and other non-profits can collaborate with us for large-scale impact and development projects.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section partner-cta">
                <div className="container">
                    <div className="cta-box">
                        <Handshake size={64} className="cta-icon" />
                        <h2>Become a Partner Today</h2>
                        <p>
                            We invite you to join this movement of love. Contact us to discuss how we can partner together for the glory of God.
                        </p>
                        <Link to="/contact" className="btn btn-primary">Contact Us to Partner</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Partners;
