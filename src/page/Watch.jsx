import { ArrowBack } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

function Watch() {
  const {
    state: { movie },
  } = useLocation();

  return (
    <div>
      <div className="text-white font-medium flex items-center cursor-pointer z-10 absolute top-5 left-5">
        <Link to="/">
          <ArrowBack />
          Home
        </Link>
      </div>
      <video
        className="w-full  h-screen object-cover"
        src={movie.video}
        controls
        autoPlay
        muted
      ></video>
    </div>
  );
}

export default Watch;
