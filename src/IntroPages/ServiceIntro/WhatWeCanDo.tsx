import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import {
    Timeline, // Planning
    Architecture, // Infrastructure Solution
    BuildCircle, // Implementation
    SystemUpdateAlt // Deployment & Installation
} from "@mui/icons-material";
import { motion } from "framer-motion";

const services = [
    {
        title: "Planning",
        icon: <Timeline style={{ fontSize: 60 }} />,
        description: "Assess requirements, set objectives, and prepare a roadmap for optimal execution.",
    },
    {
        title: "Detailed Infrastructure Solution",
        icon: <Architecture style={{ fontSize: 60 }} />,
        description: "Design tailored infrastructure plans that align with business goals and IT standards.",
    },
    {
        title: "Implementation",
        icon: <BuildCircle style={{ fontSize: 60 }} />,
        description: "Execute approved plans with precision, ensuring minimal disruption to operations.",
    },
    {
        title: "Deployment & Product Installation",
        icon: <SystemUpdateAlt style={{ fontSize: 60 }} />,
        description: "Install, configure, and integrate systems for seamless functionality and performance.",
    },
];

export default function WhatWeCanDo() {
    return (
        <Box sx={{ py: 8, px: { xs: 2, md: 10 }, paddingBottom: 0 }}>
            <Grid container spacing={4}>
                {services.map((service, index) => (
                    <Grid size={{ xs: 12, md: 6 }} key={index}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card sx={{ minHeight: 180, borderRadius: 3, p: 2 }}>
                                <CardContent>
                                    <Box
                                        sx={{
                                            color: 'black',
                                            mb: 2,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        {service.icon}
                                    </Box>
                                    <Typography variant="h6" gutterBottom sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}>
                                        {service.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}