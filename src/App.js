import { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

export default function App() {
  let preLoginList = ["/", "/login", "/register", "/ForgotPassword"];
  let location = useLocation();

  return (
    <>
      {/*Logic for Navigation*/}

      {preLoginList.includes(location.pathname) ? (
        <div>
          <Link to="/">Login | </Link>
          <Link to="/register">Register</Link>
        </div>
      ) : (
        <div>
          <Link to="/Welcome-home">Home | </Link>
          <Link to="/Welcome-home">Explore | </Link>
          <Link to="/Welcome-home">Home</Link>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>

        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/Welcome-home" element={<Wel></Wel>}></Route>
        <Route path="/explore" element={<Wel></Wel>}></Route>
        <Route path="/message" element={<Wel></Wel>}></Route>
        <Route
          path="/ForgotPassword"
          element={<ForgetPassword></ForgetPassword>}
        ></Route>
      </Routes>
    </>
  );
}

//Routers

function Login() {
  let navigate = useNavigate();
  const Authenticate = () => {
    navigate("/Welcome-home");
  };
  return (
    <div>
      <h1>Login Page</h1>

      <div>
        <input type="text" id="id1"></input>
      </div>
      <div>
        <input type="password" id="id2"></input>
      </div>

      <div>
        <input type="button" value="Login" onClick={Authenticate}></input>
      </div>
      <Link to="/ForgotPassword">ForgotPassword</Link>
    </div>
  );
}

function Register() {
  return <div>Register</div>;
}

function ForgetPassword() {
  return (
    <div>
      <h1>UI for ForgotPassword</h1>
    </div>
  );
}

function Wel() {
  let navigate = useNavigate();

  const signOut = () => {
    navigate("/login");
  };
  return (
    <div>
      <h1>Welcome Page</h1>
      <div>
        <input type="button" value="SignOut" onClick={signOut}></input>
      </div>
    </div>
  );
}
