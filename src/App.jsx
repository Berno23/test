import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from './pages/Home';
import UsersList from './pages/UsersList';
import Countries from './pages/countries';  
import Graphique from "./pages/graphiques";
// import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/usersList" element={<UsersList />} />
        <Route path="/countries" element={<Countries />} />   
        {/* <Route path="/graphiques" element={<Graphique />} />    */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
