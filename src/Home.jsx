import './App.css';
import { Link } from 'react-router-dom';

const Intro = () => (
  <div className="intro">
    <p>
      I am <a href="https://www.instagram.com/adityeah_in/" target="_blank" rel="noopener noreferrer" className="intro1">
        Aditya Sutar
      </a>
      . I'm a passionate Computer Engineering graduate with a focus on web development.  
      I like spending my time listening to my <a href="/playlist" className="intro1">playlist</a>, thinking, posting, and talking about new Technology: How they work, 
      How they break, and the people Who make it!
    </p>
  </div>
);

const WorkSection = () => (
  <div className="work">
    <a 
      className="work1" 
      target="_blank" 
      rel="noopener noreferrer" 
      href="https://siddheshpathare.vercel.app/" 
    >
      <div>
        <p className="heading">Siddhesh Pathare's portfolio</p>
        <img src="/favicon_ico/testportfofin.png" alt="Siddhesh Pathare's Portfolio" />
      </div>
    </a>
    <div className="work2">
      <p className="heading hover-text1">What I do???</p>
      <p className="hover-text heading"> Solve Problems, Find Solutions</p>
    </div>
  </div>
);

const Vanessa = () => (
  <div className="vanessa">
    <Link to="/playlist" className="playlist">
      Playlist &#8594;
    </Link>
    <Link to="favicon_ico/Aditya-Hemant-Sutar-1.pdf" target="_blank" className="resume">
      Résumé &#8594;
    </Link>
    <Link to="/projects" className="projects">
      Projects &#8594;
    </Link>

    <footer>
      <p style={{ fontStyle: 'italic', padding: 0, fontSize: '1.5rem' }}>
        Made and maintained by{' '}
        <a
          href="https://www.linkedin.com/in/aditya-sutar-22a9b122a/"
          className="intro1"
          target="_blank"
        >
          Aditya Sutar
        </a>
      </p>
    </footer>
  </div>
);


export default function Home() {
  return (
    <>
      <Intro />
      <WorkSection />
      <Vanessa />
    </>
  );
}
