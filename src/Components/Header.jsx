import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';



function Header() {
  const aboutus="Our Resume Builder helps users create professional, ATS-friendly resumes in minutes. With modern templates, simple customization, and instant downloads, we make it easy to build resumes that stand out and increase your chances of landing interviews."
  return (
    <>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:' rgba(4, 28, 73, 0.93)'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/resume-icon-svg-download-png-7959858.png?f=webp&w=128" width={"50px"} alt="" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            rBuilder
          </Typography>
          <Tooltip title={aboutus}>
          <Button color="inherit">ABOUT US</Button>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Header