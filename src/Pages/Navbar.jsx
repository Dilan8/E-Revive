import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText,
  Button,
  useMediaQuery,
  useTheme,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate, Link } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/home" },
  { label: "Marketplace", path: "/marketplace" },
  { label: "Schedule Pickup", path: "/schedulepickup" },
  { label: "Trade In", path: "/tradein" },
  { label: "Learn", path: "/learn" },
];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#43a047" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600 }}>
          E-REVIVE 
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              <Box width={250} role="presentation" onClick={() => setDrawerOpen(false)}>
                <List>
                  {navItems.map(({ label, path }) => (
                    <ListItem button key={label} component={Link} to={path}>
                      <ListItemText primary={label} />
                    </ListItem>
                  ))}
                  <ListItem button onClick={handleLogout}>
                    <LogoutIcon sx={{ mr: 1 }} />
                    <ListItemText primary="Logout" />
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <>
            {navItems.map(({ label, path }) => (
              <Button key={label} color="inherit" sx={{ mx: 1 }}>
                <Link
                  to={path}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {label}
                </Link>
              </Button>
            ))}
            <Avatar sx={{ bgcolor: "#1b5e20", mx: 2 }}>U</Avatar>
            <Button
              onClick={handleLogout}
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
                "&:hover": { borderColor: "#c8e6c9" },
              }}
            >
              Logout
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
