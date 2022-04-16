import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Featured(props) {
  const [randomMovie, setRandomMovie] = useState({});

  useEffect(() => {
    const fetchRandomMovie = async () => {
      try {
        const result = await axios.get("movies/random");

        setRandomMovie(result.data[0]);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRandomMovie();
  }, []);

  return (
    <div className="relative w-full h-fit  min-h-screen overflow-hidden text-white bg-net-1">
      <img
        src={randomMovie.img}
        className="object-cover w-full h-full absolute left-0 top-0"
        alt=""
      />
      <div className=" min-h-screen flex flex-col md:pl-20 sm:pl-14 pl-7 pb-12 pt-16 justify-between">
        <div className=" h-full flex gap-5 z-10">
          {props.type && (
            <>
              <span className="text-3xl font-medium">{props.type}</span>
              <select
                className="p-1 border border-white cursor-pointer focus:outline-none bg-net-1"
                name="genre"
                id="genre"
                onChange={(e) => props.setGenre(e.target.value)}
              >
                <option>Genre</option>
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
                <option value="Comedy">Comedy</option>
                <option value="Crime">Crime</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Historical">Historical</option>
                <option value="Horror">Horror</option>
                <option value="Romance">Romance</option>
                <option value="Sci-fi">Sci-fi</option>
                <option value="Thriller">Thriller</option>
                <option value="Western">Western</option>
                <option value="Animation">Animation</option>
                <option value="Drama">Drama</option>
                <option value="Documentary">Documentary</option>
              </select>
            </>
          )}
        </div>

        <div className=" flex flex-col w-full gap-5 z-10">
          <h2 className="text-4xl font-bold text-rose-200 bg-rose-500 rounded-lg leading-none p-3 w-fit">
            {randomMovie.title}
          </h2>
          <div className="  md:w-1/3 w-1/2 sm:text-base text-sm ">
            <p className="bg-net-1 border border-white p-2 rounded">
              {randomMovie.desc}
            </p>
          </div>
          <div className="flex gap-5">
            <button className="px-5 py-2 text-lg flex items-center gap-1 font-medium rounded text-net-1 bg-gray-50">
              <PlayArrow />
              Play
            </button>
            <button className="px-5 py-2 text-lg flex items-center gap-1 font-medium  bg-gray-600 rounded">
              <InfoOutlined />
              Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
