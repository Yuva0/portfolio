import { Fragment } from 'react';
import classes from './css/Experience.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin,faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Card, List, ListItem, Tag, Text, useTheme } from 'stelios';
import styled from 'styled-components';

const StyledTimeline = styled.div`
  background-color: ${props => props.$timelineColor};
`;
const StyledTimelineItemCircle = styled.div`
  background-color: ${props => props.$circleColor};
`;

const Experience = () => {
    const _color = useTheme().theme.colorPalette.primary.appearance === "light" ? "black" : "white";
    const _primaryBgColor = useTheme().theme.colorPalette.primary.accentScale[8];
    
    return (
        <div>
            <Text size="large" color="primary" className={`${classes.experienceTitle} title`}>Experience</Text>
            <div className={classes.timeline}>
                <div className={`${classes["timeline-row"]} ${classes["timeline-row-right"]} ${classes["timeline-row-first"]}`}>
                    <div className={`${classes["timeline-blank"]} ${classes["timeline-item-visible"]}`}></div>
                    <div className={classes["timeline-circle"]}><div className={classes["timeline-item-circle"]}></div></div>
                    <Card style={{padding: "1.25rem", width: "45%", display: "flex", alignItems:"stretch"}} variant="neumorph" color="primary">
                        <>
                        <Text preciseColor={_color}>Sr. Software Developer</Text>
                        <div className={classes["timeline-location"]}>
                            <Text size="small" preciseColor={_color} variant='span'>&nbsp;<FontAwesomeIcon icon={faLocationPin}/>&nbsp;&nbsp;Whatfix</Text>
                            <Text size="small" preciseColor={_color}><FontAwesomeIcon icon={faCalendar}/>&nbsp;&nbsp;Oct 2023 - Present&nbsp;&nbsp;</Text>
                        </div>
                        <List className={classes["timeline-description"]} size='small' style={{gap:"0.25rem", paddingLeft: "1rem"}}>
                            <ListItem className={classes["timeline-description-item"]}><Text preciseColor={_color} size="small" variant="paragraph">Developing a comprehensive component design system for our products.</Text></ListItem>
                            <ListItem className={classes["timeline-description-item"]}><Text preciseColor={_color} size="small" variant="paragraph">Ensuring accessibility and optimizing performance of all designed components.</Text></ListItem>
                            <ListItem className={classes["timeline-description-item"]}><Text preciseColor={_color} size="small" variant="paragraph">Currently managing a library of 60+ components, all built entirely from scratch.</Text></ListItem> 
                        </List>
                        <List variant="unordered" size="small" style={{padding: 0, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop: "1rem"}} color="primary">
                            <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Design System</Text></Tag></ListItem>
                            <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>React</Text></Tag></ListItem>
                            <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Jest</Text></Tag></ListItem>
                            <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Javascript</Text></Tag></ListItem>
                        </List>
                        </>
                    </Card>
                </div>
                <div className={`${classes["timeline-row"]} ${classes["timeline-row-left"]}`}>
                    <div className={`${classes["timeline-circle"]} ${classes["timeline-item-invisible"]}`}><StyledTimelineItemCircle $circleColor={_primaryBgColor} className={classes["timeline-item-circle"]}/></div>
                    <Card style={{padding: "1.25rem", width: "45%", display: "flex", alignItems:"stretch"}} variant="neumorph" color="primary">
                        <>
                            <Text preciseColor={_color}>Software Developer</Text>
                            <div className={classes["timeline-location"]}>
                                <Text size="small" preciseColor={_color} variant='span'>&nbsp;<FontAwesomeIcon icon={faLocationPin}/>&nbsp;&nbsp;SAP Labs, India</Text>
                                <Text size="small" preciseColor={_color}><FontAwesomeIcon icon={faCalendar}/>&nbsp;&nbsp;Jan 2020 - Oct 2023&nbsp;&nbsp;</Text>
                            </div>
                            <List className={classes["timeline-description"]} size='small' style={{gap:"0.25rem", paddingLeft: "1rem"}}>
                                <ListItem className={classes["timeline-description-item"]}><Text preciseColor={_color} size="small" variant="paragraph">Managed the complete flow (Back-End. Front-End and APIs) of 8 websites</Text></ListItem>
                                <ListItem className={classes["timeline-description-item"]}><Text preciseColor={_color} size="small" variant="paragraph">Worked with experienced testers to find performance bottlenecks thus improving page loading time by 19%</Text></ListItem>
                                <ListItem className={classes["timeline-description-item"]}><Text preciseColor={_color} size="small" variant="paragraph">Constructed test cases to minimize unused code and remove dead code</Text></ListItem> 
                                <ListItem className={classes["timeline-description-item"]}><Text preciseColor={_color} size="small" variant="paragraph">Won Rising Star Award in 2021</Text></ListItem> 
                            </List>
                            <List variant="unordered" size="small" style={{padding: 0, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop: "1rem"}} color="primary">
                                <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>OpenUI5</Text></Tag></ListItem>
                                <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Javascript</Text></Tag></ListItem>
                                <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>JMeter</Text></Tag></ListItem>
                                <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Postman</Text></Tag></ListItem>
                            </List>
                        </>
                    </Card>
                    <div className={`${classes["timeline-circle"]} ${classes["timeline-item-visible"]}`}><StyledTimelineItemCircle $circleColor={_primaryBgColor} className={`${classes["timeline-item-circle"]} ${classes["timeline-item-visible"]}`}/></div>
                    <div className={`${classes["timeline-blank"]} ${classes["timeline-item-visible"]}`}></div>
                </div>
                <div className={`${classes["timeline-row"]} ${classes["timeline-row-right"]}`}>
                    <div className={`${classes["timeline-blank"]} ${classes["timeline-item-visible"]}`}></div>
                    <div className={classes["timeline-circle"]}><StyledTimelineItemCircle $circleColor={_primaryBgColor} className={classes["timeline-item-circle"]}/></div>
                    <Card style={{padding: "1.25rem", width: "45%", display: "flex", alignItems:"stretch"}} variant="neumorph" color="primary">
                        <>
                            <Text preciseColor={_color}>Project Intern</Text>
                            <div className={classes["timeline-location"]}>
                                <Text size="small" preciseColor={_color} variant='span'>&nbsp;<FontAwesomeIcon icon={faLocationPin}/>&nbsp;&nbsp;Wipro Limited</Text>
                                <Text size="small" preciseColor={_color}><FontAwesomeIcon icon={faCalendar}/>&nbsp;&nbsp;May 2019 - Jul 2019&nbsp;&nbsp;</Text>
                            </div>
                            <List className={classes["timeline-description"]} size='small' style={{gap:"0.25rem", paddingLeft: "1rem"}}>
                                <ListItem className={classes["timeline-description-item"]}><Text preciseColor={_color} size="small" variant="paragraph">Worked on Web Testing using Selenium WebDriver</Text></ListItem>
                                <ListItem className={classes["timeline-description-item"]}><Text preciseColor={_color} size="small" variant="paragraph">Used Eclipse IDE to work in Selenium</Text></ListItem>
                                <ListItem className={classes["timeline-description-item"]}><Text preciseColor={_color} size="small" variant="paragraph">Studied about Agile and Waterfall technology</Text></ListItem> 
                            </List>
                            <List variant="unordered" size="small" style={{padding: 0, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop: "1rem"}} color="primary">
                                <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Selenium</Text></Tag></ListItem>
                                <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Agile</Text></Tag></ListItem>
                                <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Waterfall</Text></Tag></ListItem>
                                <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Eclipse</Text></Tag></ListItem>
                            </List>
                        </>
                    </Card>
                </div>
                <div className={`${classes["timeline-row"]} ${classes["timeline-row-left"]}`}>
                    <div className={`${classes["timeline-circle"]} ${classes["timeline-item-invisible"]}`}><StyledTimelineItemCircle $circleColor={_primaryBgColor} className={classes["timeline-item-circle"]}/></div>
                    <Card style={{padding: "1.25rem", width: "45%", display: "flex", alignItems:"stretch"}} variant="neumorph" color="primary">
                        <>
                            <Text preciseColor={_color}>Web Developer Intern</Text>
                            <div className={classes["timeline-location"]}>
                                <Text size="small" preciseColor={_color} variant='span'>&nbsp;<FontAwesomeIcon icon={faLocationPin}/>&nbsp;&nbsp;Larsen & Toubro</Text>
                                <Text size="small" preciseColor={_color}><FontAwesomeIcon icon={faCalendar}/>&nbsp;&nbsp;May 2018 - Jun 2018&nbsp;&nbsp;</Text>
                            </div>
                            <List className={classes["timeline-description"]} size='small' style={{gap:"0.25rem", paddingLeft: "1rem"}}>
                                <ListItem className={classes["timeline-description-item"]}><Text preciseColor={_color} size="small" variant="paragraph">Worked on creating a Sharepoint website</Text></ListItem>
                                <ListItem className={classes["timeline-description-item"]}><Text preciseColor={_color} size="small" variant="paragraph">Front-end was created using ASP.NET and Javascript</Text></ListItem>
                                <ListItem className={classes["timeline-description-item"]}><Text preciseColor={_color} size="small" variant="paragraph">Back-end was developed using C#</Text></ListItem> 
                            </List>
                            <List variant="unordered" size="small" style={{padding: 0, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop: "1rem"}} color="primary">
                                <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>ASP.NET</Text></Tag></ListItem>
                                <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Javascript</Text></Tag></ListItem>
                                <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>Sharepoint</Text></Tag></ListItem>
                                <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>SQL</Text></Tag></ListItem>
                            </List>
                        </>
                    </Card>
                    <div className={`${classes["timeline-circle"]} ${classes["timeline-item-visible"]}`}><StyledTimelineItemCircle $circleColor={_primaryBgColor} className={`${classes["timeline-item-circle"]} ${classes["timeline-item-visible"]}`}/></div>
                    <div className={`${classes["timeline-blank"]} ${classes["timeline-item-visible"]}`}></div>
                </div>
                <StyledTimeline $timelineColor={_primaryBgColor} className={classes["time-line"]}>&nbsp;</StyledTimeline >
            </div>
        </div>
  );
}

export default Experience;