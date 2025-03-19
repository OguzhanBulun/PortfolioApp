import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { GitHub, LinkedIn, Twitter, WbSunny, Brightness3 } from "@mui/icons-material";

interface FooterProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Footer: React.FC<FooterProps> = ({ darkMode, toggleTheme }) => {
  return (
    <Box
      sx={{
        background: darkMode
          ? 'linear-gradient(45deg, #121212, #1c1c1c)' 
          : 'linear-gradient(45deg, #ffffff, #e1e1e1)', 
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        py: 3,
        mt: 5,
        textAlign: "center",
        borderTop: "1px solid #444",
        transition: "background 0.3s ease-in-out", 
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontFamily: "'Roboto', sans-serif", 
          fontWeight: 400,
          color: darkMode ? "#fff" : "#333", 
          letterSpacing: "1px",
          textTransform: "uppercase",
          fontSize: "1rem",
          transition: "color 0.3s ease", 
        }}
      >
        © 2025 Oguzhan Bulun. All rights reserved.
      </Typography>

      <Box sx={{ mt: 1 }}>
        <IconButton
          color="inherit"
          sx={{
            mx: 1,
            '&:hover': {
              color: "#1976d2",
              transform: "scale(1.2)",
            },
          }}
          component="a"
          href="https://github.com/oguzhanbulun"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </IconButton>
        <IconButton
          color="inherit"
          sx={{
            mx: 1,
            '&:hover': {
              color: "#1976d2",
              transform: "scale(1.2)",
            },
          }}
          component="a"
          href="https://www.linkedin.com/in/oğuzhan-bulun/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
