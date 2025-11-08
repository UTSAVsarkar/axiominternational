import React, { useRef } from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { motion, Transition, useScroll, useSpring, useTransform, Variants } from 'framer-motion';

interface Props {
    onNavChange: (item: string) => void;
}

const textVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: (custom as number) * 0.4,
            duration: 0.6,
            ease: [0.25, 0.8, 0.25, 1],
        } as Transition,
    }),
};

const containerVariant = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export default function MissionVision(props: Props) {
    const handleButtonClick = () => {
        window.scrollTo({ top: 0 });
        props.onNavChange('About Us');
    };

    const imageRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: imageRef,
        offset: ["start end", "end start"], // from fully visible to fully gone
    });

    const scale = useTransform(scrollYProgress, [0.2, 0.5], [1, 1.2]);
    const smoothScale = useSpring(scale, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <Grid container m={0}>
            {/* Left (Image with overlay text) */}
            <Grid
                size={{ xs: 12, md: 6 }}
                sx={{ position: "relative", overflow: "hidden", color: "white" }}
                ref={imageRef}
            >
                <motion.div
                    style={{
                        width: "100%",
                        height: "100%",
                        scale: smoothScale,
                    }}
                >
                    <img
                        src="https://static.wixstatic.com/media/c837a6_0564cc8d4e9f42cd8e318c80b1617eaf~mv2.jpg/v1/fill/w_1728,h_2000,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_0564cc8d4e9f42cd8e318c80b1617eaf~mv2.jpg"
                        alt="Tech visual"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </motion.div>

                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        bgcolor: "rgba(0,0,0,0.4)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                    }}
                >
                    <Typography variant="h5" fontWeight={600}>
                        Unprecedented Velocity.
                    </Typography>
                    <Typography variant="h5" fontWeight={600}>
                        Impeccable Reliability.
                    </Typography>
                </Box>
            </Grid>

            {/* Right (Animated Text) */}
            <Grid
                size={{ xs: 12, md: 6 }}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 4,
                    background: 'black',
                }}
            >
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }} // triggers when 30% in view
                    variants={containerVariant}
                    style={{ maxWidth: 480 }}
                >
                    <motion.h3
                        custom={0}
                        variants={textVariant}
                        style={{ color: 'white' }}
                    >
                        Adimere is a IT Services Integrator focused on providing world-class IT infrastructure services to customers across India. With our comprehensive spectrum of solutions and services, we deliver faster and better business. We believe in following a structured approach to create and implement solutions.
                    </motion.h3>

                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <motion.div custom={1} variants={textVariant}>
                            <Button
                                variant="outlined"
                                sx={{
                                    color: 'white',
                                    borderColor: 'white',
                                    px: 4,
                                    py: 1.5,
                                    fontWeight: 500,
                                    '&:hover': {
                                        backgroundColor: 'white',
                                        color: 'black',
                                        borderColor: 'white',
                                    },
                                }}
                                onClick={handleButtonClick}
                            >
                                Learn More
                            </Button>
                        </motion.div>
                    </Box>
                </motion.div>
            </Grid>
        </Grid>
    );
}