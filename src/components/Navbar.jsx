import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        {
            title: 'About',
            links: [
                { name: 'About Us', path: '/about' },
                { name: 'Our Mission', path: '/mission' },
                { name: 'CMFI Affiliation', path: '/cmfi' },
                { name: 'Locations', path: '/locations' },
                { name: 'Partners', path: '/partners' },
            ]
        },
        {
            title: 'Our Work',
            links: [
                { name: 'Who We Serve', path: '/who-we-serve' },
                { name: 'Our Programs', path: '/programs' },
                { name: 'Testimonies', path: '/testimonies' },
                { name: 'Events', path: '/events' },
            ]
        },
        {
            title: 'Media',
            links: [
                { name: 'Gallery', path: '/gallery' },
            ]
        },
        {
            title: 'Get Involved',
            links: [
                { name: 'Volunteer', path: '/get-involved' },
                { name: 'Prayer', path: '/prayer' },
                { name: 'Contact', path: '/contact' },
                { name: 'FAQ', path: '/faq' },
            ]
        }
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="logo">
                    MADES
                    <span>House of Hope</span>
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu">
                    <Link to="/" className="nav-link">Home</Link>
                    {navLinks.map((group, index) => (
                        <div key={index} className="nav-group">
                            <button className="nav-group-btn">
                                {group.title} <ChevronDown size={14} />
                            </button>
                            <div className="dropdown">
                                {group.links.map((link, i) => (
                                    <Link key={i} to={link.path} className="dropdown-item">
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                    <Link to="/donate" className="btn btn-primary donate-btn">
                        Donate <Heart size={16} style={{ marginLeft: '5px', fill: 'currentColor' }} />
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mobile-menu"
                        >
                            <Link to="/" className="mobile-link">Home</Link>
                            {navLinks.map((group, index) => (
                                <div key={index} className="mobile-group">
                                    <div className="mobile-group-title">{group.title}</div>
                                    {group.links.map((link, i) => (
                                        <Link key={i} to={link.path} className="mobile-link sub-link">
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            ))}
                            <Link to="/donate" className="btn btn-primary mobile-donate">
                                Donate Now
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
