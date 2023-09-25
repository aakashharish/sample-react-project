import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./screens/home/Home";
import Creat from "./screens/createpost/Creat";
import PostDetail from "./screens/postdetail/PostDetail";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<Creat/>}/>
          <Route path="/post/:id" element={<PostDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
