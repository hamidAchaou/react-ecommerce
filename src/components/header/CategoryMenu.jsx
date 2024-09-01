import React from "react";
import { Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import { menuData } from "../../data/menuData";

const CategoryMenu = ({ anchorEl, open, onClose }) => (
  <Menu
    id="category-menu"
    anchorEl={anchorEl}
    open={open}
    onClose={onClose}
    MenuListProps={{ "aria-labelledby": "category-button" }}
    PaperProps={{ elevation: 3, sx: { width: 240 } }}
  >
    {menuData.slice(0, 4).map((item, index) => (
      <MenuItem key={index} onClick={onClose}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText>{item.title}</ListItemText>
      </MenuItem>
    ))}
  </Menu>
);

export default CategoryMenu;
