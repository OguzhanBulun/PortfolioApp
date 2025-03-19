import React, { useState } from "react";
import {
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  Modal,
  Button,
  Grid,
} from "@mui/material";
import { blue, green, orange, purple, pink, teal } from "@mui/material/colors";

const projects = [
  {
    title: "Purchase Management Portal",
    company: "Turkish Airlines Technology",
    date: "May 2024 - Present",
    description:
      "A system for obtaining catalog prices from companies like Airbus and Boeing for aircraft maintenance and repair.",
    techStack: ".NET Core, React, Oracle Database",
  },
  {
    title: "Aerolink",
    company: "Turkish Airlines Technology",
    date: "May 2024 - Present",
    description:
      "An external supplier-facing platform where price research and negotiation requests are created.",
    techStack: ".NET Core, React",
  },
  {
    title: "CCI – Coca Cola",
    company: "Efectura Software",
    date: "Sep 2023 - Apr 2024",
    description: "A campaign management system for customers to earn points from campaigns.",
    techStack: ".NET Core",
  },
  {
    title: "SILK-PAY / SILK TECH",
    company: "Efectura Software",
    date: "May 2023 - Apr 2024",
    description:
      "A financial system integrating various bank payment endpoints, supporting transactions in different currencies.",
    techStack: ".NET Core, Microservices, RabbitMQ",
  },
  {
    title: "MEY-DIAGEO",
    company: "Efectura Software",
    date: "May 2023 - Apr 2024",
    description:
      "A system where regional managers can track sales performance and monitor the entire sales process dynamically.",
    techStack: ".NET Core, Microservices",
  },
  {
    title: "ServiceStone Digital Workflow",
    company: "Stoneity Software Inc.",
    date: "Jan 2023 - Jun 2023",
    description: "A full-stack web platform for managing digital workflows.",
    techStack: ".NET Core, React",
  },
];

const Projects: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [currentProject, setCurrentProject] = useState<any>(null);

  const handleOpenModal = (project: any) => {
    setCurrentProject(project);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setCurrentProject(null);
  };

  const getCardColor = (index: number) => {
    const colors = [blue[500], green[500], orange[500], purple[500], pink[500], teal[500]];
    return colors[index % colors.length];
  };

  return (
    <Container maxWidth="md">
      <Box mt={5}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: 600,
            display: "flex", // Flexbox düzeni kullanıyoruz
            justifyContent: "center", // Ortada hizalama
            alignItems: "center", // Dikeyde hizalama
            width: "100%", // Tam genişlik
          }}
        >
          Projects
        </Typography>
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  backgroundColor: getCardColor(index),
                  borderRadius: 3,
                  height: 250, 
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  boxShadow: 3,
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                  },
                }}
                onClick={() => handleOpenModal(project)}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6" sx={{ fontWeight: 500, color: "#fff" }}>
                    {project.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary" sx={{ color: "#fff" }}>
                    {project.company} | {project.date}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {currentProject && (
          <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="modal-project-details"
            aria-describedby="modal-project-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "80%",
                bgcolor: "background.paper",
                borderRadius: 3,
                padding: 3,
                boxShadow: 24,
                outline: "none",
              }}
            >
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                {currentProject.title}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 500 }}>
                {currentProject.company} | {currentProject.date}
              </Typography>
              <Typography variant="body1" mt={2}>
                {currentProject.description}
              </Typography>
              <Typography variant="body2" color="textSecondary" mt={2}>
                <strong>Tech Stack:</strong> {currentProject.techStack}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 3 }}
                onClick={handleCloseModal}
              >
                Close
              </Button>
            </Box>
          </Modal>
        )}
      </Box>
    </Container>
  );
};

export default Projects;
