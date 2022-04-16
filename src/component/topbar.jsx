import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./../contex/auth-contex";

function Topbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { func } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    state: { user },
  } = useContext(AuthContext);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
  };

  const logOutHandler = () => {
    localStorage.removeItem("user");
    func.success(null);
    document.cookie = "token= ;";
    navigate("/login", { replace: true });
  };

  return (
    <nav
      className={`fixed top-0 flex  items-center z-20 w-full md:px-16 sm:px-8 px-3 py-4 text-sm text-white ${
        isScrolled ? "bg-net-1" : "bg-gradient-to-t from-transparent to-net-1"
      }`}
    >
      <div className="flex items-center flex-1 basis-auto xs:gap-10 gap-5 ">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            className="h-6"
            alt=""
          />
        </Link>
        <ul className="flex items-center gap-5">
          <li className="hidden xs:block">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/series">Series</Link>
          </li>
          <li className="md:block hidden">New and Popular</li>
          <li className="md:block hidden">My List</li>
        </ul>
      </div>
      <div className="flex items-center justify-end flex-1 basis-auto gap-5">
        <Search className="sm:block hidden" />
        <span className="sm:block hidden">Kid</span>
        <Notifications className="sm:block hidden" />
        <img
          src={
            user?.profilePic ||
            "https://i.pinimg.com/474x/b4/0f/9f/b40f9f8fc0fb88aabf2a8acbc39c0ac0.jpg"
          }
          className="object-cover w-8 h-8 rounded"
          alt=""
        />
        <div className=" group">
          <ArrowDropDown />
          <div className="absolute flex-col hidden p-2 rounded bg-net-1 group-hover:flex">
            <span>Settings</span>
            <span className="cursor-pointer" onClick={logOutHandler}>
              Log out
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Topbar;
