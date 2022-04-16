import { useRef, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [email, setEamil] = useState("");
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const emailHandler = (e) => {
    e.preventDefault();
    setEamil(emailRef.current.value);
    emailRef.current.value = "";
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("auth/register", {
        email,
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      });

      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen h-screen bg-[url('https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg')]">
      <div className="h-full  bg-gradient-to-b from-transparent to-net-1">
        <Link
          to="/login"
          className="bg-rose-500 rounded leading-none text-white px-4 py-2 text-lg absolute top-5 right-5 font-medium"
        >
          Sign In
        </Link>
        <img
          className="w-32 absolute left-5 top-5"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt=""
        />
        <div className="h-full items-center flex justify-center flex-col gap-4 text-white">
          <h1 className="text-5xl font-bold">
            Unlimited movies, TV shows, and more.
          </h1>
          <h2 className="text-2xl font-medium">
            Watch anywhere. Cancel anytime.
          </h2>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          {!email ? (
            <form onSubmit={emailHandler} className="flex items-stretch w-1/2">
              <input
                className="flex-[3] rounded-l p-2 text-net-1 text-lg focus:outline-none"
                type="text"
                placeholder="Email Address"
                ref={emailRef}
              />
              <button
                type="submit"
                className="flex-[1] py-4 bg-rose-500 rounded-r text-white text-lg font-medium"
              >
                Get Start
              </button>
            </form>
          ) : (
            <form
              onSubmit={registerHandler}
              className="flex items-stretch w-1/2"
            >
              <input
                className="flex-[3] rounded-l p-2 text-net-1 text-lg focus:outline-none"
                type="text"
                placeholder="username"
                ref={usernameRef}
              />
              <input
                className="flex-[3] p-2 text-net-1 text-lg focus:outline-none"
                type="password"
                placeholder="Password"
                ref={passwordRef}
              />
              <button
                type="submit"
                className="flex-[1] py-4 bg-rose-500 rounded-r text-white text-lg font-medium"
              >
                Start
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;
