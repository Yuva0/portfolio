import React, { Suspense, lazy } from 'react';
import classes from './css/Homepage.module.css';
import SkillSet from '../../skillset/SkillSet';
import Experience from '../../experience/Experience';
import Education from '../../education/Education';
import Intropage from '../../intropage/Intropage';
import { useTheme } from 'stelios';
import Loader from '../../Loader/Loader';

const Motto = lazy(() => {
    return Promise.all([
        import("../../motto/Motto"),
        new Promise((resolve) => setTimeout(resolve, 500)),
    ]).then(([moduleExports]) => moduleExports);
});
const CertificateSet = lazy(() => {
    return Promise.all([
        import("../../certificateset/CertificateSet"),
        new Promise((resolve) => setTimeout(resolve, 500)),
    ]).then(([moduleExports]) => moduleExports);
});
const ProjectSet = lazy(() => {
    return Promise.all([
        import("../../projectset/ProjectSet"),
        new Promise((resolve) => setTimeout(resolve, 500)),
    ]).then(([moduleExports]) => moduleExports);
});
// const HobbySet = lazy(() => {
//     return Promise.all([
//         import("../../hobbyset/HobbySet"),
//         new Promise((resolve) => setTimeout(resolve, 300)),
//     ]).then(([moduleExports]) => moduleExports);
// });

// import Motto from '../../motto/Motto';
// import CertificateSet from '../../certificateset/CertificateSet';
// import ProjectSet from '../../projectset/ProjectSet';

const Homepage = () => {

    const colorPalette = useTheme().theme.colorPalette;

    // Calculate window width - Do not use hooks!
    let certificateset = <CertificateSet title="Latest Certificates" time="latest" type="story" limit="8"/>
    if(window.innerWidth < 400){
        certificateset = <CertificateSet title="Latest Certificates" time="latest" type="story" limit="4"/>
    }

    return (
        <div className={classes.homepage} style={{backgroundColor: colorPalette.primary.appearance === "light" ? "white" : "#202124"}}>
            <Suspense fallback={<div style={{height: "600px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}><Loader/></div>}>
                <Intropage/>
                <Motto/>
                <ProjectSet title="Latest Projects" time="latest" limit="3"/>
                {certificateset}
                <Experience/>
                <SkillSet title="High Rated Skills" time="latest" limit="6" />
                <Education/>
            </Suspense>
        </div>
    )
};

export default Homepage;