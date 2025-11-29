import { MapPin, Building, Tent, Home, AlertTriangle } from 'lucide-react';
import '../styles/Locations.css';

const Locations = () => {
    const locations = [
        {
            icon: <Building size={32} />,
            title: "Urban Outreach Centers",
            desc: "Located in major cities like Yaoundé and Douala, these centers serve as hubs for street children and the urban poor."
        },
        {
            icon: <MapPin size={32} />,
            title: "Rural Mission Fields",
            desc: "Reaching remote villages where access to basic needs and the Gospel is limited."
        },
        {
            icon: <AlertTriangle size={32} />,
            title: "Prisons",
            desc: "Regular visitation and support programs in central prisons across the country."
        },
        {
            icon: <Tent size={32} />,
            title: "IDP Camps",
            desc: "Providing relief and spiritual care in camps for Internally Displaced Persons affected by conflict."
        },
        {
            icon: <Home size={32} />,
            title: "Safe Homes",
            desc: "Residential facilities providing long-term care for orphans and rehabilitated youth."
        }
    ];

    return (
        <div className="locations-page">
            <div className="page-header">
                <div className="container">
                    <h1>Our Locations</h1>
                    <p>Spreading hope across the nation, from city streets to remote villages.</p>
                </div>
            </div>

            <section className="section map-section">
                <div className="container">
                    <div className="map-placeholder">
                        <div className="map-overlay">
                            <h2>Where We Serve</h2>
                            <p>MADES operates strategically to reach the most vulnerable populations.</p>
                        </div>
                        {/* Placeholder for map image */}
                        <div className="map-visual">
                            <MapPin size={48} className="map-pin pin-1" />
                            <MapPin size={48} className="map-pin pin-2" />
                            <MapPin size={48} className="map-pin pin-3" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section locations-list">
                <div className="container">
                    <div className="locations-grid">
                        {locations.map((loc, index) => (
                            <div key={index} className="location-card">
                                <div className="location-icon">{loc.icon}</div>
                                <div className="location-info">
                                    <h3>{loc.title}</h3>
                                    <p>{loc.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Locations;
