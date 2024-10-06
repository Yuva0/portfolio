import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin, faCalendar } from "@fortawesome/free-solid-svg-icons";

import classes from './css/Education.module.css';
import { Card, List, ListItem, Tag, Text, useTheme } from "stelios";

const Education = () => {
    const _color = useTheme().theme.colorPalette.primary.appearance === "light" ? "black" : "white";

    return (
        <div>
        <Text color="primary" size="large">Education</Text>
        <div id="educational-timeline" className={classes.timeline}>
            <div className={classes["time-line"]}>&nbsp;</div>
            <div className={`${classes["timeline-row"]} ${classes["timeline-row-left"]} ${classes["timeline-row-first"]}`}>
                <div className={`${classes["timeline-circle"]} ${classes["timeline-item-invisible"]}`}><div className={classes["timeline-item-circle"]}></div></div>
                <Card style={{padding: "1.25rem", width: "45%", display: "flex", alignItems:"stretch"}} variant="neumorph" color="primary">
                    <>
                    <Text preciseColor={_color}>B.Tech (Computer Science)</Text>
                    <div className={classes["timeline-location"]}>
                        <Text size="small" preciseColor={_color} variant='span'>&nbsp;<FontAwesomeIcon icon={faLocationPin}/>&nbsp;&nbsp;Manipal University</Text>
                        <Text size="small" preciseColor={_color}><FontAwesomeIcon icon={faCalendar}/>&nbsp;&nbsp;Apr 2016 - Apr 2020&nbsp;&nbsp;</Text>
                    </div>
                    <List className={classes["timeline-description"]} size='small' style={{gap:"0.25rem", paddingLeft: "1rem"}}>
                        <ListItem><Text size="small" preciseColor={_color}>1st Year: Programming Languages</Text></ListItem> 
                        <List style={{paddingLeft: 0, marginTop: 0}}>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>Learnt C, C++ and Java</Text></ListItem>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>Learnt basics of Python through HackerRank</Text></ListItem>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>GPA: 9.1</Text></ListItem>
                        </List>
                        <ListItem style={{marginTop: "1rem"}}><Text size="small" preciseColor={_color}>2nd Year: App Development</Text></ListItem> 
                        <List style={{paddingLeft: 0, marginTop: 0}}>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>Dived into Android Studio to understand how to create apps</Text></ListItem>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>Learnt PHP and MySQL using Coursera</Text></ListItem>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>GPA: 8.7</Text></ListItem>
                        </List>
                        <ListItem style={{marginTop: "1rem"}}><Text size="small" preciseColor={_color}>3rd Year: Machine Learning</Text></ListItem> 
                        <List style={{paddingLeft: 0, marginTop: 0}}>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>Learnt about Deep Learning, Artificial Neural Networks and Logistic Regression</Text></ListItem>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>Implemented it using Jupyter Notebooks and R</Text></ListItem>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>GPA:8.2</Text></ListItem>
                        </List>
                        <ListItem style={{marginTop: "1rem"}}><Text size="small" preciseColor={_color}>4th Year: Web Development</Text></ListItem> 
                        <List style={{paddingLeft: 0, marginTop: 0}}>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>Learnt about PHP, Javascript and MySQL</Text></ListItem>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>Increased my proficiency in basic languages like HTML5 and CSS</Text></ListItem>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>GPA: 8.6</Text></ListItem>
                        </List>
                        <ListItem style={{marginTop: "1rem"}}><Text size="small" preciseColor={_color}>CGPA: 8.6</Text></ListItem> 
                    </List>
                    <List variant="unordered" size="small" style={{padding: 0, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop: "1rem", flexWrap: "wrap"}} color="primary">
                        <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Javascript</Text></Tag></ListItem>
                        <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>PHP</Text></Tag></ListItem>
                        <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Android Studio</Text></Tag></ListItem>
                        <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>MySQL</Text></Tag></ListItem>
                        <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>C</Text></Tag></ListItem>
                        <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>C#</Text></Tag></ListItem>
                        <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Java</Text></Tag></ListItem>
                        <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Python</Text></Tag></ListItem>
                        <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Deep Learning</Text></Tag></ListItem>
                    </List>
                    </>
                </Card>
                <div className={`${classes["timeline-circle"]} ${classes["timeline-item-visible"]}`}><div className={`${classes["timeline-item-circle"]} ${classes["timeline-item-visible"]}`}></div></div>
                <div className={`${classes["timeline-blank"]} ${classes["timeline-item-visible"]}`}></div>
            </div>
            <div className={`${classes["timeline-row"]} ${classes["timeline-row-right"]}`}>
                <div className={`${classes["timeline-blank"]} ${classes["timeline-item-visible"]}`}></div>
                <div className={classes["timeline-circle"]}><div className={classes["timeline-item-circle"]}></div></div>
                <Card style={{padding: "1.25rem", width: "45%", display: "flex", alignItems:"stretch"}} variant="neumorph" color="primary">
                    <>
                        <Text preciseColor={_color}>HSC (XI and XII)</Text>
                        <div className={classes["timeline-location"]}>
                            <Text size="small" preciseColor={_color} variant='span'>&nbsp;<FontAwesomeIcon icon={faLocationPin}/>&nbsp;&nbsp;Thakur Viyda Mandir</Text>
                            <Text size="small" preciseColor={_color}><FontAwesomeIcon icon={faCalendar}/>&nbsp;&nbsp;May 2019 - Jul 2019&nbsp;&nbsp;</Text>
                        </div>
                        <List className={classes["timeline-description"]} size='small' style={{gap:"0.25rem", paddingLeft: "1rem"}}>
                            <ListItem><Text size="small" preciseColor={_color}>Learnt basics of HTML and CSS</Text></ListItem>
                            <ListItem><Text size="small" preciseColor={_color}>Marks: 87.54%</Text></ListItem>
                            <ListItem><Text size="small" preciseColor={_color}>Qualified for JEE Advance</Text></ListItem>
                        </List>
                        
                        <List variant="unordered" size="small" style={{padding: 0, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop: "1rem", flexWrap: "wrap"}} color="primary">
                            <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>HTML</Text></Tag></ListItem>
                            <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>CSS</Text></Tag></ListItem>
                        </List>
                    </>
                </Card>
            </div>
            <div className={`${classes["timeline-row"]} ${classes["timeline-row-left"]} ${classes["timeline-row-bottom"]}`}>
                <div className={`${classes["timeline-circle"]} ${classes["timeline-item-invisible"]}`}><div className={classes["timeline-item-circle"]}></div></div>
                <Card style={{padding: "1.25rem", width: "45%", display: "flex", alignItems:"stretch"}} variant="neumorph" color="primary">
                    <>
                        <Text preciseColor={_color}>ICSE (X)</Text>
                        <div className={classes["timeline-location"]}>
                            <Text size="small" preciseColor={_color} variant='span'>&nbsp;<FontAwesomeIcon icon={faLocationPin}/>&nbsp;&nbsp;Lokhandwala Foundation School</Text>
                        </div>
                        <List className={classes["timeline-description"]} size='small' style={{gap:"0.25rem", paddingLeft: "1rem"}}>
                            <ListItem><Text size="small" preciseColor={_color}>Learnt basics of Java, C++ and C</Text></ListItem>
                            <ListItem><Text size="small" preciseColor={_color}>Marks: 94.2%</Text></ListItem>
                            <ListItem><Text size="small" preciseColor={_color}>Scored 100 out of 100 in Computer Applications</Text></ListItem>
                        </List>
                    </>
                </Card>
                <div className={`${classes["timeline-circle"]} ${classes["timeline-item-visible"]}`}><div className={classes["timeline-item-circle"]}></div></div>
                <div className={`${classes["timeline-blank"]} ${classes["timeline-item-visible"]}`}></div>
            </div>
        </div>
        </div>
    );
};

export default Education;