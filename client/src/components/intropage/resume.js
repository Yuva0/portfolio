import React from 'react';
import ReactDOM from 'react-dom';
import classes from "../modals/css/ProjectModal.module.css";
import colors from "../../tokens/color/color-tokens.json";
import { IconCross, IconSquareRoundedX, IconX } from '@tabler/icons-react';
import { Button, NumberInput, Text, ToggleButton, ToggleButtonGroup, useTheme } from 'stelios';
import resume_vscode from "../../assets/images/resume_vscode.png";
import resume_ats from "../../assets/images/resume_ats.png";
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
    const _color = useTheme().theme.colorPalette.primary.appearance === "light" ? "black" : "white";

    const handleDownloadResume = () => {
        if (theme === "ats") {
            window.open("https://drive.google.com/uc?export=download&id=1-dxYpgjDfMGN-G_eQMWLNsKXqYi1jOPc");
        }
        else {
            window.open("https://drive.google.com/uc?export=download&id=1eNO7UYY3GoTw6PCwYZXm6Ze5OktcR76p");
        }
    }

    const handleFullScreenResume = () => {
        if (theme === "ats") {
            window.open("https://tanujsengupta.b-cdn.net/resume/resume_ats.pdf");
        }
        else {
            window.open("https://tanujsengupta.b-cdn.net/resume/vscode_resume.pdf");
        }
    }

    return (
    <>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
        {ReactDOM.createPortal(
            <ModalOverlay>
                <div className={classes.closeModal} style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                    <Text color="primary" size="large">Resume</Text>
                    <span><IconX color={_color} onClick={props.onClose}/></span>
                </div>
                <ToggleButtonGroup color="primary" value={theme} width='100%' style={{marginTop: "1.5rem"}} onClick={(e, value) => setTheme(value)}>
                    <ToggleButton value="vscode"><Text disableColor color="primary">VS Code</Text></ToggleButton>
                    <ToggleButton value="ats"><Text disableColor color="primary">ATS-friendly</Text></ToggleButton>
                </ToggleButtonGroup>
                <div style={{width: "100%", marginTop: "1rem", borderRadius: "8px"}}>
                    <img style={{width: "100%", borderRadius: "8px"}} src={theme === "vscode" ? resume_vscode: resume_ats} alt="resume"/>
                </div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "1rem"}}>
                    <Button variant='neumorph' color='primary' style={{marginTop: "2rem", backgroundColor: colors.accent.primary, color: "white", border:0 }} onClick={handleDownloadResume}><Text disableColor>Download</Text></Button>
                    <Button variant='neumorph' color='primary' style={{marginTop: "2rem", border:0 }} onClick={handleFullScreenResume}><Text disableColor>View in new tab</Text></Button>
                </div>
        </ModalOverlay>, portalElement)}
    </>
    )
};

export default Resume;