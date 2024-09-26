import React from 'react';
import { Container, Typography, Box, Button, Grid, Card, CardContent, CardActions } from '@mui/material';

const resources = [
  {
    title: "FindTreatment.gov",
    description: "FindTreatment.gov is a government website that helps people find local treatment services for substance use and mental health care.",
    link: "https://findtreatment.gov/",
  },
  {
    title: "American Psychiatric Association",
    description: "The American Psychiatric Association is the main professional organization of psychiatrists and trainee psychiatrists in the United States.",
    link: "https://www.psychiatry.org/",
  },
  {
    title: "American Academy of Child and Adolescent Psychiatry",
    description: "The American Academy of Child and Adolescent Psychiatry is a 501 non-profit professional association in the United States.",
    link: "https://www.aacap.org/",
  },
  {
    title: "National Mental Health Programme",
    description: "The host delivers a detailed discourse on the National Mental Health Programme launched by the government to raise awareness on the subject.",
    link: "https://www.nhm.gov.in/index1.php?lang=1&level=2&sublinkid=1043&lid=359",
  },
  {
    title: "District Mental Health Programme",
    description: "District Mental Health Programme (DMHP) was started under the National Mental Health Programme.",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6102961/",
  },
  {
    title: "The National Institute of Mental Health and Neurosciences",
    description: "The National Institute of Mental Health and Neurosciences is a multidisciplinary institute for patient care and academic pursuit in the frontier area of mental health and neurosciences.",
    link: "https://www.nimhans.ac.in/",
  },
];

const MentalHealth = () => {
  return (
    <Container maxWidth="md" sx={{ paddingY: 4 }}>
      {/* Page Title */}
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Explore Our Resources
      </Typography>

      {/* Resources Section */}
      <Grid container spacing={3}>
        {resources.map((resource, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {resource.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {resource.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="contained"
                  color="success"
                  href={resource.link}
                  target="_blank"
                >
                  Visit Website
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Footer Section */}
      <Box component="footer" sx={{ marginTop: 4, paddingY: 2, backgroundColor: '#343a40', color: 'white', textAlign: 'center' }}>
        <Typography variant="body2">
          &copy; 2024 Mental Health Illness. All rights reserved.
        </Typography>
      </Box>
    </Container>
  );
};

export default MentalHealth;