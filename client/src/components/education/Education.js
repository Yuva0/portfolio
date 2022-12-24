import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin, faCalendar } from "@fortawesome/free-solid-svg-icons";

import classes from './css/Education.module.css';

const Education = () => {
  return (
    <Fragment>
      <div className={`${classes.educationTitle} title`}><h3>Education</h3></div>
      <div id="educational-timeline" className={classes.timeline}>
          <div className={classes["time-line"]}>&nbsp;</div>
          <div className={`${classes["timeline-row"]} ${classes["timeline-row-left"]} ${classes["timeline-row-first"]}`}>
              <div className={`${classes["timeline-circle"]} ${classes["timeline-item-invisible"]}`}><div className={classes["timeline-item-circle"]}></div></div>
              <div className={classes["timeline-item"]}>
                  <div className={classes["timeline-item-position"]}>B.Tech (Computer Science)</div>
                  <div className={classes["timeline-location"]}>
                      <span>&nbsp;<FontAwesomeIcon icon={faLocationPin}/>&nbsp;&nbsp;Manipal University</span>
                      <span><FontAwesomeIcon icon={faCalendar}/>&nbsp;&nbsp;Apr 2016 - Apr 2020&nbsp;&nbsp;</span>
                  </div>
                  <ul className={classes["timeline-description"]}>
                      <li className={classes["timeline-mini-description"]}>1st Year: Programming Languages</li> 
                      <ul >
                          <li className={classes["timeline-description-item"]}>Learnt C, C++ and Java</li>
                          <li className={classes["timeline-description-item"]}>Learnt basics of Python through HackerRank</li>
                          <li className={classes["timeline-description-item"]}>GPA: 9.1</li>
                      </ul>
                      <li className={classes["timeline-mini-description"]}>2nd Year: App Development</li>
                      <ul>
                          <li className={classes["timeline-description-item"]}>Dived into Android Studio to understand how to create apps</li>
                          <li className={classes["timeline-description-item"]}>Learnt PHP and MySQL using Coursera</li>
                          <li className={classes["timeline-description-item"]}>GPA: 8.7</li>
                      </ul>
                      <li className={classes["timeline-mini-description"]}>3rd Year: Machine Learning</li>
                          <ul>
                              <li className={classes["timeline-description-item"]}>Learnt about Deep Learning, Artificial Neural Networks and Logistic Regression</li>
                              <li className={classes["timeline-description-item"]}>Implemented it using Jupyter Notebooks and R</li>
                              <li className={classes["timeline-description-item"]}>GPA:8.2</li>
                          </ul>
                      <li className={classes["timeline-mini-description"]}>4th Year: Web Development
                          <ul>
                              <li className={classes["timeline-description-item"]}>Learnt about PHP, Javascript and MySQL</li>
                              <li className={classes["timeline-description-item"]}>Increased my proficiency in basic languages like HTML5 and CSS</li>
                              <li className={classes["timeline-description-item"]}>GPA: 8.6</li>
                          </ul>
                      </li>
                      <li className={classes["timeline-description-item"]}>CGPA: 8.6</li>
                  </ul>
                  <ul className={classes["timeline-skills"]}>
                      <li className={classes["timeline-skills-item"]}>Javascript</li>
                      <li className={classes["timeline-skills-item"]}>PHP</li>
                      <li className={classes["timeline-skills-item"]}>Android Studio</li>
                      <li className={classes["timeline-skills-item"]}>MySQL</li>
                      <li className={classes["timeline-skills-item"]}>C</li>
                      <li className={classes["timeline-skills-item"]}>C#</li>
                      <li className={classes["timeline-skills-item"]}>Java</li>
                      <li className={classes["timeline-skills-item"]}>Python</li>
                      <li className={classes["timeline-skills-item"]}>Deep Learning</li>
                  </ul>
              </div>
              <div className={`${classes["timeline-circle"]} ${classes["timeline-item-visible"]}`}><div className={`${classes["timeline-item-circle"]} ${classes["timeline-item-visible"]}`}></div></div>
              <div className={`${classes["timeline-blank"]} ${classes["timeline-item-visible"]}`}></div>
          </div>
          <div className={`${classes["timeline-row"]} ${classes["timeline-row-right"]}`}>
              <div className={`${classes["timeline-blank"]} ${classes["timeline-item-visible"]}`}></div>
              <div className={classes["timeline-circle"]}><div className={classes["timeline-item-circle"]}></div></div>
              <div className={classes["timeline-item"]}>
                  <div className={classes["timeline-item-position"]}>HSC (XI and XII)</div>
                  <div className={classes["timeline-location"]}>
                      <span>&nbsp;<FontAwesomeIcon icon={faLocationPin}/>&nbsp;&nbsp;Thakur Viyda Mandir</span>
                      <span><FontAwesomeIcon icon={faCalendar}/>&nbsp;&nbsp;May 2019 - Jul 2019&nbsp;&nbsp;</span>
                  </div>
                  <ul className={classes["timeline-description"]}>
                      <li className={classes["timeline-description-item"]}>Learnt basics of HTML and CSS</li>
                      <li className={classes["timeline-description-item"]}>Marks: 87.54%</li>
                      <li className={classes["timeline-description-item"]}>Qualified for JEE Advance</li>
                  </ul>
                  <ul className={classes["timeline-skills"]}>
                      <li className={classes["timeline-skills-item"]}>HTML</li>
                      <li className={classes["timeline-skills-item"]}>CSS</li>
                  </ul>
              </div>
          </div>
          <div className={`${classes["timeline-row"]} ${classes["timeline-row-left"]} ${classes["timeline-row-bottom"]}`}>
              <div className={`${classes["timeline-circle"]} ${classes["timeline-item-invisible"]}`}><div className={classes["timeline-item-circle"]}></div></div>
              <div className={classes["timeline-item"]}>
                  <div className={classes["timeline-item-position"]}>ICSE (X)</div>
                  <div className={classes["timeline-location"]}>
                      <span>&nbsp;<FontAwesomeIcon icon={faLocationPin}/>&nbsp;&nbsp;Lokhandwala Foundation School</span>
                  </div>
                  <ul className={`${classes["timeline-description"]} ${classes["timeline-tenth"]}`}>
                      <li className={classes["timeline-description-item"]}>Learnt basics of Java, C++ and C</li>
                      <li className={classes["timeline-description-item"]}>Marks: 94.2%</li>
                      <li className={classes["timeline-description-item"]}>Scored 100 out of 100 in Computer Applications</li>
                  </ul>
              </div>
              <div className={`${classes["timeline-circle"]} ${classes["timeline-item-visible"]}`}><div className={classes["timeline-item-circle"]}></div></div>
              <div className={`${classes["timeline-blank"]} ${classes["timeline-item-visible"]}`}></div>
          </div>
      </div>
    </Fragment>
  );
};

export default Education;