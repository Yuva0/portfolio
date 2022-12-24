import classes from './css/Footer.module.css';
// import logo from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.footerContent}>
                <div className={classes.titleHeader}><h2>Thank you for visiting!</h2></div>
                {/* <div className={classes.subTitleHeader}><h3>So keep coming back everyday to improve your mental skills!</h3></div> */}
                {/* <div className={classes.logoIcon}><img src={logo}/></div> */}
                {/* <div className={classes.hr}/> */}
                <div className={classes.footerMenuComplete}>
                    <div className={classes.footerMenu}>
                        <div className={classes.footerMenuHeader}><h5>Content</h5></div>
                        <ul className={classes.footerMenuContent}>
                            <li><Link to={{pathname: "/"}}><h5>Home</h5></Link></li>
                            <li><Link to={{pathname: "/projects"}}><h5>Projects</h5></Link></li>
                            <li><Link to={{pathname: "/certificates"}}><h5>Certificates</h5></Link></li>
                            <li><Link to={{pathname: "/skills"}}><h5>Cards</h5></Link></li>
                            <li><Link to={{pathname: "/hobbies"}}><h5>Hobbies</h5></Link></li>
                        </ul>
                    </div>
                    {/* <div className={classes.footerMenu}>
                        <div className={classes.footerMenuHeader}><h5>Categories</h5></div>
                        <ul className={classes.footerMenuContent}>
                            <li><Link to={{pathname: "/category/awareness"}}><h5>Awareness</h5></Link></li>
                            <li><Link to={{pathname: "/category/thoughts"}}><h5>Thoughts</h5></Link></li>
                            <li><Link to={{pathname: "/category/emotions"}}><h5>Emotions</h5></Link></li>
                            <li><Link to={{pathname: "/category/mindset"}}><h5>Mindset</h5></Link></li>
                            <li><Link to={{pathname: "/category/philosophy"}}><h5>Philosophy</h5></Link></li>
                            <li><Link to={{pathname: "/category/psychology"}}><h5>Psychology</h5></Link></li>
                            <li><Link to={{pathname: "/category/productivity"}}><h5>Productivity</h5></Link></li>
                        </ul>
                    </div> */}
                    {/* <div className={classes.footerMenu}>
                        <div className={classes.footerMenuHeader}><h5>Policies</h5></div>
                        <ul className={classes.footerMenuContent}>
                            <li><a rel="noreferrer" target="_blank" href="https://www.privacypolicies.com/live/0a5b51a8-e89f-46ab-b04b-57fae01484bf"><h5>Privacy Policy</h5></a></li>
                            <li><a rel="noreferrer" target="_blank" href="https://www.privacypolicies.com/live/3c34addb-5a7d-4edd-8014-133e7c4c24bf"><h5>Terms &amp; Conditions</h5></a></li>
                            <li><a rel="noreferrer" target="_blank" href="https://www.privacypolicies.com/live/8012f3b7-c660-46d6-b1b5-cfc3cfe747ca"><h5>Cookies Policy</h5></a></li>
                            <li><a rel="noreferrer" target="_blank" href="https://www.privacypolicies.com/live/e9550bd4-e212-44e9-8bbc-c0ba61586045"><h5>Disclaimer</h5></a></li>
                        </ul>
                    </div> */}
                    <div className={`${classes.footerMenu} ${classes.lastFooterMenu}`}>
                        <div className={classes.footerMenuHeader}><h5>Socials</h5></div>
                        <ul className={classes.footerMenuContent}>
                            <li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/tanuj-sengupta-872a05129/"><h4><FontAwesomeIcon icon={faLinkedin}/></h4></a></li>
                            <li><a rel="noreferrer" target="_blank" href="https://github.com/Yuva0"><h4><FontAwesomeIcon icon={faGithub}/></h4></a></li>
                            <li><a rel="noreferrer" target="_blank" href="https://www.facebook.com/tanuj.sengupta/"><h4><FontAwesomeIcon icon={faFacebook}/></h4></a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Footer;