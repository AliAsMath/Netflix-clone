import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ListItem(props) {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const result = await axios.get("movies/find/" + props.movieId);

        setMovie(result.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchLists();
  }, [props.movieId]);

  return (
    <div className="w-full group h-full text-white">
      <img className="w-full  object-cover h-full " src={movie.img} alt="" />
      <div className="w-full h-full bg-net-1  absolute top-0 left-0 hidden group-hover:block">
        <Link to="/watch" state={{ movie }}>
          <video
            className="h-1/2 w-full object-cover"
            src={movie.trailer}
            autoPlay={true}
            loop
            muted
          />
        </Link>
        <div className="flex h-1/2 w-full flex-col p-1 text-[5px] gap-1">
          <div className="flex w-full items-center justify-between">
            <div className="flex gap-1 ">
              <PlayArrow className="border text-xs  border-white rounded-full" />
              <Add className="border text-xs border-white rounded-full" />
              <ThumbUpAltOutlined className="border text-xs p-[1px] border-white rounded-full" />
              <ThumbDownOutlined className="border text-xs p-[1px] border-white rounded-full" />
            </div>
            <div className="text-gray-400 flex items-center text-[7px]  gap-2">
              <span>{movie.duration}</span>
              <span className="border p-[2px] rounded-sm leading-none border-gray-400">
                {movie.limit}
              </span>
              <span>{movie.year}</span>
            </div>
          </div>
          <div className="text-xs leading-none">{movie.title}</div>
          <p className=" w-full text-[6px]">{movie.desc}</p>
          <div className="text-[7px]">{movie.genre}</div>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
