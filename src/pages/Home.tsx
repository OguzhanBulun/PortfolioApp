import React from "react";
import { Typography, Box } from "@mui/material";
import Skills from "../components/Skills";

const Home: React.FC = () => {
  return (
    <Box
      textAlign="center"
      mt={8} 
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "1300px",
        height: "650px",
        margin: "20px 10px 30px 270px",
        padding: "0 20px",
        backgroundColor: "#121212", 
        borderRadius: 6,
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.6)",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "700",
          color: "#00ff99",
          textTransform: "uppercase",
          letterSpacing: 2,
          marginBottom: 2,
          textShadow: "0 0 10px #00ff99",
        }}
      >
        Hi, I'm Oguzhan Bulun! 👋
      </Typography>

      <Typography
        variant="h5"
        color="white"
        paragraph
        sx={{
          fontSize: "1.1rem",
          lineHeight: "1.6",
          fontWeight: "300",
          color: "#bbb",
          maxWidth: "750px",
          textShadow: "0 0 10px #00ff99",
        }}
      >
        I am a Full-Stack Web Developer. Specializing in .NET, React, and Microservices.  
        Currently, working at Turkish Airlines Technology, developing Flight Management System integrations.
      </Typography>

      <Skills />
    </Box>
  );
};

export default Home;
