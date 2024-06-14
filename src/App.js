import './App.css';
import Front from './components/Front';
import Home from "./components/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";
import About from "./components/About";
import Contact from "./components/Contact";
import Community from "./components/Community";
import Updates from "./components/Updates";
import ThreeLayeredInformation from "./components/threeLayeredInformation";
import Error from "./components/Error";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import PostCreationPage from './components/PostCreationPage';
import UsersPostsPage from './components/UsersPostsPage';
import Post from './components/Post';


function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Post /> */}
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route index element={<Front />} />
            <Route exact path="/about-page" element={<About /> } />
            <Route exact path="/contact-page" element={<Contact /> } />
            <Route exact path="/community-page" element={<Community /> } />
            <Route exact path="/updates-page" element={<Updates /> } />
            <Route exact path="/login" element={<Login /> } />
            <Route exact path="/registration" element={<Registration />} />
            <Route exact path="/sign in" element={<Login />} />
            <Route exact path="/three-layered-information" element={<ThreeLayeredInformation /> } />
            <Route exact path="/post-creation-page" element={<PostCreationPage /> } />
            <Route exact path="/users-posts-creation-page" element={<UsersPostsPage /> } />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
