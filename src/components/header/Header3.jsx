import React, { useState, useCallback } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Typography,
  Box,
  useTheme,
  IconButton,
  ListItemIcon,
  ListItemText,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  useMediaQuery,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Window as WindowIcon,
  KeyboardArrowRightOutlined as KeyboardArrowRightOutlinedIcon,
  DirectionsBikeOutlined as DirectionsBikeOutlinedIcon,
  LaptopMacOutlined as LaptopMacOutlinedIcon,
  MenuBookOutlined as MenuBookOutlinedIcon,
  SportsEsportsOutlined as SportsEsportsOutlinedIcon,
  Home as HomeIcon,
  Apps as AppsIcon,
  Fullscreen as FullscreenIcon,
  Close,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";

// Menu item data
const categoryItems = [
  { icon: <DirectionsBikeOutlinedIcon />, label: "Bikes" },
  { icon: <LaptopMacOutlinedIcon />, label: "Electronics" },
  { icon: <MenuBookOutlinedIcon />, label: "Books" },
  { icon: <SportsEsportsOutlinedIcon />, label: "Games" },
];

// Accordion data
const accordionData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    content: (
      <List>
        {["Link 1", "Link 2", "Link 3"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    ),
    panel: "panel1",
  },
  {
    title: "Mega menu",
    icon: <AppsIcon />,
    content: (
      <List>
        {["Link 1", "Link 2"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    ),
    panel: "panel2",
  },
  {
    title: "Full screen menu",
    icon: <FullscreenIcon />,
    content: (
      <Typography>
        This could be a placeholder for a full screen menu implementation.
      </Typography>
    ),
    panel: "panel3",
  },
];

// Category Menu Component
const CategoryMenu = ({ anchorEl, open, onClose }) => (
  <Menu
    id="category-menu"
    anchorEl={anchorEl}
    open={open}
    onClose={onClose}
    MenuListProps={{ "aria-labelledby": "category-button" }}
    PaperProps={{ elevation: 3, sx: { width: 240 } }}
  >
    {categoryItems.map((item, index) => (
      <MenuItem key={index} onClick={onClose}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText>{item.label}</ListItemText>
      </MenuItem>
    ))}
  </Menu>
);

// Accordion Component
const CustomAccordion = ({ title, icon, content, panel, expanded, onChange }) => (
  <Accordion expanded={expanded === panel} onChange={onChange(panel)} TransitionProps={{ unmountOnExit: true }}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`${panel}-content`} id={`${panel}-header`}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {icon}
        <Typography>{title}</Typography>
      </Box>
    </AccordionSummary>
    <AccordionDetails>{content}</AccordionDetails>
  </Accordion>
);

const Header3 = () => {
  const [categoryMenuAnchor, setCategoryMenuAnchor] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [expandedAccordion, setExpandedAccordion] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleCategoryMenuClick = (event) => {
    setCategoryMenuAnchor(event.currentTarget);
  };

  const handleCategoryMenuClose = () => {
    setCategoryMenuAnchor(null);
  };

  const toggleDrawer = useCallback(() => {
    setIsDrawerOpen((prev) => !prev);
  }, []);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedAccordion(isExpanded ? panel : false);
  };

  return (
    <Container>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Button
            id="category-button"
            aria-controls={Boolean(categoryMenuAnchor) ? "category-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={Boolean(categoryMenuAnchor) ? "true" : undefined}
            onClick={handleCategoryMenuClick}
            startIcon={<WindowIcon />}
            endIcon={<KeyboardArrowRightOutlinedIcon />}
            sx={{
              bgcolor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              "&:hover": {
                bgcolor: theme.palette.primary.dark,
              },
            }}
          >
            Categories
          </Button>
          <CategoryMenu anchorEl={categoryMenuAnchor} open={Boolean(categoryMenuAnchor)} onClose={handleCategoryMenuClose} />

          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={toggleDrawer} sx={{ ml: 2 }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>

        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={toggleDrawer}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
        >
          <Box
            sx={{
              width: isMobile ? "100vw" : 350,
              p: 2,
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
            role="presentation"
          >
            <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
              <IconButton onClick={toggleDrawer} aria-label="close menu">
                <Close />
              </IconButton>
            </Box>

            {accordionData.map(({ title, icon, content, panel }) => (
              <CustomAccordion
                key={panel}
                title={title}
                icon={icon}
                content={content}
                panel={panel}
                expanded={expandedAccordion}
                onChange={handleAccordionChange}
              />
            ))}
          </Box>
        </Drawer>
      </AppBar>
    </Container>
  );
};

export default Header3;
