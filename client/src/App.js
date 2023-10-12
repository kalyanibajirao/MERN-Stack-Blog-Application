import "./App.css";
import Dataprovider from "./context/dataprovider";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/account/Login";
import Home from "./components/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Dataprovider>
        <div className="App" style={{ marginTop: 64 }}>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home />} />

          </Routes>
        </div>
      </Dataprovider>
    </BrowserRouter>
  );
}

export default App;
