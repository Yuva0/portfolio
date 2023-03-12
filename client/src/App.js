import { Route, Routes} from 'react-router-dom';

import Homepage from "./components/pages/homepage/Homepage";
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';

import classes from './App.module.css';
import CookieOverlay from './components/overlays/Cookies/CookieOverlay';
import ArticlePage from './components/pages/articlepage/ArticlePage';
import ProjectsPage from './components/pages/projectspage/ProjectsPage';
import CertificatesPage from './components/pages/certificatespage/CertificatesPage';
import SkillsPage from './components/pages/skillspage/SkillsPage';
import HobbiesPage from './components/pages/hobbiespage/HobbiesPage';
import BlogsPage from './components/pages/blogspage/BlogsPage';

function App() {
  return (
    <div className={classes.app}>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/project/:idTitle" element={<ArticlePage type="projects"/>}/>
        <Route path="/certificate/:idTitle" element={<ArticlePage type="certificates"/>}/>
        <Route path="/skill/:idTitle" element={<ArticlePage type="skills"/>}/>
        <Route path="/hobby/:idTitle" element={<ArticlePage type="hobbies"/>}/>
        <Route path="/blog/:idTitle" element={<ArticlePage type="blogs"/>}/>
        <Route path="/projects/" element={<ProjectsPage/>}/>
        <Route path="/certificates/" element={<CertificatesPage/>}/>
        <Route path="/skills/" element={<SkillsPage/>}/>
        <Route path="/hobbies" element={<HobbiesPage/>}/>
        <Route path="/blogs" element={<BlogsPage/>}/>
      </Routes>
      <Footer/>
      <CookieOverlay/>
    </div>
  );
}

export default App;
