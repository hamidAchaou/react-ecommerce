import React, { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
  List,
  ListItemButton,
  ListItemText,
  MenuItem,
  Menu,
} from "@mui/material";
import {
  DarkModeOutlined,
  ExpandMore,
  LightModeOutlined,
} from "@mui/icons-material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const options = ["AR", "EN"];

const Header1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        bgcolor: "#2b3445",
        py: "4px",
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
      }}
    >
      <Container>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography
            sx={{
              p: "3px 10px",
              bgcolor: "#D23F57",
              borderRadius: 1.5,
              fontSize: "10px",
              fontWeight: "bold",
              color: "#fff",
            }}
            variant="body2"
          >
            Hot
          </Typography>

          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 300,
              color: "#fff",
            }}
            variant="body2"
          >
            Free Express Shipping
          </Typography>

          <Box flexGrow={1} />

          <IconButton
            onClick={() => {
              const newMode = theme.palette.mode === "dark" ? "light" : "dark";
              localStorage.setItem("mode", newMode);
              colorMode.toggleColorMode();
            }}
            color="inherit"
            aria-label="Toggle light/dark theme"
            sx={{ color: "#fff" }}
          >
            {theme.palette.mode === "light" ? (
              <LightModeOutlined fontSize="small" />
            ) : (
              <DarkModeOutlined fontSize="small" />
            )}
          </IconButton>

          {/*=============== Multi-language Selection ================*/}
          <List
            component="nav"
            aria-label="Language selection"
            sx={{ p: 0, m: 0, display: "flex", alignItems: "center" }}
          >
            <ListItemButton
              id="language-button"
              aria-haspopup="listbox"
              aria-controls="language-menu"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{
                display: "flex",
                alignItems: "center",
                px: 1,
                "&:hover": { cursor: "pointer" },
              }}
            >
              <ListItemText
                secondary={options[selectedIndex]}
                sx={{
                  ".MuiTypography-root": { fontSize: "11px", color: "#fff" },
                }}
              />
              <ExpandMore sx={{ fontSize: "16px", color: "#fff" }} />
            </ListItemButton>
          </List>
          <Menu
            id="language-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "language-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
                sx={{ fontSize: "14px", p: "3px", minHeight: "10px" }}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
          {/*=============== End Multi-language Selection ================*/}

          <IconButton
            component="a"
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            sx={{ color: "#fff", fontSize: "12px" }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            sx={{ color: "#fff", fontSize: "12px"}}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            sx={{ color: "#fff", fontSize: "12px" }}
          >
            <InstagramIcon />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header1;
