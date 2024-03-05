import { Route, Routes } from "react-router-dom";
import Home from './components/pages/Home/Home';
import SinglePost from './components/pages/SinglePost/SinglePost';
import About from './components/pages/About/About';
import AddPost from './components/pages/AddPost/AddPost';
import EditPost from './components/pages/EditPost/EditPost';
import NotFound from './components/pages/NotFound/NotFound';


const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/post/:id" element={ <SinglePost />} />
        <Route path="/post/add" element={ <AddPost />} />
        <Route path="/post/edit/:id" element={ <EditPost />} />
        <Route path="/about" element={ <About />} />
        <Route path="*" element={ <NotFound />} />
      </Routes>
    </main>
  );
};

export default App;
