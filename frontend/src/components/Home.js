
import {  Toolbar, Typography, CssBaseline, Box, Button, Container } from '@mui/material';


function App() {


  return (
    <>
      <CssBaseline />
      

      

        <Box
          component="main"
          sx={{ flexGrow: 1, backgroundColor: '#f4f4f4', padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
        >
          <Toolbar />
          <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom align="center">
              Welcome to Our Website
            </Typography>
            <Typography variant="body1" gutterBottom align="center">
              This is the home page of our website. You can explore various sections using the navigation menu above.
            </Typography>
            <Button variant="contained" sx={{ backgroundColor: '#4CAF50',marginLeft:'200px' }}>
              Explore More
            </Button>
          </Container>
        </Box>
      

      <Box
        sx={{
          backgroundColor: '#333',
          color: 'white',
          textAlign: 'center',
          padding: 2,
          position: 'relative',
          bottom: 0,
          width: '100%',
        }}
      >
        &copy; 2024 Your Website Name. All rights reserved.
      </Box>
    </>
  );
}

export default App;
