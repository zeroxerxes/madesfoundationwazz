import { Send } from 'lucide-react';
import '../styles/Prayer.css';

const Prayer = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Your prayer request has been sent. We are standing with you in faith.");
    };

    return (
        <div className="prayer-page">
            <div className="page-header">
                <div className="container">
                    <h1>Prayer Center</h1>
                    <p>"The effectual fervent prayer of a righteous man availeth much." — James 5:16</p>
                </div>
            </div>

            <section className="section prayer-points">
                <div className="container">
                    <div className="prayer-grid">
                        <div className="prayer-list">
                            <h2>Join Us in Prayer</h2>
                            <p>Please lift up these needs before the Throne of Grace:</p>
                            <ul>
                                <li>Pray for the salvation of street children and their protection from abuse.</li>
                                <li>Pray for provision to feed and clothe the hundreds of orphans in our care.</li>
                                <li>Pray for wisdom and strength for our volunteers and staff.</li>
                                <li>Pray for the healing of broken families and the restoration of hope.</li>
                                <li>Pray for open doors to reach more prisons and remote villages with the Gospel.</li>
                            </ul>
                        </div>

                        <div className="prayer-form-card">
                            <h2>Submit a Prayer Request</h2>
                            <p>How can we pray for you today?</p>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input type="text" placeholder="Your Name (Optional)" />
                                </div>
                                <div className="form-group">
                                    <textarea placeholder="Your Prayer Request" rows="5" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Send Request <Send size={16} style={{ marginLeft: '8px' }} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Prayer;
