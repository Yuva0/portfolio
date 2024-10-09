import * as React from "react";
import profileImage from "../../assets/images/profile.jpg";
import { Avatar, Button, Card, Link, List, ListItem, Text, useTheme } from "stelios";
import colors from "../../tokens/color/color-tokens.json";
import Resume from "./resume";

const Intropage = () => {
    const _color = useTheme().theme.colorPalette.primary.appearance === "light" ? "black" : "white";
    const _primaryBgColor = useTheme().theme.colorPalette.primary.accentScale[8]
    const _primaryColor = useTheme().theme.colorPalette.primary.accentContrast;
    const [showResume, setShowResume] = React.useState(false);

    const onCloseModalHandler = () => {
        setShowResume(false);
    }

    return (
        <>
        <Card
        animate="fade-in"
        variant="neumorph"
        color="primary"
        style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.75rem",
            width: "100%",
            flexWrap: "wrap"
        }}
        >
        <>
            <div
                style={{
                    flex: "1 1 30%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                >
                <Avatar
                    size="xlarge"
                    type="image"
                    src={profileImage}
                    alt="Profile Image"
                />
                <Text
                    variant="h4"
                    color="primary"
                    size="large"
                    fontFamily='"Alegreya", serif;'
                    style={{ marginTop: "1rem", textAlign: "center" }}
                >
                    Tanuj Sengupta
                </Text>
                </div>
            <div style={{ flex: "1 1 65%", padding: "1rem 0" }}>

            <List color="primary" title={<Text color="primary" size="large">FrontEnd Developer</Text>} style={{gap: "0.25rem"}}>
                <ListItem><Text preciseColor={_color} size="medium">Specialising in component design systems and accessibility.</Text></ListItem>
                <ListItem><Text preciseColor={_color} size="medium" style={{marginTop: "0.5rem"}}>Created multiple websites with focus on functionality, performance and user experience.</Text></ListItem>
                <ListItem><Text preciseColor={_color} size="medium" style={{marginTop: "0.5rem"}}>Currently creating a themable design system with over 100 components - <Link variant="underline" target="_blank" color="primary" href="https://steliosui.com/">www.steliosui.com</Link></Text></ListItem>
            </List>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "2rem", columnGap: "2rem", rowGap: "1rem", flexWrap: "wrap"}}>
                <Button variant="neumorph" color="primary" onClick={() => {setShowResume(true)}} style={{backgroundColor: _primaryBgColor, color: _primaryColor , border:0}}>View Resume</Button>
                <Button variant="neumorph" color="primary" onClick={() => {window.open("https://www.linkedin.com/in/tanuj-sengupta-872a05129/")}}>LinkedIn Profile</Button>
            </div>
            </div>
        </>
        </Card>
        {showResume && (<Resume onClose={onCloseModalHandler}/>)}
        </>
    );
};

export default Intropage;
