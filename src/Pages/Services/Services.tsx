import { Box, Typography } from '@mui/material';
import MotionLine from '../../components/MotionLine';
import Contact from '../Contact/Contact';
import { motion } from 'framer-motion';
import { KeyboardDoubleArrowDown } from '@mui/icons-material';
import ServiceShowcase from './ServiceShowcase';
import ParallaxImage from '../../components/ParallaxImage';

function Services() {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: "black",
                    color: "white",
                    minHeight: "100vh",
                    p: "2rem",
                }}
            >
                <Box sx={{ mt: 8 }}>
                    <MotionLine color="white" />
                </Box>

                {/* Intro copy */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                    style={{ marginTop: '2rem' }}
                >
                    <Typography variant="h4">At Adimere</Typography>
                    <h1 className="responsive-heading">
                        We take pride in delivering<br />
                        measurable results in <br />
                        IT solutions, business<br />
                        strategy, and operations
                    </h1>
                    <KeyboardDoubleArrowDown className="responsive-icon" />
                </motion.div>

                <div style={{ marginTop: '100px' }}>
                    <ServiceShowcase />
                </div>

                {/* Responsive heading / icon styles */}
                <style>
                    {`
            .responsive-heading { font-size: 70px; line-height: 1.4em; }
            .responsive-icon   { font-size: 10rem; stroke: #ccc; stroke-width: 0.5; fill: none; }

            @media (max-width: 768px) {
              .responsive-heading { font-size: 40px; }
              .responsive-icon    { font-size: 5rem; }
            }
            @media (max-width: 480px) {
              .responsive-heading { font-size: 28px; }
              .responsive-icon    { font-size: 3rem; }
            }
          `}
                </style>
            </Box>
            <ParallaxImage
                image="https://static.wixstatic.com/media/c837a6_0ff8e923927c4f789f092e23597f2220~mv2.jpg/v1/fill/w_3264,h_1337,al_c,q_90,enc_avif,quality_auto/c837a6_0ff8e923927c4f789f092e23597f2220~mv2.jpg"
                text=" Innovation builds the tools, strategy charts the course but it’s people who create the change."
                author="-Inspired by visionary leaders"
            />
            <Contact />
        </>
    );
}

export default Services;