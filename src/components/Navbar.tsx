import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { WbSunny, Brightness3 } from "@mui/icons-material"; 

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  return (
    <AppBar position="sticky" sx={{
      background: darkMode ? 'linear-gradient(45deg, #121212, #1c1c1c)' : 'linear-gradient(45deg, #ffffff, #e1e1e1)',
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
      transition: "background 0.3s ease-in-out",
    }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: "bold",
            color: darkMode ? "#fff" : "#333",
            letterSpacing: "1px",
            textTransform: "uppercase",
            fontSize: "1.5rem",
            transition: "color 0.3s ease",
          }}
        >
          Portfolio App
        </Typography>

        <Box sx={{ display: "contents", gap: 2 }}>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{
              fontSize: "1rem",
              textTransform: "none",
              color: darkMode ? "#fff" : "#333",
              padding: "8px 16px",
              borderRadius: "25px",
              transition: "all 0.3s ease",
              '&:hover': {
                color: "#1976d2",
                backgroundColor: darkMode ? "#333" : "#f0f0f0",
                transform: "scale(1.05)",
              },
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/about"
            sx={{
              fontSize: "1rem",
              textTransform: "none",
              color: darkMode ? "#fff" : "#333",
              padding: "8px 16px",
              borderRadius: "25px",
              transition: "all 0.3s ease",
              '&:hover': {
                color: "#1976d2",
                backgroundColor: darkMode ? "#333" : "#f0f0f0",
                transform: "scale(1.05)",
              },
            }}
          >
            About Me
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/projects"
            sx={{
              fontSize: "1rem",
              textTransform: "none",
              color: darkMode ? "#fff" : "#333",
              padding: "8px 16px",
              borderRadius: "25px",
              transition: "all 0.3s ease",
              '&:hover': {
                color: "#1976d2",
                backgroundColor: darkMode ? "#333" : "#f0f0f0",
                transform: "scale(1.05)",
              },
            }}
          >
            Projects
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/contact"
            sx={{
              fontSize: "1rem",
              textTransform: "none",
              color: darkMode ? "#fff" : "#333",
              padding: "8px 16px",
              borderRadius: "25px",
              transition: "all 0.3s ease",
              '&:hover': {
                color: "#1976d2",
                backgroundColor: darkMode ? "#333" : "#f0f0f0",
                transform: "scale(1.05)",
              },
            }}
          >
            Contact
          </Button>
        </Box>

        <IconButton
          onClick={toggleTheme}
          sx={{
            color: darkMode ? "#fff" : "#333",
            transition: "color 0.3s ease, transform 0.3s ease",
            '&:hover': {
              color: "#1976d2",
              transform: "scale(1.2)",
            },
          }}
        >
          {darkMode ? <WbSunny /> : <Brightness3 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
