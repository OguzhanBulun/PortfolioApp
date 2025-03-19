import React from "react";
import { Typography, Container, Box, Card, CardContent, Divider, Grid } from "@mui/material";
import { School, Work, Build } from "@mui/icons-material";

const About: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box mt={5} sx={{ textAlign: "center" }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
          About Me
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, transition: "transform 0.3s", '&:hover': { transform: "scale(1.05)" } }}>
              <CardContent>
                <School sx={{ fontSize: 40, color: "#1976d2" }} />
                <Typography variant="h5" sx={{ mt: 2, fontWeight: 500 }}>
                  🎓 Education
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  <strong>Tekirdağ Namık Kemal University</strong>  
                  <br /> Bachelor's Degree in Civil Engineering (2018 – 2022)  
                  <br /> <strong>GPA:</strong> 3.20
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, transition: "transform 0.3s", '&:hover': { transform: "scale(1.05)" } }}>
              <CardContent>
                <Work sx={{ fontSize: 40, color: "#1976d2" }} />
                <Typography variant="h5" sx={{ mt: 2, fontWeight: 500 }}>
                  💼 Work Experience
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  <strong>Full-Stack Software Web Developer</strong>  
                  <br /> *Turkish Airlines Technology* (May 2024 – Present)  
                  <br /> - Developing backend and frontend with .NET Core and React  
                  <br /> - Working with Oracle Database, EF Core, and Flight Management System integrations  
                  <br /> - Writing unit tests with XUnit and Jest  
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  <strong>Backend Developer</strong>  
                  <br /> *Efectura Software* (Sep 2023 – Apr 2024)  
                  <br /> - Developing microservices with .NET Core  
                  <br /> - Implementing RabbitMQ for event-driven architecture  
                  <br /> - Working with MSSQL, ClickHouse, and Kubernetes  
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, transition: "transform 0.3s", '&:hover': { transform: "scale(1.05)" } }}>
              <CardContent>
                <Build sx={{ fontSize: 40, color: "#1976d2" }} />
                <Typography variant="h5" sx={{ mt: 2, fontWeight: 500 }}>
                  🛠 Skills
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  -Programming: C#, .NET Core, Web API, OOP, REST API, SOAP API  
                  <br /> - Frontend: React.js (TypeScript), Redux  
                  <br /> - Database: MSSQL, ClickHouse, Oracle, MongoDB  
                  <br /> - Tools & DevOps: Kubernetes, RabbitMQ, BitBucket, SonarQube  
                  <br /> - Testing: XUnit, Jest  
                  <br /> - Languages: Turkish (Native), English (B2)  
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
