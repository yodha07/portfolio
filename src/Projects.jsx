import './App.css';
import { Link } from 'react-router-dom';

const ProjectInfo = () => (
    <div className="mediabox">
        <div className="container">
            <div className="item1">
                <ul>
                    <li><a className="aditya_sutar" href="/">Aditya Sutar</a></li>
                </ul>
            </div>

            <div className="item2">
                <ul>
                    <li><a href="/playlist" className="nav_links">Playlist</a></li>
                    <li><a href="favicon_ico/Aditya-Hemant-Sutar-1.pdf" target="_blank" className="nav_links">Resume</a></li>
                </ul>
            </div>
        </div>

        <div className="project_wrapper">
            <div className="project_showcase">
                <h1>Projects</h1>
                <h1><span className="red_asterisk">*</span> Personal Portfolio</h1>
                <p className="project_desc"> This website was made and designed by me taking inspiration from
                    Daniel Eden's portfolio,
                    I solve complex problems through simple, effective solutions.
                    From crafting intuitive user experiences to writing clean, efficient code, I aim to create digital projects that make life easier and more enjoyable. Let's build something great together.</p>

                <div className="project1">
                    <h1><span className="red_asterisk">*</span> Siddhesh Pathare's Portfolio</h1>
                    <a target="_blank" href="https://siddheshpathare.vercel.app/">
                        <img src="/favicon_ico/testportfofin.png" loading='lazy' alt="Siddhesh Pathare's Portfolio Screenshot" />
                    </a>
                    <p className="project_desc">Siddhesh Digambar Pathare is a celebrated Thane-based illustrator. Having completed Applied Arts at L.S. Raheja School of Arts, Bandra.
                        This <Link to="https://siddheshpathare.vercel.app/" className="intro1">website</Link> serves as his online portfolio showcasing all of his art at one place.</p>
                </div>

                <div className="project2">
                    <h1><span className="red_asterisk">*</span> Timepass Valentine's project</h1>
                    <a target="_blank" href="https://pookie-bear-seven.vercel.app/">
                        <img src="/favicon_ico/testportfo4.png" loading='lazy' alt="Valentine's Project Screenshot" />
                    </a>
                    <p className="project_desc">This <Link to="https://pookie-bear-seven.vercel.app/" className="intro1">website</Link> is made for fun, using simple JQuery. When you click "No" on the Pookie Bear site, the playful and charming vibe takes a cheeky turn. It humorously responds with quirky animations and fun dialogue, keeping the lighthearted mood while making you feel gently nudged back to pick "Yes" instead. It’s a clever, interactive way to ensure your special someone can never say NO to being your Valentine!!</p>
                </div>
            </div>
        </div>

        <div className="item4">        
            <footer>
                <p style= {{fontStyle: 'italic', padding: 0}}>Made and maintained by Aditya Sutar</p>
            </footer>
        </div>
    </div>
);

export default function Project() {
    window.location.reload(1)
    window.scrollTo({top: 0, behavior:'smooth'})
    console.log("Working")
    return(
    <>
    <ProjectInfo />;
    </> 
    )
}
