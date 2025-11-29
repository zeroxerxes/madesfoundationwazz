import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/Testimonies.css';

const TestimonialCarousel = ({ stories }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % stories.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 8000); // Auto-advance every 8 seconds
        return () => clearInterval(timer);
    }, [currentIndex]);

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    return (
        <div className="testimonial-carousel-container">
            <div className="carousel-wrapper">
                <button className="carousel-btn prev" onClick={prevSlide}>
                    <ChevronLeft size={24} />
                </button>

                <div className="carousel-content">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="carousel-card"
                        >
                            <div className="quote-icon"><Quote size={40} /></div>
                            <div className="story-text">
                                <p>"{stories[currentIndex].quote}"</p>
                            </div>
                            <div className="story-author">
                                <img src={stories[currentIndex].image} alt={stories[currentIndex].name} />
                                <div>
                                    <h4>{stories[currentIndex].name}</h4>
                                    <span>{stories[currentIndex].role}</span>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <button className="carousel-btn next" onClick={nextSlide}>
                    <ChevronRight size={24} />
                </button>
            </div>

            <div className="carousel-dots">
                {stories.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1);
                            setCurrentIndex(index);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default TestimonialCarousel;
