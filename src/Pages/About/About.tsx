import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { KeyboardDoubleArrowDown } from '@mui/icons-material';
import MotionLine from '../../components/MotionLine';
import InfoCard from './InfoCard';
import Contact from '../Contact/Contact';
import ParallaxImage from '../../components/ParallaxImage';

function About() {
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
                        We are a team of <br />
                        seasoned professionals  <br />
                        delivering IT services and <br />
                        business consulting excellence
                    </h1>
                    <KeyboardDoubleArrowDown className="responsive-icon" />
                </motion.div>

                <InfoCard />

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
                image="https://static.wixstatic.com/media/c837a6_7635659d6dbc4f81a999fea168e5594b~mv2.jpg/v1/fill/w_3456,h_1181,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_7635659d6dbc4f81a999fea168e5594b~mv2.jpg"
                text="Technology can open the door, strategy can show the way — but it’s people who turn vision into results."
                author="-Inspired by modern business leaders"
            />

            <Contact />
        </>
    );
}

export default About;