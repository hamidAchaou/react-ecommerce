import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { ExpandMore } from "@mui/icons-material";

const options = ["AR", "EN"];

export const LanguageMenu = ({
  anchorEl,
  open,
  onClose,
  selectedIndex,
  onMenuItemClick,
}) => {
  return (
    <div>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <ListItemButton
          id="language-button"
          aria-haspopup="listbox"
          aria-controls="language-menu"
          aria-expanded={open ? "true" : undefined}
          onClick={anchorEl ? onClose : (event) => onMenuItemClick(event, 0)}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <ListItemText
            secondary={options[selectedIndex]}
            sx={{
              ".MuiTypography-root": { fontSize: "14px" },
            }}
          />
          <ExpandMore sx={{ fontSize: "16px" }} />
        </ListItemButton>
      </List>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        MenuListProps={{
          "aria-labelledby": "language-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => onMenuItemClick(event, index)}
            sx={{ fontSize: "14px", p: "8px 16px" }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
