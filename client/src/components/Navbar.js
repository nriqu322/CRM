import React from 'react'
import { AppBar, Box, Container, Toolbar, Typography, Tabs, Tab } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function Navbar() {
  const navigate = useNavigate()
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' color='transparent'>
        <Container>
          <Toolbar>
            <Typography sx={{ flexGrow: 1 }}>
              <Link to="/">CRM Userlab</Link>
            </Typography>
            <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
              <LinkTab label="Customers" onClick={() => navigate("/")} />
              <LinkTab label="Projects" onClick={() => navigate("/projects")} />
              <LinkTab label="Contacts" onClick={() => navigate("/contacts")} />
              <LinkTab label="Meetings" onClick={() => navigate("/meetings")} />
            </Tabs>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
