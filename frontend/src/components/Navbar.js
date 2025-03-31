import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button color="inherit" component={RouterLink} to="/">
            Trang chủ
          </Button>
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={RouterLink} to="/products">
            Sản phẩm
          </Button>
          <Button color="inherit" component={RouterLink} to="/categories">
            Danh mục
          </Button>
          
          {user ? (
            <>
              <Typography variant="subtitle1" sx={{ alignSelf: 'center' }}>
                Xin chào, {user.username}
              </Typography>
              <Button color="inherit" onClick={logout}>
                Đăng xuất
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={RouterLink} to="/login">
                Đăng nhập
              </Button>
              <Button color="inherit" component={RouterLink} to="/register">
                Đăng ký
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar; 