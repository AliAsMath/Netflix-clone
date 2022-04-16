import { useContext, useRef } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./../contex/auth-contex";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const { func } = useContext(AuthContext);

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post("auth/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });

      func.success(result.data);
      localStorage.setItem("user", JSON.stringify(result.data));

      navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-fit min-h-screen py-8 w-full flex items-center justify-center bg-cover bg-[url('https://wallpaperbat.com/img/350670-movie-posters-wallpaper.jpg')]">
      <form
        onSubmit={loginHandler}
        className="flex w-1/4 rounded p-4 text-white flex-col gap-5 bg-net-1"
      >
        <h1 className="text-4xl">Sing In</h1>
        <input
          className="bg-gray-500 h-12 p-2 rounded"
          type="email"
          placeholder="Email"
          ref={emailRef}
        />
        <input
          className="bg-gray-500 h-12 p-2 rounded"
          type="password"
          placeholder="Password"
          ref={passwordRef}
        />
        <button
          type="submit"
          className="rounded text-lg font-medium h-12 w-full bg-rose-500 p-2"
        >
          Sign In
        </button>
        <span>
          New to Netflix?{" "}
          <Link to="/register">
            <b>Sign up now.</b>
          </Link>
        </span>
        <small>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <b>Learn more</b>.
        </small>
      </form>
    </div>
  );
}

export default Login;
