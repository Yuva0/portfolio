import React from 'react';
import ReactDOM from 'react-dom';
import classes from "../modals/css/ProjectModal.module.css";
import colors from "../../tokens/color/color-tokens.json";
import { IconCross, IconSquareRoundedX, IconX } from '@tabler/icons-react';
import { Button, NumberInput, Text, ToggleButton, ToggleButtonGroup, useTheme } from 'stelios';
import resume_vscode from "../../assets/images/resume.png";
import resume_default from "../../assets/images/resume_default.png";

export const Backdrop = (props) => {
    return <div style={{position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", zIndex: 6, backgroundColor: "rgba(0, 0, 0, 0.75)"}} onClick={props.onClose}/>
};

const portalElement = document.getElementById('modal');
const ModalOverlay = (props) => {
    const theme = useTheme().theme;
    const _backgroundColor = theme.colorPalette.primary.appearance === "light" ? "white" : "#202124";
    return (
        <div className={classes.modal} style={{display: "flex", background: [_backgroundColor]}}>
            <div className={classes.modalWithScroll}>
                <div className={classes.modalContent}  style={{display:"flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>{props.children}</div>
            </div>
        </div>
    );
}


const Resume = (props) => {
    const [theme, setTheme] = React.useState("vscode");

    const handleDownloadResume = (theme) => {
        if (theme === "default") {
            window.open("https://drive.google.com/uc?export=download&id=1W-94nfA8bh8ZxruTvKEMTzTzM8NvaZHC");
        }
        else {
            window.open("https://drive.google.com/uc?export=download&id=1tryR6c3wMNq1jRBaCvrm5HMa-nfbTD7B");
        }
    }

    return (
    <>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
        {ReactDOM.createPortal(
            <ModalOverlay>
                <div className={classes.closeModal} style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                    <Text color="primary" size="large">Resume</Text>
                    <span><IconX onClick={props.onClose}/></span>
                </div>
                <ToggleButtonGroup color="primary" value={theme} width='100%' style={{marginTop: "1.5rem"}} onClick={(e, value) => setTheme(value)}>
                    <ToggleButton value="vscode"><Text disableColor color="primary">VS Code</Text></ToggleButton>
                    <ToggleButton value="default"><Text disableColor color="primary">Default</Text></ToggleButton>
                </ToggleButtonGroup>
                <div style={{width: "100%", marginTop: "1rem", borderRadius: "8px"}}>
                    <img style={{width: "100%", borderRadius: "8px"}} src={theme === "vscode" ? resume_vscode: resume_default} alt="resume"/>
                </div>
                <Button variant='neumorph' color='primary' style={{marginTop: "2rem", backgroundColor: colors.accent.primary, color: "white", border:0 }} onClick={handleDownloadResume}><Text disableColor>Download {theme==='vscode' ? "VS Code" : "Default"} Resume</Text></Button>
        </ModalOverlay>, portalElement)}
    </>
    )
};

export default Resume;