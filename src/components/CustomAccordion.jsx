import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";

const CustomAccordion = ({ title, icon, subLinks, expanded, onChange }) => (
  <Accordion
    expanded={expanded === title}
    onChange={onChange(title)}
    TransitionProps={{ unmountOnExit: true }}
  >
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls={`${title}-content`}
      id={`${title}-header`}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {icon}
        <Typography>{title}</Typography>
      </Box>
    </AccordionSummary>
    <AccordionDetails>
      <List>
        {subLinks.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </AccordionDetails>
  </Accordion>
);

export default CustomAccordion;
