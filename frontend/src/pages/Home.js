import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function Home() {
  return (
    <Container>
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Chào mừng đến với hệ thống quản lý
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom color="text.secondary">
          Hệ thống quản lý sản phẩm và danh mục
        </Typography>
      </Box>
    </Container>
  );
}

export default Home; 