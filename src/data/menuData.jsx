import HomeIcon from "@mui/icons-material/Home";
import AppsIcon from "@mui/icons-material/Apps";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import WindowIcon from "@mui/icons-material/Window";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import DirectionsBikeOutlinedIcon from "@mui/icons-material/DirectionsBikeOutlined";

export const menuData = [
  {
    title: "Home",
    subLinks: ["Link 1", "Link 2", "Link 3"],
    icon: <HomeIcon />,
  },
  {
    title: "Mega Menu",
    subLinks: ["Link 1", "Link 2"],
    icon: <AppsIcon />,
  },
  {
    title: "Full Screen Menu",
    subLinks: ["This could be a placeholder for a full screen menu implementation."],
    icon: <FullscreenIcon />,
  },
  {
    title: "Pages",
    subLinks: ["Page 1", "Page 2"], // Replace with actual links if needed
    icon: <WindowIcon />, // Use an appropriate icon
  },
  {
    title: "User Account",
    subLinks: ["Profile", "Settings"],
    icon: <MenuBookOutlinedIcon />, // Use an appropriate icon
  },
  {
    title: "Vendor Account",
    subLinks: ["Vendor Dashboard", "Orders"],
    icon: <DirectionsBikeOutlinedIcon />, // Use an appropriate icon
  },
];
