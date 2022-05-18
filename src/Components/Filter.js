import React from "react";
import { TextField } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';


const Filter=({ searchItems })=>{
    return (
                        
                        
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense" style={{ background: "#cb0001"}}>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Movies
          </Typography>
            <div style={{ display: "flex", gap: "15px", marginLeft: "auto" }}>
                <TextField
                    style={{ width: "25ch", padding:"5px" }}
                    label="Search movie"
                    variant="outlined"
                    onChange={(e) => searchItems(e.target.value)}

                />
               </div>
        </Toolbar>
      </AppBar>
    </Box>
    
            
    );

};
export default Filter;