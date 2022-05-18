import React, { useState } from "react";
import { TextField } from '@mui/material';



const AddMovie = ({ addfilm }) => {
 
    const [newMovie, setNewMovie] = useState({
        title: "",
        description: "",
        img: "",
        rate: 0,
        year: 0
    })
    const handleChange = (e) => {
        setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
    }
    return (
        <div style={{ display: "flex", backgroundColor: "white", gap: "20px", marginBottom: "20px" }}>
             <div style={{display: "flex",gap: "15px", flexWrap: "wrap", padding: "5%"}}>
                <TextField style={{ width: '75ch' }} label="Movie Title" variant="outlined" name="title" onChange={handleChange} />
                <TextField style={{ width: '75ch' }} label="Movie Img Link" variant="outlined" name="img" onChange={handleChange} />
                <TextField style={{ width: '75ch' }} label="Movie Description" variant="outlined" name="description" onChange={handleChange} />
                <TextField style={{ width: '75ch' }} label="Movie Year" variant="outlined" name="year" onChange={handleChange} />
                <TextField style={{ width: '153ch' }} label="Movie Rate" variant="outlined" name="rate" onChange={handleChange} />
                <button style={{ width: "65ch",height: 50,background: "#cb0001", color: "#fff", textTransform: "uppercase", border: "#cb0001",borderRadius: 5,marginLeft: "30%"}} onClick={() => {
                addfilm(newMovie)
            }}>Add Movie</button>
          </div>
          
        </div>
    )

};

export default AddMovie;
