import React from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import { GitHub, LinkedIn, Twitter, Code } from "@mui/icons-material"; 

const Skills: React.FC = () => {
  const icons = [
    { id: 1, icon: <GitHub />, name: "GitHub" },
    { id: 2, icon: <LinkedIn />, name: "LinkedIn" },
    { id: 3, icon: <Twitter />, name: "Twitter" },
    { id: 4, icon: <Code />, name: ".NET" }, 
    { id: 5, icon: <Code />, name: "JavaScript" }, 
    { id: 6, icon: <Code />, name: "React" }, 
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 4,
        flexWrap: "wrap",
        mt: 5,
        mb: 5,
      }}
    >
      {icons.map((skill) => (
        <Tooltip key={skill.id} title={skill.name} arrow>
          <IconButton
            sx={{
              backgroundColor: "white",
              color: "#1976d2",
              fontSize: 40,
              p: 2,
              borderRadius: "50%",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.2)", 
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            {skill.icon}
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  );
};

export default Skills;
