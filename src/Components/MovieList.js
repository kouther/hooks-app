import React, { useState } from "react";
import MovieCard from './MovieCard';
import AddMovie from "./AddMovie";



const MovieList=({ movies, addfilm})=>{
    return (
        <div>
            <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", padding:"3%" }}>
                {movies.map((el) => (
                    <MovieCard movie={el} />
                ))}
            </div>
            <h4>ADD A NEW MOVIE</h4>
            <p style={{textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <AddMovie addfilm={addfilm} />
        </div>
    );
};
export default MovieList;