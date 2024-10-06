import CoverPage from '../../coverpage/Coverpage';
import Motto from '../../motto/Motto';
import CertificateSet from '../../certificateset/CertificateSet';
import ProjectSet from '../../projectset/ProjectSet';

import classes from './css/Homepage.module.css';
import SkillSet from '../../skillset/SkillSet';
import Experience from '../../experience/Experience';
import Education from '../../education/Education';
import HobbySet from '../../hobbyset/HobbySet';
import LineDiamondLine from '../../ui/linediamondline/LineDiamondLine';
import Intropage from '../../intropage/Intropage';
import { useTheme } from 'stelios';

const Homepage = () => {

    const colorPalette = useTheme().theme.colorPalette;

    // Calculate window width - Do not use hooks!
    let certificateset = <CertificateSet title="Latest Certificates" time="latest" type="story" limit="8"/>
    if(window.innerWidth < 400){
        certificateset = <CertificateSet title="Latest Certificates" time="latest" type="story" limit="4"/>
    }

    return (
        <div className={classes.homepage} style={{backgroundColor: colorPalette.primary.appearance === "light" ? "white" : "#202124"}}>
            {/* <CoverPage /> */}
            <Intropage/>
            <Motto/>
            <ProjectSet title="Latest Projects" time="latest" limit="3"/>
            {certificateset}
            <Experience/>
            <SkillSet title="High Rated Skills" time="latest" limit="6" />
            <Education/>
            {/* <HobbySet title="Hobbies" time="latest" limit="6" /> */}
        </div>
    )
};

export default Homepage;