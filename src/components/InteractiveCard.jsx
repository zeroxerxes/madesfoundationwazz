import { motion } from 'framer-motion';

const InteractiveCard = ({ children, className, onClick }) => {
    return (
        <motion.div
            className={className}
            onClick={onClick}
            whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                scale: 1.02
            }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            {children}
        </motion.div>
    );
};

export default InteractiveCard;
