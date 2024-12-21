// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './footer.css'
const foot = ()=> {
    
    return (
        <footer>
            <div className="footbox">
                <div className="footHead">
                    <img src="" alt="" />
                    <p>logoipsum</p>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</p>
                <div className="anker">
                    <a href="">About</a>
                    <a href="">Careers</a>
                    <a href="">History</a>
                    <a href="">Services</a>
                    <a href="">Projects</a>
                    <a href="">Blog</a>
                </div>
                <div className="fonts">
                {/* <FontAwesomeIcon icon={faFacebook} className='facebook'/>
                <FontAwesomeIcon icon={faGithub} inverse/>
                <FontAwesomeIcon icon={faGithub} />
                <FontAwesomeIcon icon={faGithub} />
                <FontAwesomeIcon icon={faGithub} /> */}
                </div>
            </div>
        </footer>
    )
}
export default foot;