import React from "react";
import { Typography, Container, Box, IconButton, Link, Grid } from "@mui/material";
import { Email, GitHub, LinkedIn, Phone } from "@mui/icons-material";
import { teal, purple, pink, blue } from "@mui/material/colors";

const Contact: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={5 }>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
                Contact Me
        </Typography>

        <Grid container spacing={3}>
          {[
            {
              icon: <Email />,
              label: "oguzhanbulun24@gmail.com",
              link: "mailto:oguzhanbulun24@gmail.com",
              color: teal[500],
            },
            {
              icon: <Phone />,
              label: "+90 546 796 04 36",
              link: "tel:+905467960436",
              color: pink[500],
            },
            {
              icon: <GitHub />,
              label: "github.com/OguzhanBulun",
              link: "https://github.com/OguzhanBulun",
              color: blue[500],
            },
            {
              icon: <LinkedIn />,
              label: "linkedin.com/in/oğuzhan-bulun",
              link: "https://www.linkedin.com/in/o%C4%9Fuzhan-bulun/",
              color: purple[500],
            },
          ].map((contact, index) => (
            <Grid item xs={12} key={index}>
              <Box
                sx={{
                  backgroundColor: contact.color,
                  borderRadius: 2,
                  padding: 2,
                  boxShadow: 4,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 8,
                  },
                }}
              >
                <IconButton
                  color="inherit"
                  sx={{
                    marginRight: 2,
                    fontSize: "2rem",
                    transition: "color 0.3s",
                    "&:hover": {
                      color: "#fff",
                    },
                  }}
                >
                  {contact.icon}
                </IconButton>
                <Typography variant="body1" sx={{ color: "#fff", fontWeight: 500 }}>
                  <Link
                    href={contact.link}
                    target="_blank"
                    underline="hover"
                    sx={{
                      color: "#fff",
                      fontWeight: 500,
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {contact.label}
                  </Link>
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Contact;
