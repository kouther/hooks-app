import { useState } from "react"
import './App.css';
import Filter from "./Components/Filter";
import MovieList from './Components/MovieList';



function App() {
  const [movies, setMovies] = useState([
    {
      title: "Mulan",
      rate: 3,
      year: 2020,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img:
        "https://media.services.cinergy.ch/media/box1600/72cf0c8639e7204b68fd4c78f3aa9864b30a40da.jpg",
    },
    {
      title: "Coco",
      rate: 4,
      year: 2019,
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img:
        "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_.jpg",
    },
    {
      title: "Spider-Man",
      rate: 4,
      year: 2015,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img:
        "https://cdn.pocket-lint.com/r/s/970x/assets/images/159643-tv-news-spider-man-no-way-home-image1-dryautoefj.jpg",
    },
    {
      title: "Cruella",
      rate: 5,
      year: 2021,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img:
        "https://pinewoodgroup.com/media/7006/cruella-disney-poster.jpg?mode=crop&width=350",
    },
    {
      title: "Snow white",
      rate: 3,
      year: 2016,
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img:
        "https://www.almo7eb.com/ar/upload/2018/03/snow_white_and_the_huntsman.jpg",
    },
    {
      title: "Aladdin",
      rate: 2,
      year: 2020,
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img:
        "https://lumiere-a.akamaihd.net/v1/images/image_9e35a739.jpeg?region=0%2C0%2C540%2C810",
    },
    {
      title: "Enola homles",
      rate: 4,
      year: 2021,
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img:
        "https://m.media-amazon.com/images/M/MV5BZjNkNzk0ZjEtM2M1ZC00MmMxLTlmOWEtNWRlZTc1ZTUyNzY4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
    },
    {
      title: "Jumanji",
      rate: 4,
      year: 2019,
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img:
        "https://old.akwam.link/files/1520396833.jpg",
    },
  ]);
  const [searchInput, setsearchInput] = useState("")

  const searchItems = (searchValue) => {
    setsearchInput(searchValue)
}
console.log('#', searchItems);

const addNewMovie = (newMovie) => {
  setMovies(movies.concat(newMovie))
}

  return (
    <div className="App">

            <Filter searchItems={searchItems} />

            <MovieList movies={movies.filter((movie) => movie.title.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase().trim()))} addfilm={addNewMovie} />


    </div>
  );
}

export default App;
