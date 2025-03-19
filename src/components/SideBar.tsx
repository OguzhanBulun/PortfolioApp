import React from "react";
import { Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

interface SidebarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ darkMode, toggleTheme }) => {
  return (
    <Box
      sx={{
        width: 240,
        position: "relative",
        background: darkMode
          ? "linear-gradient(45deg, #121212, #1c1c1c)"
          : "linear-gradient(45deg, #ffffff, #e1e1e1)",
        color: darkMode ? "#fff" : "#333",
        padding: "20px",
      }}
    >
      <List>
        <ListItemButton component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton component={Link} to="/about">
          <ListItemText primary="About Me" />
        </ListItemButton>
        <ListItemButton component={Link} to="/projects">
          <ListItemText primary="Projects" />
        </ListItemButton>
        <ListItemButton component={Link} to="/contact">
          <ListItemText primary="Contact" />
        </ListItemButton>
        <ListItemButton onClick={toggleTheme}>
          <ListItemText primary={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"} />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default Sidebar;
