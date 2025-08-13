import { useMediaQuery, useTheme } from "@mui/material";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

interface Props {
    image: string;
    author: string;
    text: string;
}

export default function ParallaxImage(props: Props) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <ParallaxProvider>
            <ParallaxBanner
                layers={[
                    {
                        image: props.image,
                        speed: -20,
                        translateX: ['-10px', '100px'],
                        scale: [1.05, 1.2],
                    },
                ]}
                style={{
                    aspectRatio: '3 / 1',
                    overflow: 'hidden',
                    objectFit: 'cover',
                    display: isMobile ? 'none' : '',
                    position: 'relative',
                }}
            >
                {/* Overlay */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7))",
                        zIndex: 1,
                    }}
                />

                {/* Text */}
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: '2rem',
                        color: 'white',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        zIndex: 2,
                        padding: '0 20px',
                    }}
                >
                    {props.text}
                    <br />
                    <i style={{ fontSize: 15 }}>{props.author}</i>
                </div>
            </ParallaxBanner>
        </ParallaxProvider>
    );
}
