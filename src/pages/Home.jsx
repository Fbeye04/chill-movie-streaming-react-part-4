import { Routes, Route } from "react-router-dom";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import Dashboard from "./Dashboard";
import MyList from "./MyList";
import Series from "./Series";
import Film from "./Film";
import Profil from "./Profil";

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />

      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='series' element={<Series />}></Route>
        <Route path='film' element={<Film />} />
        <Route path='my-list' element={<MyList />} />
        <Route path='profil' element={<Profil />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default Home;
