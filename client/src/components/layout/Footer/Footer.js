import classes from './css/Footer.module.css';
import { List, ListItem, Text, useTheme } from 'stelios';
import { Link } from 'react-router-dom';
import { Link as SteliosLink } from 'stelios';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

const Footer = () => {
    const colorPalette = useTheme().theme.colorPalette;
    const _primaryBgColor = colorPalette.primary.accentScale[8];
    return (
        <div className={classes.footer} style={{backgroundColor: _primaryBgColor}}>
            <div className={classes.footerContent}>
                <Text variant="div" fontSize='2rem' preciseColor="white" style={{textAlign: "center", marginTop: "36px"}}>Thank you for visiting!</Text>
                <div className={classes.footerMenuComplete} style={{marginTop: "24px"}}>
                    <div className={classes.footerMenu}>
                        <div className={classes.footerMenuHeader}><Text variant="span" preciseColor='white'>Content</Text></div>
                        <List className={classes.footerMenuContent} style={{padding:"0 0 0 12px", margin: 0, display: "flex", flexDirection: "row", justifyContent: 'center', alignItems:"center"}}>
                            <ListItem><Link to="/"><Text preciseColor="white">Home</Text></Link></ListItem>
                            <ListItem><Link to="/projects"><Text preciseColor="white">Projects</Text></Link></ListItem>
                            <ListItem><Link to="/certificates"><Text preciseColor="white">Certificates</Text></Link></ListItem>
                            <ListItem><Link to="/skills"><Text preciseColor="white">Skills</Text></Link></ListItem>
                        </List>
                    </div>
                    <div className={`${classes.footerMenu} ${classes.lastFooterMenu}`}>
                    <div className={classes.footerMenuHeader}><Text variant="span" preciseColor='white'>Socials</Text></div>
                        <ul className={classes.footerMenuContent}>
                            <SteliosLink preciseColor="white" href="https://www.linkedin.com/in/tanuj-sengupta-872a05129/"><IconBrandLinkedin size="1.75rem"/></SteliosLink>
                            <SteliosLink preciseColor="white" href="https://github.com/yuva0"><IconBrandGithub size="1.75rem"/></SteliosLink>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Footer;