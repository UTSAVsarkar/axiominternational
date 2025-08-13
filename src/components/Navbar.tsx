import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";

interface Props {
    navItems: string[];
    activeItem: string;
    onNavChange: (item: string) => void;
}

export default function Navbar(props: Props) {
    const { navItems, activeItem, onNavChange } = props;
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    const handleNavItemClick = (item: string) => {
        onNavChange(item);
        setDrawerOpen(false);
    };

    return (
        <>
            <AppBar
                position="absolute"
                sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(12px)',
                    boxShadow: "none",
                    color: "#fff",
                }}
            >
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    {/* Logo */}
                    <div style={{ cursor: 'pointer' }} onClick={() => handleNavItemClick('Home')}>
                        <Typography variant="h4" sx={{ display: "flex", alignItems: "center", gap: "4px", cursor: 'pointer' }}>
                            Axion
                            <span style={{ color: "#b06118", fontSize: "2.5rem" }}>.</span>
                        </Typography>
                    </div>

                    {/* Desktop Menu */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
                        {navItems.map((item) => (
                            <Button
                                key={item}
                                sx={{
                                    color: activeItem === item ? '#b06118' : '#fff',
                                    textTransform: "none",
                                    "&:hover": { color: "#b06118" },
                                    fontSize: '1rem'
                                }}
                                onClick={() => handleNavItemClick(item)}
                            >
                                {item}
                            </Button>
                        ))}
                    </Box>

                    {/* Mobile Hamburger */}
                    <IconButton
                        sx={{ display: { xs: "flex", md: "none" }, color: "#fff" }}
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box sx={{
                    width: 250,
                    background: "#111",
                    height: "100%",
                    color: "#fff"
                }}>
                    <List>
                        {navItems.map((item) => (
                            <ListItem key={item} component="a">
                                <ListItemText sx={{ color: activeItem === item ? '#b06118' : '#fff', }} primary={item} onClick={() => handleNavItemClick(item)} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer >
        </>
    );
}
