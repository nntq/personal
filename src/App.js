import './App.css';
import './MB.css';
import Home from './components/Home';
import About from './components/About';
import AboutContent from './components/AboutContent';
import Skills from './components/Skills';
import SkillsContent from './components/SkillsContent';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import React, {useState, useEffect, useRef} from 'react'
import HomeMB from './components-mb/HomeMB';
import AboutMB from './components-mb/AboutMB';
import AboutContentMB from './components-mb/AboutContentMB';
import SkillsMB from './components-mb/SkillsMB';
import SkillsContentMB from './components-mb/SkillsContentMB';
import ContactMB from './components-mb/ContactMB';

function App() {

  const [page, setPage] = React.useState(0);
  const about = useRef(null);
  const skills = useRef(null);
  const contact = useRef(null);
  const home = useRef(null);

  const [submitted, setSubmit] = useState(false);
  

  return (
    <div className="App">
        <Navbar value={page} about={about} skills={skills} home={home} contact={contact} change={setPage} />
        {/* <NavbarMB /> */}
        <HomeMB />
        <AboutMB />
        <AboutContentMB />
        <SkillsMB />
        <SkillsContentMB />
        <ContactMB submitted={submitted} setSubmit={setSubmit} />
        <Home change={setPage}/>
        <About change={setPage}/>
        <AboutContent about={about}/>
        <Skills skills={skills} change={setPage}/>
        <SkillsContent />
        <Contact contact={contact} change={setPage}/>
    </div>
  );
}

export default App;
