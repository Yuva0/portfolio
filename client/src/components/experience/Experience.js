import { Fragment } from 'react';
import classes from './css/Experience.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin,faCalendar } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
  return (
    <Fragment>
    <div className={`${classes.experienceTitle} title`}><h3>Experience</h3></div>
    
    <div className={classes.timeline}>
         <div className={`${classes["timeline-row"]} ${classes["timeline-row-right"]} ${classes["timeline-row-first"]}`}>
            <div className={`${classes["timeline-blank"]} ${classes["timeline-item-visible"]}`}></div>
            <div className={classes["timeline-circle"]}><div className={classes["timeline-item-circle"]}></div></div>
            <div className={classes["timeline-item"]}>
                <div className={classes["timeline-item-position"]}>Sr. Software Developer</div>
                <div className={classes["timeline-location"]}>
                    <span>&nbsp;<FontAwesomeIcon icon={faLocationPin}/>&nbsp;&nbsp;Whatfix</span>
                    <span><FontAwesomeIcon icon={faCalendar}/>&nbsp;&nbsp;Oct 2023 - Present&nbsp;&nbsp;</span>
                </div>
                <ul className={classes["timeline-description"]}>
                    <li className={classes["timeline-description-item"]}>Developing a comprehensive component design system for our products.</li>
                    <li className={classes["timeline-description-item"]}>Ensuring accessibility and optimizing performance of all designed components.</li>
                    <li className={classes["timeline-description-item"]}>Currently managing a library of 60+ components, all built entirely from scratch.</li> 
                </ul>
                <ul className={classes["timeline-skills"]}>
                    <li className={classes["timeline-skills-item"]}>Design System</li>
                    <li className={classes["timeline-skills-item"]}>React</li>
                    <li className={classes["timeline-skills-item"]}>Jest</li>
                    <li className={classes["timeline-skills-item"]}>Javascript</li>
                </ul>
            </div>
        </div>
        <div className={`${classes["timeline-row"]} ${classes["timeline-row-left"]}`}>
            <div className={`${classes["timeline-circle"]} ${classes["timeline-item-invisible"]}`}><div className={classes["timeline-item-circle"]}></div></div>
            <div className={classes["timeline-item"]}>
                <div className={classes["timeline-item-position"]}>Software Developer</div>
                <div className={classes["timeline-location"]}>
                    <span>&nbsp;<FontAwesomeIcon icon={faLocationPin}/>&nbsp;&nbsp;SAP Labs, India</span>
                    <span><FontAwesomeIcon icon={faCalendar}/>&nbsp;&nbsp;Jan 2020 - Oct 2023&nbsp;&nbsp;</span>
                </div>
                <ul className={classes["timeline-description"]}>
                    <li className={classes["timeline-description-item"]}>Managed the complete flow (Back-End. Front-End and APIs) of 8 websites</li> 
                    <li className={classes["timeline-description-item"]}>Worked with experienced testers to find performance bottlenecks thus improving page loading time by 19%</li>
                    <li className={classes["timeline-description-item"]}>Constructed test cases to minimize unused code and remove dead code </li>
                    <li className={classes["timeline-description-item"]}>Won Rising Star Award in 2021</li>
                </ul>
                <ul className={classes["timeline-skills"]}>
                    <li className={classes["timeline-skills-item"]}>OpenUI5</li>
                    <li className={classes["timeline-skills-item"]}>Javascript</li>
                    <li className={classes["timeline-skills-item"]}>JMeter</li>
                    <li className={classes["timeline-skills-item"]}>Postman</li>
                </ul>
            </div>
            <div className={`${classes["timeline-circle"]} ${classes["timeline-item-visible"]}`}><div className={`${classes["timeline-item-circle"]} ${classes["timeline-item-visible"]}`}></div></div>
            <div className={`${classes["timeline-blank"]} ${classes["timeline-item-visible"]}`}></div>
        </div>
        <div className={`${classes["timeline-row"]} ${classes["timeline-row-right"]}`}>
            <div className={`${classes["timeline-blank"]} ${classes["timeline-item-visible"]}`}></div>
            <div className={classes["timeline-circle"]}><div className={classes["timeline-item-circle"]}></div></div>
            <div className={classes["timeline-item"]}>
                <div className={classes["timeline-item-position"]}>Project Intern</div>
                <div className={classes["timeline-location"]}>
                    <span>&nbsp;<FontAwesomeIcon icon={faLocationPin}/>&nbsp;&nbsp;Wipro Limited</span>
                    <span><FontAwesomeIcon icon={faCalendar}/>&nbsp;&nbsp;May 2019 - Jul 2019&nbsp;&nbsp;</span>
                </div>
                <ul className={classes["timeline-description"]}>
                    <li className={classes["timeline-description-item"]}>Worked on Web Testing using Selenium WebDriver</li>
                    <li className={classes["timeline-description-item"]}>Used Eclipse IDE to work in Selenium</li>
                    <li className={classes["timeline-description-item"]}>Studied about Agile and Waterfall technology</li> 
                </ul>
                <ul className={classes["timeline-skills"]}>
                    <li className={classes["timeline-skills-item"]}>Selenium</li>
                    <li className={classes["timeline-skills-item"]}>Agile</li>
                    <li className={classes["timeline-skills-item"]}>Waterfall</li>
                    <li className={classes["timeline-skills-item"]}>Eclipse</li>
                </ul>
            </div>
        </div>
        <div className={`${classes["timeline-row"]} ${classes["timeline-row-left"]}`}>
            <div className={`${classes["timeline-circle"]} ${classes["timeline-item-invisible"]}`}><div className={classes["timeline-item-circle"]}></div></div>
            <div className={classes["timeline-item"]}>
                <div className={classes["timeline-item-position"]}>Web Developer Intern</div>
                <div className={classes["timeline-location"]}>
                    <span>&nbsp;<FontAwesomeIcon icon={faLocationPin}/>&nbsp;&nbsp;Larsen & Toubro</span>
                    <span><FontAwesomeIcon icon={faCalendar}/>&nbsp;&nbsp;May 2018 - Jun 2018&nbsp;&nbsp;</span>
                </div>
                <ul className={classes["timeline-description"]}>
                    <li className={classes["timeline-description-item"]}>Worked on creating a Sharepoint website</li>
                    <li className={classes["timeline-description-item"]}>Front-end was created using ASP.NET and Javascript</li>
                    <li className={classes["timeline-description-item"]}>Back-end was developed using C#</li>
                    <li className={classes["timeline-description-item"]}>SQL was used to access the database</li>
                    <li className={classes["timeline-description-item"]}>Worked on automatically generating an SSRS report when the user clicked on Export</li>
                </ul>
                <ul className={classes["timeline-skills"]}>
                    <li className={classes["timeline-skills-item"]}>ASP.NET</li>
                    <li className={classes["timeline-skills-item"]}>Javascript</li>
                    <li className={classes["timeline-skills-item"]}>Sharepoint</li>
                    <li className={classes["timeline-skills-item"]}>SQL</li>
                </ul>
            </div>
            <div className={`${classes["timeline-circle"]} ${classes["timeline-item-visible"]}`}><div className={`${classes["timeline-item-circle"]} ${classes["timeline-item-visible"]}`}></div></div>
            <div className={`${classes["timeline-blank"]} ${classes["timeline-item-visible"]}`}></div>
        </div>
        <div className={`${classes["timeline-row"]} ${classes["timeline-row-right"]} ${classes["timeline-row-bottom"]}`}>
            <div className={`${classes["timeline-blank"]} ${classes["timeline-item-visible"]}`}></div>
            <div className={classes["timeline-circle"]}><div className={classes["timeline-item-circle"]}></div></div>
            <div className={classes["timeline-item"]}>
                <div className={classes["timeline-item-position"]}>App Developer Intern</div>
                <div className={classes["timeline-location"]}>
                    <span>&nbsp;<FontAwesomeIcon icon={faLocationPin}/>&nbsp;&nbsp;Webloom Solutions</span>
                    <span><FontAwesomeIcon icon={faCalendar}/>  &nbsp;&nbsp;May 2017 - Jul 2017&nbsp;&nbsp;</span>
                </div>
                <ul className={classes["timeline-description"]}>
                    <li className={classes["timeline-description-item"]}>Worked on the codebase for an app called Leuk</li>
                    <li className={classes["timeline-description-item"]}>Got hands-on experience on Android Studio </li>
                    <li className={classes["timeline-description-item"]}>Worked on creating different components for the app like TextView, ImageButton, Toast and RadioButton</li> 
                </ul>
                <ul className={classes["timeline-skills"]}>
                    <li className={classes["timeline-skills-item"]}>Android Studio</li>
                    <li className={classes["timeline-skills-item"]}>Toast</li>
                    <li className={classes["timeline-skills-item"]}>RadioButton</li>
                    <li className={classes["timeline-skills-item"]}>TextView</li>
                </ul>
            </div>
        </div>
        <div className={classes["time-line"]}>&nbsp;</div>
    </div>
    </Fragment>
  );
}

export default Experience;