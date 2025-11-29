import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Gallery.css';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        "/content/IMG-20251031-WA0001.jpg",
        "/content/IMG-20251031-WA0002.jpg",
        "/content/IMG-20251031-WA0003.jpg",
        "/content/IMG-20251031-WA0004.jpg",
        "/content/IMG-20251031-WA0005.jpg",
        "/content/IMG-20251031-WA0006.jpg",
        "/content/IMG-20251031-WA0007.jpg",
        "/content/IMG-20251031-WA0008.jpg",
        "/content/IMG-20251031-WA0009.jpg",
        "/content/IMG-20251031-WA0010.jpg",
        "/content/IMG-20251031-WA0011.jpg",
        "/content/IMG-20251031-WA0012.jpg",
        "/content/IMG-20251031-WA0013.jpg",
        "/content/IMG-20251031-WA0014.jpg",
        "/content/IMG-20251031-WA0015.jpg",
        "/content/IMG-20251031-WA0016.jpg",
        "/content/IMG-20251031-WA0017.jpg",
        "/content/IMG-20251031-WA0018.jpg",
        "/content/IMG-20251031-WA0019.jpg",
        "/content/IMG-20251031-WA0020.jpg",
    ];

    return (
        <div className="gallery-page">
            <div className="page-header">
                <div className="container">
                    <h1>Media Gallery</h1>
                    <p>Moments of grace, joy, and service captured in time.</p>
                </div>
            </div>

            <section className="section gallery-section">
                <div className="container">
                    <div className="gallery-grid">
                        {images.map((src, index) => (
                            <motion.div
                                key={index}
                                className="gallery-item"
                                whileHover={{ scale: 1.02 }}
                                onClick={() => setSelectedImage(src)}
                            >
                                <img src={src} alt={`Gallery ${index + 1}`} loading="lazy" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <button className="close-btn" onClick={() => setSelectedImage(null)}>
                            <X size={32} />
                        </button>
                        <motion.img
                            src={selectedImage}
                            alt="Full size"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
