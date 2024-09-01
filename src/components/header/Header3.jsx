import React, { useState, useCallback } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  Box,
  useTheme,
  useMediaQuery,
  Container,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Window as WindowIcon,
  KeyboardArrowRightOutlined as KeyboardArrowRightOutlinedIcon,
  Close,
  ExpandMore,
} from "@mui/icons-material";
import CategoryMenu from "./CategoryMenu";
import CustomAccordion from "../CustomAccordion";
import { menuData } from "../../data/menuData";

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
            aria-controls={
              Boolean(categoryMenuAnchor) ? "category-menu" : undefined
            }
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
          <CategoryMenu
            anchorEl={categoryMenuAnchor}
            open={Boolean(categoryMenuAnchor)}
            onClose={handleCategoryMenuClose}
          />


          {useMediaQuery("(max-width:1000px)") && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={toggleDrawer}
              sx={{ ml: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
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
              <IconButton
                onClick={toggleDrawer}
                aria-label="close menu"
                sx={{
                  ":hover": {
                    rotate: "180deg",
                    transition: "0.3s",
                    color: "red",
                  },
                }}
              >
                <Close />
              </IconButton>
            </Box>

            {menuData.map(({ title, icon, subLinks }) => (
              <CustomAccordion
                key={title}
                title={title}
                icon={icon}
                subLinks={subLinks}
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
