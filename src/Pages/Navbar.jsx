import React, { useState } from "react";
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  ListItemAvatar,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import EditIcon from "@mui/icons-material/Edit";
import RedeemIcon from "@mui/icons-material/Redeem";
import { useNavigate, Link } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/home" },
  { label: "Marketplace", path: "/marketplace" },
  { label: "Schedule Pickup", path: "/schedulepickup" },
  { label: "Trade In", path: "/tradein" },
  { label: "Learn", path: "/learn" },
  { label: "About us", path: "/about" },
];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => navigate("/");
  const handleProfileOpen = () => setProfileOpen(true);
  const handleProfileClose = () => {
    setProfileOpen(false);
    setEditMode(false);
  };
  const toggleEditMode = () => setEditMode((prev) => !prev);

  // Dummy user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    loyaltyTier: "Gold",
    discount: "15%",
    memberSince: "January 2023",
  };

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#43a047" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600 }}>
            E-REVIVE
          </Typography>

          {isMobile ? (
            <>
              <IconButton edge="end" color="inherit" onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <Box width={250} role="presentation" onClick={() => setDrawerOpen(false)}>
                  <List>
                    {navItems.map(({ label, path }) => (
                      <ListItem button key={label} component={Link} to={path}>
                        <ListItemText primary={label} />
                      </ListItem>
                    ))}
                    <Divider />
                    <ListItem button onClick={handleProfileOpen}>
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "#1b5e20" }}>U</Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Profile" />
                      <IconButton size="small" onClick={toggleEditMode}>
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </ListItem>
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
                <Button key={label} color="inherit" sx={{ mx: 1 }} component={Link} to={path}>
                  {label}
                </Button>
              ))}
              <IconButton onClick={handleProfileOpen} sx={{ mx: 1 }}>
                <Avatar sx={{ bgcolor: "#1b5e20" }}>U</Avatar>
              </IconButton>
              <Button
                onClick={handleLogout}
                variant="outlined"
                sx={{ color: "white", borderColor: "white", "&:hover": { borderColor: "#c8e6c9" } }}
              >
                Logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* Profile Dialog */}
      <Dialog open={profileOpen} onClose={handleProfileClose} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {editMode ? 'Edit Profile' : 'User Profile'}
          <IconButton size="small" onClick={toggleEditMode}>
            <EditIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar sx={{ bgcolor: '#1b5e20', width: 56, height: 56, mr: 2 }}>U</Avatar>
            <Box>
              <Typography variant="h6">
                {editMode ? (
                  <input defaultValue={user.name} style={{ fontSize: '1rem', width: '100%' }} />
                ) : (
                  user.name
                )}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {editMode ? (
                  <input defaultValue={user.email} style={{ fontSize: '0.875rem', width: '100%' }} />
                ) : (
                  user.email
                )}
              </Typography>
            </Box>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>Loyalty Details</Typography>
          <List disablePadding>
            <ListItem>
              <ListItemText primary="Tier" secondary={user.loyaltyTier} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Discount" secondary={user.discount} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Member Since" secondary={user.memberSince} />
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Stack direction="row" spacing={1} sx={{ width: '100%', justifyContent: 'space-between', px: 2, pb: 2 }}>
            {editMode && <Button variant="contained" size="small" onClick={handleProfileClose}>Save</Button>}
            <Button onClick={handleProfileClose} color="primary" size="small">
              {editMode ? 'Cancel' : 'Close'}
            </Button>
            {!editMode && (
              <Button startIcon={<RedeemIcon />} variant="outlined" size="small">
                Redeem
              </Button>
            )}
          </Stack>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Navbar;  