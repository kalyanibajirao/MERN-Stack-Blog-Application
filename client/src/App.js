import "./App.css";

import { useState } from "react";

import Dataprovider from "./context/dataprovider";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

//component
import Login from "./components/account/Login";
import Home from "./components/home/Home";
import Header from "./components/Header/Header.js";
import CreatePost from "./components/create/CreatePost";

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate replace to="/login" />
  );
};

function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Dataprovider>
        <div className="App" style={{ marginTop: 64 }}>
          <Routes>
            <Route path="/login" element={<Login isUserAuthenticated={isUserAuthenticated} />}/>

            <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/' element={<Home />} />
            </Route>

            <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/create' element={<CreatePost />} />
            </Route>

              
          </Routes>
        </div>
      </Dataprovider>
    </BrowserRouter>
  );
}

export default App;
