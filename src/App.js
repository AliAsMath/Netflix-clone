import axios from "axios";
import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
import Watch from "./page/Watch";
import { AuthContext } from "./contex/auth-contex";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:8800/api/";

function App() {
  const {
    state: { user },
  } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/movies" state="movie" element={<Home type="movie" />} />
        <Route path="/series" element={<Home type="series" />} />
        <Route path="/watch" element={<Watch />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
